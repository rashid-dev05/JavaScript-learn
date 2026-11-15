const fs = require('fs');

const sim = fs.readFileSync('simulator.js', 'utf8');
const lines = sim.split('\n');

console.log(lines.slice(115, 145).join('\n'));
