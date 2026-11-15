const fs = require('fs');

const bData = fs.readFileSync('data_bug_panel.js', 'utf8');
const pData = fs.readFileSync('panel_data.js', 'utf8');

console.log('--- End of data_bug_panel.js (last 50 lines) ---');
console.log(bData.split('\n').slice(-50).join('\n'));

console.log('--- End of panel_data.js (last 30 lines) ---');
console.log(pData.split('\n').slice(-30).join('\n'));
