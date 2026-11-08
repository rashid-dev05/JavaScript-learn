const fs = require('fs');
const app = fs.readFileSync('app.js', 'utf8');

const idx = app.indexOf('preprocessModuleCode');
console.log(app.slice(idx - 100, idx + 600));
