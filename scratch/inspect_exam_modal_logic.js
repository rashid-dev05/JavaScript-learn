const fs = require('fs');

const exam = fs.readFileSync('exam.js', 'utf8');
const lines = exam.split('\n');

console.log('--- Lines 240-340 in exam.js ---');
console.log(lines.slice(240, 340).join('\n'));
