require('@next/env').loadEnvConfig(process.cwd());
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

async function test() {
    const url = new URL('https://www.googleapis.com/drive/v3/files');
    url.searchParams.set('q', `'1Qv-lH_BOWoI7l_j2wZ9GfwGWKBupeDNJ' in parents and mimeType contains 'image/' and trashed = false`);
    url.searchParams.set('fields', 'files(id,name,thumbnailLink,mimeType)');
    url.searchParams.set('pageSize', '50');
    url.searchParams.set('orderBy', 'name');
    url.searchParams.set('key', process.env.GOOGLE_DRIVE_API_KEY);

    const res = await fetch(url.toString());
    const data = await res.json();
    
    // Find an HEIC file
    const heicFile = data.files.find(f => f.name.endsWith('.HEIC'));
    if (!heicFile) return console.log("No HEIC found");
    
    console.log("HEIC File:", heicFile.name);
    const photoUrl = heicFile.thumbnailLink.replace('=s220', '=w860');
    const photoRes = await fetch(photoUrl);
    console.log("Status:", photoRes.status);
    console.log("Headers:", Object.fromEntries(photoRes.headers.entries()));
}
test();
