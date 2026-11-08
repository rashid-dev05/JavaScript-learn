const fs = require('fs');
const app = fs.readFileSync('app.js', 'utf8');

const matches = app.match(/id=["']([^"']*(?:result|output|resultEl|card)[^"']*)["']/g) || [];
console.log('App.js result container IDs:');
console.log([...new Set(matches)]);
