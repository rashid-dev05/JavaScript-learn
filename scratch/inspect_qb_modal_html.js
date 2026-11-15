const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');
const lines = html.split('\n');

console.log('--- Question Bank Modal HTML snippet (lines 1350-1375) ---');
console.log(lines.slice(1350, 1375).join('\n'));
