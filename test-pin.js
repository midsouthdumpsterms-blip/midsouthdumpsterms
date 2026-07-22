const http = require('http');

const data = JSON.stringify({
  pin: '1056'
});

const options = {
  hostname: 'midsouthdumpsterms.com',
  port: 443,
  path: '/api/admin/get-posts',
  method: 'POST',
  rejectUnauthorized: false,
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

const https = require('https');
const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`);
  let body = '';
  res.on('data', d => {
    body += d;
  });
  res.on('end', () => {
    console.log(body);
  });
});

req.on('error', error => {
  console.error(error);
});

req.write(data);
req.end();
