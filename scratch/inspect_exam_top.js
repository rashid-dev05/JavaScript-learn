const fs = require('fs');

const exam = fs.readFileSync('exam.js', 'utf8');
const lines = exam.split('\n');

console.log('--- Start of exam.js ---');
console.log(lines.slice(0, 40).join('\n'));

console.log('--- End of exam.js ---');
console.log(lines.slice(-40).join('\n'));
