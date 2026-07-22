require('@next/env').loadEnvConfig(process.cwd());
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

async function test() {
    const photoUrl = 'https://lh3.googleusercontent.com/drive-storage/AJQWtBPfstiR512OohYP2V7dIR6zfc56WDoGKbRDdGqAo4CgOt0ecpPyOkGXeATX_m3TqknLhZe_FDgL8cLBHW5oVDeWXuWgjFlS6lsNlXMN=s1200';
    const photoRes = await fetch(photoUrl);
    console.log("Status:", photoRes.status);
    console.log("Headers:", Object.fromEntries(photoRes.headers.entries()));
}
test();
