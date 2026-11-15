const fs = require('fs');

const app = fs.readFileSync('app.js', 'utf8');
const lines = app.split('\n');

lines.forEach((l, i) => {
  if (l.includes('hero-resume-btn') || l.includes('hero-playground-btn')) {
    console.log(`${i + 1}: ${l.trim()}`);
  }
});
