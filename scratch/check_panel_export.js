const fs = require('fs');

const pData = fs.readFileSync('panel_data.js', 'utf8');
const bData = fs.readFileSync('data_bug_panel.js', 'utf8');

console.log('panel_data.js starts with:');
console.log(pData.slice(0, 200));

console.log('\ndata_bug_panel.js starts with:');
console.log(bData.slice(0, 200));
