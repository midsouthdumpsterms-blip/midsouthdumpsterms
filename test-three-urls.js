process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
async function test() {
    const urls = [
        "https://lh3.googleusercontent.com/drive-storage/AJQWtBNJ1a40sTvJgoyL7wcGtbnK6LN5lO5yH4qz5KF2WO-x3M4PkD2MbL2moM9tJGq3n54EoUv5SW1eNX0HCDOhK4l7ZXYkvM-DJstxn-Qz=w860",
        "https://lh3.googleusercontent.com/drive-storage/AJQWtBPVDiegLLzVQgaq1JekkSERa7nMxz6zY6GqUgiHK-wnQwgcv6Z9JQli7sQgZxUgq7gESGu8e1G2Es_yN6IifEnoDx9GrXHi0bvIMm4I=w860",
        "https://lh3.googleusercontent.com/drive-storage/AJQWtBOR-6tnjFhs_9RqP7s3DqFngoh-xHbVGICWiwCreyoje5jzn9TgdCEPXanp6ntmlIogVTV7Auo05z0bDpxwMXk2-q-A-qa1x7GrmIhB=w860"
    ];
    for (const [i, url] of urls.entries()) {
        const res = await fetch(url);
        console.log(`URL ${i + 1} Status:`, res.status, res.headers.get('content-type'));
    }
}
test();
