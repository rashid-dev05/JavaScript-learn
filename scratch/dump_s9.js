const fs = require('fs');
const vm = require('vm');
const code = fs.readFileSync('./data_sections_6_9.js', 'utf8');
const sandbox = {};
vm.runInNewContext(code, sandbox);
const s9 = sandbox.SECTIONS_6_9.find(s => s.id === 'section-9');
fs.writeFileSync('./scratch/s9_dump.json', JSON.stringify(s9, null, 2), 'utf8');
console.log('s9_dump.json written successfully');
