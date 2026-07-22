process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
async function test() {
    try {
        const res = await fetch('https://midsouthdumpsterms.com/api/admin/check-images');
        console.log(await res.text());
    } catch (e) {
        console.error(e);
    }
}
test();
