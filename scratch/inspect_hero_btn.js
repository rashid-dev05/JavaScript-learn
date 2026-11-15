const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');
const lines = html.split('\n');

console.log('--- Hero buttons in index.html (lines 170-240) ---');
console.log(lines.slice(170, 240).join('\n'));
