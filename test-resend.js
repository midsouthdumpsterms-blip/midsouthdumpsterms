const https = require('https');

const data = JSON.stringify({
  from: 'Mid South Blog Bot <onboarding@resend.dev>',
  to: 'atyre@midsouthdumpsterms.com',
  subject: 'Test email from Resend',
  html: '<strong>It works!</strong>'
});

const options = {
  hostname: 'api.resend.com',
  port: 443,
  path: '/emails',
  method: 'POST',
  headers: {
    'Authorization': 'Bearer re_7vWfv9W8_JTzw1fCeaMpgutX76B96UBXr',
    'Content-Type': 'application/json',
    'Content-Length': data.length
  },
  rejectUnauthorized: false
};

const req = https.request(options, (res) => {
  let body = '';
  res.on('data', (d) => { body += d; });
  res.on('end', () => { 
      console.log(`STATUS: ${res.statusCode}`);
      console.log('BODY:', body); 
  });
});

req.on('error', (error) => {
  console.error(error);
});

req.write(data);
req.end();
