require('@next/env').loadEnvConfig(process.cwd());
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

async function test() {
    const url = new URL('https://www.googleapis.com/drive/v3/files');
    url.searchParams.set('q', `'1Qv-lH_BOWoI7l_j2wZ9GfwGWKBupeDNJ' in parents and mimeType contains 'image/' and trashed = false`);
    url.searchParams.set('fields', 'files(id,name,thumbnailLink,mimeType,shared,webContentLink)');
    url.searchParams.set('pageSize', '500');
    url.searchParams.set('orderBy', 'name');
    url.searchParams.set('key', process.env.GOOGLE_DRIVE_API_KEY);

    const res = await fetch(url.toString());
    const data = await res.json();
    
    const targets = [
        "AJQWtBNJ1a40sTvJgoyL7wcGtbnK6LN5lO5yH4qz5KF2WO-x3M4PkD2MbL2moM9tJGq3n54EoUv5SW1eNX0HCDOhK4l7ZXYkvM-DJstxn-Qz",
        "AJQWtBPVDiegLLzVQgaq1JekkSERa7nMxz6zY6GqUgiHK-wnQwgcv6Z9JQli7sQgZxUgq7gESGu8e1G2Es_yN6IifEnoDx9GrXHi0bvIMm4I",
        "AJQWtBOR-6tnjFhs_9RqP7s3DqFngoh-xHbVGICWiwCreyoje5jzn9TgdCEPXanp6ntmlIogVTV7Auo05z0bDpxwMXk2-q-A-qa1x7GrmIhB"
    ];
    
    for (const f of data.files) {
        if (!f.thumbnailLink) continue;
        for (const [i, t] of targets.entries()) {
            if (f.thumbnailLink.includes(t)) {
                console.log(`URL ${i+1}: ${f.name} (mime: ${f.mimeType}, shared: ${f.shared})`);
            }
        }
    }
}
test();
