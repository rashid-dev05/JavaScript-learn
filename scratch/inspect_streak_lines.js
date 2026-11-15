const fs = require('fs');

const app = fs.readFileSync('app.js', 'utf8');
const lines = app.split('\n');

console.log('--- Lines 8480-8505 in app.js ---');
console.log(lines.slice(8480, 8505).join('\n'));

console.log('--- Lines 8850-8875 in app.js ---');
console.log(lines.slice(8850, 8875).join('\n'));
