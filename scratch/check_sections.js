const fs = require('fs');

console.log('--- SECTIONS DEFINITION ---');
['data_sections_1_5.js', 'app.js'].forEach(f => {
  const code = fs.readFileSync(f, 'utf-8');
  const lines = code.split('\n');
  for (let i = 0; i < 20; i++) {
    console.log(`${f} L${i+1}: ${lines[i]}`);
  }
});
