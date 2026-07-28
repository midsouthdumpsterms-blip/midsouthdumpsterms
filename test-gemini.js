const GEMINI_API_KEY = process.argv[2];

async function testGemini() {
    console.log("Testing key: " + GEMINI_API_KEY.substring(0, 5) + "...");
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            contents: [{ parts: [{ text: 'Hello, what model are you?' }] }],
            generationConfig: { maxOutputTokens: 10 }
        })
    });
    console.log("Status: " + res.status);
    if (!res.ok) {
        console.log(await res.text());
    } else {
        const data = await res.json();
        console.log("Response: " + JSON.stringify(data));
    }
}
testGemini();
