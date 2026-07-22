require('@next/env').loadEnvConfig(process.cwd());
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const DRIVE_FOLDER_ID = '1Qv-lH_BOWoI7l_j2wZ9GfwGWKBupeDNJ';
const apiKey = process.env.GOOGLE_DRIVE_API_KEY;

async function test() {
    const url = new URL('https://www.googleapis.com/drive/v3/files');
    url.searchParams.set('q', `'${DRIVE_FOLDER_ID}' in parents and mimeType contains 'image/' and trashed = false`);
    url.searchParams.set('fields', 'files(id,name,thumbnailLink,webContentLink)');
    url.searchParams.set('pageSize', '2');
    url.searchParams.set('key', apiKey);

    const res = await fetch(url.toString());
    const data = await res.json();
    console.log("Drive API Response:", JSON.stringify(data, null, 2));
}
test();
