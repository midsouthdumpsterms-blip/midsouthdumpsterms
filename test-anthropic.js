require('@next/env').loadEnvConfig(process.cwd());
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
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
            model: 'claude-3-5-sonnet-20241022',
            max_tokens: 100,
            messages: [{ role: 'user', content: "Hello" }]
        })
    });
    console.log(res.status);
    console.log(await res.text());
}
test();
