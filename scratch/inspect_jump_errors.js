const fs = require('fs');

const app = fs.readFileSync('app.js', 'utf8');
const lines = app.split('\n');

lines.forEach((l, i) => {
  if (l.includes('progress-jump-to-errors-btn')) {
    console.log(lines.slice(Math.max(0, i - 5), i + 15).join('\n'));
  }
});
