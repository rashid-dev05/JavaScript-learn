const fs = require('fs');

const pData = fs.readFileSync('panel_data.js', 'utf8');
const bData = fs.readFileSync('data_bug_panel.js', 'utf8');

const pVars = pData.match(/(var|let|const|window\.)\s*([a-zA-Z0-9_$]+)\s*=/g) || [];
const bVars = bData.match(/(var|let|const|window\.)\s*([a-zA-Z0-9_$]+)\s*=/g) || [];

console.log('Variables in panel_data.js:', pVars.slice(0, 10));
console.log('Variables in data_bug_panel.js:', bVars.slice(0, 10));
