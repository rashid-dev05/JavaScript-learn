const fs = require('fs');

const text = fs.readFileSync('./scratch/build_section_8.js', 'utf8');
const lines = text.split('\n');
lines.forEach((line, i) => {
  if (line.includes('${') && !line.includes('\\${')) {
    console.log((i + 1) + ': ' + line);
  }
});
