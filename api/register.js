// api/register.js
import { google } from 'googleapis';
import formidable from 'formidable';
import fs from 'fs';

export const config = { api: { bodyParser: false } };

// Parse multipart/form-data
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

// Auth
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

// Normalize a file regardless of how formidable shapes it
function pickFile(files, key) {
    let f = files?.[key];
    if (!f) return null;
    if (Array.isArray(f)) f = f[0];
    return f || null;
}

// Upload to Drive
async function uploadToDrive(drive, folderId, file, fields) {
    if (!file) return ''; // if you prefer to enforce, throw an error instead
    const filePath = file.filepath || file.path || file.tempFilePath;
    if (!filePath) {
        throw new Error('UPLOAD: File path missing (check form enctype and input name="receipt").');
    }

    const safeBase = [
        fields.firstName || 'First',
        fields.lastName || 'Last',
        fields.transactionId || 'Txn',
    ].join('_').replace(/[^\w.-]+/g, '-');

    const created = await drive.files.create({
        requestBody: { name: `${safeBase}_${Date.now()}`, parents: [folderId] },
        media: {
            mimeType: file.mimetype || 'application/octet-stream',
            body: fs.createReadStream(filePath),
        },
        fields: 'id, webViewLink',
    });

    // Optional: make file public
    // await drive.permissions.create({ fileId: created.data.id, requestBody: { role: 'reader', type: 'anyone' } });

    return created.data.webViewLink || '';
}

// Append to Sheets
async function appendToSheet(sheets, sheetId, values) {
    const RANGE = 'Sheet1!A1'; // change to e.g. 'Registrations!A1' if your tab name differs
    await sheets.spreadsheets.values.append({
        spreadsheetId: sheetId,
        range: RANGE,
        valueInputOption: 'USER_ENTERED',
        requestBody: { values: [values] },
    });
}

export default async function handler(req, res) {
    // CORS (relax if your form is same-origin already)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') return res.status(204).end();
    if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'Method not allowed' });

    try {
        const { SHEET_ID, FOLDER_ID } = process.env;
        if (!SHEET_ID || !FOLDER_ID) throw new Error('ENV: Missing SHEET_ID or FOLDER_ID');

        const { fields, files } = await parseForm(req);

        // Ensure the file came through with the right key
        const receipt = pickFile(files, 'receipt');
        if (!receipt) {
            return res.status(400).json({
                ok: false,
                error: 'Missing file "receipt". Ensure <input type="file" name="receipt"> and enctype="multipart/form-data".',
                debug: { fileKeys: Object.keys(files || {}) }
            });
        }

        const auth = getAuth();
        await auth.authorize();
        const drive = google.drive({ version: 'v3', auth });
        const sheets = google.sheets({ version: 'v4', auth });

        const fileUrl = await uploadToDrive(drive, FOLDER_ID, receipt, fields);

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
                'Check: form enctype, input name="receipt", file size (<10MB), env vars, sheet tab name, and service account access.',
        });
    }
}
