const fs = require('fs');

['app.js', 'exam.js'].forEach(f => {
  const code = fs.readFileSync(f, 'utf-8');
  const lines = code.split('\n');
  lines.forEach((l, i) => {
    if (l.includes('function ') && l.toLowerCase().includes('hourglass')) {
      console.log(`[${f}:${i+1}] ${l.trim()}`);
    }
  });
});
