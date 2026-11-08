const fs = require('fs');
const vm = require('vm');
const code = fs.readFileSync('data_sections_10_13.js', 'utf8');
const ctx = {};
vm.runInNewContext(code, ctx);
const s10_13 = ctx.SECTIONS_10_13;

fs.writeFileSync('./scratch/s10_13_dump.json', JSON.stringify(s10_13, null, 2), 'utf8');
console.log('Saved s10_13_dump.json with', s10_13.length, 'sections');
