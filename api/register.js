// api/register.js
import { google } from 'googleapis';
import formidable from 'formidable';
import fs from 'fs';

export const config = {
    api: { bodyParser: false }, // we'll parse multipart ourselves
};

function parseForm(req) {
    const form = formidable({
        multiples: false,
        keepExtensions: true,
        maxFileSize: 10 * 1024 * 1024, // 10MB
    });
    return new Promise((resolve, reject) => {
        form.parse(req, (err, fields, files) => {
            if (err) return reject(err);
            resolve({ fields, files });
        });
    });
}

function getAuth() {
    const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const privateKey = (process.env.GOOGLE_PRIVATE_KEY || '').replace(/\\n/g, '\n');
    if (!clientEmail || !privateKey) {
        throw new Error('Missing GOOGLE_SERVICE_ACCOUNT_EMAIL or GOOGLE_PRIVATE_KEY env');
    }
    return new google.auth.JWT(
        clientEmail,
        null,
        privateKey,
        [
            'https://www.googleapis.com/auth/drive.file',
            'https://www.googleapis.com/auth/spreadsheets',
        ]
    );
}

async function uploadToDrive(drive, folderId, file, fields) {
    if (!file) return '';
    const safeBase = [
        fields.firstName || 'First',
        fields.lastName || 'Last',
        fields.transactionId || 'Txn'
    ].join('_').replace(/[^\w.-]+/g, '-');

    const res = await drive.files.create({
        requestBody: {
            name: `${safeBase}_${Date.now()}`,
            parents: [folderId],
        },
        media: {
            mimeType: file.mimetype,
            body: fs.createReadStream(file.filepath),
        },
        fields: 'id, webViewLink',
    });

    // Optional: make link public (uncomment if you need public access)
    // await drive.permissions.create({
    //   fileId: res.data.id,
    //   requestBody: { role: 'reader', type: 'anyone' },
    // });

    return res.data.webViewLink || '';
}

async function appendToSheet(sheets, sheetId, values) {
    await sheets.spreadsheets.values.append({
        spreadsheetId: sheetId,
        range: 'Sheet1!A1',
        valueInputOption: 'USER_ENTERED',
        requestBody: { values: [values] },
    });
}

export default async function handler(req, res) {
    // CORS (same-origin on Vercel is fine; adjust if posting cross-domain)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') return res.status(204).end();
    if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'Method not allowed' });

    try {
        const SHEET_ID = process.env.SHEET_ID;
        const FOLDER_ID = process.env.FOLDER_ID;
        if (!SHEET_ID || !FOLDER_ID) {
            throw new Error('Missing SHEET_ID or FOLDER_ID env');
        }

        const { fields, files } = await parseForm(req);

        const auth = getAuth();
        await auth.authorize();
        const drive = google.drive({ version: 'v3', auth });
        const sheets = google.sheets({ version: 'v4', auth });

        const fileUrl = await uploadToDrive(drive, FOLDER_ID, files?.receipt, fields);

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
        console.error(err);
        return res.status(500).json({ ok: false, error: String(err) });
    }
}
