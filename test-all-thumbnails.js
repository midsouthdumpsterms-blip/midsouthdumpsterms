require('@next/env').loadEnvConfig(process.cwd());
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

async function test() {
    const url = new URL('https://www.googleapis.com/drive/v3/files');
    url.searchParams.set('q', `'1Qv-lH_BOWoI7l_j2wZ9GfwGWKBupeDNJ' in parents and mimeType contains 'image/' and trashed = false`);
    url.searchParams.set('fields', 'files(id,name,thumbnailLink)');
    url.searchParams.set('pageSize', '50');
    url.searchParams.set('orderBy', 'name');
    url.searchParams.set('key', process.env.GOOGLE_DRIVE_API_KEY);

    const res = await fetch(url.toString());
    const data = await res.json();
    for (const f of data.files) {
        if (!f.thumbnailLink) {
            console.log("No thumbnailLink:", f.name);
        } else {
            const endsWithS220 = f.thumbnailLink.endsWith('=s220');
            console.log(endsWithS220 ? "[s220]" : "[OTHER]", f.name, f.thumbnailLink.split('=').pop());
        }
    }
}
test();
