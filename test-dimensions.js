require('@next/env').loadEnvConfig(process.cwd());
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const fs = require('fs');

async function test() {
    const photoUrl0 = 'https://lh3.googleusercontent.com/drive-storage/AJQWtBPfstiR512OohYP2V7dIR6zfc56WDoGKbRDdGqAo4CgOt0ecpPyOkGXeATX_m3TqknLhZe_FDgL8cLBHW5oVDeWXuWgjFlS6lsNlXMN=s0';
    const photoUrl860 = 'https://lh3.googleusercontent.com/drive-storage/AJQWtBPfstiR512OohYP2V7dIR6zfc56WDoGKbRDdGqAo4CgOt0ecpPyOkGXeATX_m3TqknLhZe_FDgL8cLBHW5oVDeWXuWgjFlS6lsNlXMN=w860';
    
    // Function to get image dimensions from JPEG buffer
    function getJpegDimensions(buffer) {
        let offset = 2; // skip FFD8
        while (offset < buffer.length) {
            if (buffer[offset] !== 0xFF) return null;
            let marker = buffer[offset + 1];
            if (marker === 0xC0 || marker === 0xC2) { // SOF0 or SOF2
                let height = buffer.readUInt16BE(offset + 5);
                let width = buffer.readUInt16BE(offset + 7);
                return { width, height };
            }
            let length = buffer.readUInt16BE(offset + 2);
            offset += length + 2;
        }
        return null;
    }

    const res0 = await fetch(photoUrl0);
    const buf0 = Buffer.from(await res0.arrayBuffer());
    console.log("=s0 dimensions:", getJpegDimensions(buf0));

    const res860 = await fetch(photoUrl860);
    const buf860 = Buffer.from(await res860.arrayBuffer());
    console.log("=w860 dimensions:", getJpegDimensions(buf860));
}
test();
