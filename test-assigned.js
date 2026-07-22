require('@next/env').loadEnvConfig(process.cwd());
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

function pickPhotoForSlug(photos, slug) {
  if (photos.length === 0) return null
  const hash = slug
    .split('')
    .reduce((acc, char, i) => acc + char.charCodeAt(0) * (i + 1), 0)
  return photos[hash % photos.length]
}

async function test() {
    const url = new URL('https://www.googleapis.com/drive/v3/files');
    url.searchParams.set('q', `'1Qv-lH_BOWoI7l_j2wZ9GfwGWKBupeDNJ' in parents and mimeType contains 'image/' and trashed = false`);
    url.searchParams.set('fields', 'files(id,name,thumbnailLink)');
    url.searchParams.set('pageSize', '500');
    url.searchParams.set('orderBy', 'name');
    url.searchParams.set('key', process.env.GOOGLE_DRIVE_API_KEY);

    const res = await fetch(url.toString());
    const data = await res.json();
    const photos = data.files.map(f => f.thumbnailLink ? f.thumbnailLink.replace('=s220', '=w860') : '').filter(u => u !== '');
    
    const slug = 'how-to-choose-the-right-dumpster-size-for-a-home-remodel-in-jackson-ms';
    const picked = pickPhotoForSlug(photos, slug);
    console.log("Picked URL for slug:", picked);
    
    // Check dimensions of the picked image
    const resImg = await fetch(picked);
    const buf = Buffer.from(await resImg.arrayBuffer());
    
    // find jpeg dims
    let offset = 2;
    while (offset < buf.length) {
        if (buf[offset] !== 0xFF) break;
        let marker = buf[offset + 1];
        if (marker === 0xC0 || marker === 0xC2) {
            console.log("Dimensions:", { width: buf.readUInt16BE(offset + 5), height: buf.readUInt16BE(offset + 7) });
            break;
        }
        offset += buf.readUInt16BE(offset + 2) + 2;
    }
}
test();
