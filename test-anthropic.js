require('@next/env').loadEnvConfig(process.cwd());
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

async function test() {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': ANTHROPIC_API_KEY || '',
            'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({
            model: 'claude-sonnet-5',
            max_tokens: 100,
            messages: [{ role: 'user', content: "Hello" }]
        })
    });
    console.log(res.status);
    console.log(await res.text());
}
test();
