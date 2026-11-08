const fs = require('fs');
const appCode = fs.readFileSync('app.js', 'utf-8');
const lines = appCode.split('\n');

lines.forEach((l, i) => {
  if (l.includes('localStorage.setItem(')) {
    const surrounding = lines.slice(Math.max(0, i - 5), Math.min(lines.length, i + 6)).join('\n');
    const hasTry = surrounding.includes('try') || surrounding.includes('catch');
    console.log(`[app.js:${i+1}] localStorage.setItem: has try/catch? ${hasTry}`);
    if (!hasTry) {
      console.log(`   Line: ${l.trim()}`);
    }
  }
});
