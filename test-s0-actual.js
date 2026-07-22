require('@next/env').loadEnvConfig(process.cwd());
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

async function test() {
    const photoUrl = 'https://lh3.googleusercontent.com/drive-storage/AJQWtBNHxzhdfiTC8PESD361bKhSj46pYLLWREYA37i69kURFaFnHhLRjB2PasZX0X2eljgDHMXyS6EwCE-22HIAE7uaJZ8IRf0rMBAfBVnS=s0';
    const resImg = await fetch(photoUrl);
    const buf = Buffer.from(await resImg.arrayBuffer());
    
    // find jpeg dims
    let offset = 2;
    while (offset < buf.length) {
        if (buf[offset] !== 0xFF) break;
        let marker = buf[offset + 1];
        if (marker === 0xC0 || marker === 0xC2) {
            console.log("=s0 Dimensions:", { width: buf.readUInt16BE(offset + 5), height: buf.readUInt16BE(offset + 7) });
            break;
        }
        offset += buf.readUInt16BE(offset + 2) + 2;
    }
}
test();
