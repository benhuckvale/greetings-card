const fs = require('fs');
const path = require('path');

const filePath = process.argv[2];
const baseUrl = 'http://localhost:3000'; // Change to your app's base URL

if (!filePath) {
  console.error('Please provide the path to the greeting file.');
  process.exit(1);
}

const fullPath = path.resolve(filePath);

fs.readFile(fullPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    process.exit(1);
  }

  const base64Greeting = Buffer.from(data).toString('base64');
  const url = `${baseUrl}?greeting=${encodeURIComponent(base64Greeting)}`;

  console.log('Encoded URL:', url);
});

