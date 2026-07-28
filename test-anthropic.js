const key = process.env.ANTHROPIC_API_KEY;

async function test() {
  const models = ['claude-3-5-sonnet-20240620', 'claude-3-sonnet-20240229', 'claude-3-haiku-20240307'];
  for (const m of models) {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': key || '',
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: m,
        max_tokens: 10,
        messages: [{ role: 'user', content: 'test' }]
      })
    });
    console.log(`Model ${m}: ${res.status}`);
    if (!res.ok) console.log(await res.text());
  }
}
test();
