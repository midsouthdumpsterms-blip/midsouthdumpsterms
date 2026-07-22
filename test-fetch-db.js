process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
async function test() {
    const res = await fetch('https://midsouthdumpsterms.vercel.app/api/test-db');
    const data = await res.json();
    console.log(JSON.stringify(data, null, 2));
}
test();
