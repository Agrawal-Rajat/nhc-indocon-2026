// api/register.js
import { google } from 'googleapis';
import formidable from 'formidable';
import fs from 'fs';

export const config = { api: { bodyParser: false } };

/* ---------- utils ---------- */
function parseForm(req) {
    const form = formidable({
        multiples: false,
        keepExtensions: true,
        maxFileSize: 10 * 1024 * 1024, // 10MB
    });
    return new Promise((resolve, reject) => {
        form.parse(req, (err, fields, files) => (err ? reject(err) : resolve({ fields, files })));
    });
}

function getAuth() {
    const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    let key = process.env.GOOGLE_PRIVATE_KEY || '';
    if (!email || !key) throw new Error('ENV: Missing GOOGLE_SERVICE_ACCOUNT_EMAIL or GOOGLE_PRIVATE_KEY');
    key = key.replace(/\\n/g, '\n'); // Vercel stores newlines as \n
    return new google.auth.JWT(email, null, key, [
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/spreadsheets',
    ]);
}

function pickFile(files, key) {
    let f = files?.[key];
    if (!f) return null;
    if (Array.isArray(f)) f = f[0];
    return f || null;
}

/* ---------- Drive upload (supports Shared Drives) ---------- */
async function uploadToDrive(drive, folderId, file, fields) {
    if (!file) return '';
    if (!folderId) throw new Error('ENV: Missing FOLDER_ID');

    const filePath = file.filepath || file.path || file.tempFilePath;
    if (!filePath) throw new Error('UPLOAD: File path missing (check enctype and input name="receipt").');

    const safeBase = [
        fields.firstName || 'First',
        fields.lastName || 'Last',
        fields.transactionId || 'Txn',
    ].join('_').replace(/[^\w.-]+/g, '-');

    const created = await drive.files.create({
        requestBody: { name: `${safeBase}_${Date.now()}`, parents: [folderId] },
        media: { mimeType: file.mimetype || 'application/octet-stream', body: fs.createReadStream(filePath) },
        fields: 'id, webViewLink',
        supportsAllDrives: true, // REQUIRED if folderId is in a Shared Drive (harmless otherwise)
    });

    // If you want public view-by-link, uncomment:
    // await drive.permissions.create({
    //   fileId: created.data.id,
    //   requestBody: { role: 'reader', type: 'anyone' },
    //   supportsAllDrives: true,
    // });

    return created.data.webViewLink || '';
}

/* ---------- Sheets append ---------- */
async function appendToSheet(sheets, sheetId, values) {
    if (!sheetId) throw new Error('ENV: Missing SHEET_ID');
    const RANGE = 'Sheet1!A1'; // change if your tab is not 'Sheet1'
    await sheets.spreadsheets.values.append({
        spreadsheetId: sheetId,
        range: RANGE,
        valueInputOption: 'USER_ENTERED',
        requestBody: { values: [values] },
    });
}

/* ---------- Handler ---------- */
export default async function handler(req, res) {
    // CORS (relax if same-origin)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') return res.status(204).end();
    if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'Method not allowed' });

    try {
        const { SHEET_ID, FOLDER_ID } = process.env;
        if (!SHEET_ID) throw new Error('ENV: Missing SHEET_ID');

        // Parse incoming form
        const { fields, files } = await parseForm(req);

        // 2-step flow: if Apps Script already uploaded the file, we get its URL here
        const receiptUrl = fields?.receiptUrl ? String(fields.receiptUrl) : '';

        // Auth once
        const auth = getAuth();
        await auth.authorize();
        const drive = google.drive({ version: 'v3', auth });
        const sheets = google.sheets({ version: 'v4', auth });

        // If no receiptUrl, try to upload the binary to Drive (Shared Drive supported)
        let fileUrl = receiptUrl;
        if (!fileUrl) {
            const receipt = pickFile(files, 'receipt');
            if (!receipt) {
                return res.status(400).json({
                    ok: false,
                    error: 'Missing payment file. Provide receiptUrl (2-step) or input name="receipt".',
                    debug: { fileKeys: Object.keys(files || {}) },
                });
            }
            fileUrl = await uploadToDrive(drive, FOLDER_ID, receipt, fields);
        }

        // Build the row for Sheets
        const row = [
            new Date().toISOString(),
            fields.title || '',
            fields.firstName || '',
            fields.middleName || '',
            fields.lastName || '',
            fields.phone || '',
            fields.email || '',
            fields.qualification || '',
            fields.designation || '',
            fields.state || '',
            fields.city || '',
            fields.organization || '',
            fields.nrCategory || '',
            fields.accompany || '',
            fields.residential_2d1n || '',
            fields.residential_3d2n || '',
            fields.transactionId || '',
            fileUrl || '',
        ];

        await appendToSheet(sheets, SHEET_ID, row);
        return res.status(200).json({ ok: true, fileUrl });
    } catch (err) {
        const g = err?.response?.data?.error;
        const msg = g?.message || err?.message || String(err);
        return res.status(500).json({
            ok: false,
            error: msg,
            hint:
                'If using personal My Drive, upload via Apps Script and send receiptUrl. For Shared Drives, ensure the folder is in a Shared Drive, the service account has access, and supportsAllDrives=true.',
        });
    }
}
