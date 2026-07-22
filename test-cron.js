process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
async function test() {
    try {
        const res = await fetch('https://midsouthdumpsterms.com/api/cron/generate-post');
        const text = await res.text();
        console.log("Status:", res.status);
        console.log("Body:", text);
    } catch (e) {
        console.error("Fetch failed:", e);
    }
}
test();
