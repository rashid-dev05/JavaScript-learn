const fs = require('fs');
const content = fs.readFileSync('panel_data.js', 'utf8');
console.log('panel_data.js length:', content.length);
const lines = content.split('\n');
lines.slice(0, 30).forEach((l, i) => console.log((i + 1) + ': ' + l));
