process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
async function test() {
    const url = "https://lh3.googleusercontent.com/drive-storage/AJQWtBNJ1a40sTvJgoyL7wcGtbnK6LN5lO5yH4qz5KF2WO-x3M4PkD2MbL2moM9tJGq3n54EoUv5SW1eNX0HCDOhK4l7ZXYkvM-DJstxn-Qz=w860";
    
    console.log("Fetching WITH referer...");
    const res = await fetch(url, {
        headers: {
            'Referer': 'https://midsouthdumpsterms.com/'
        }
    });
    console.log("Status:", res.status);
    
    if (res.status !== 200) {
        console.log("Body:", await res.text());
    }
}
test();
