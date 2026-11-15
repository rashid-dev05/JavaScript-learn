const fs = require('fs');

const app = fs.readFileSync('app.js', 'utf8');
const lines = app.split('\n');

lines.forEach((l, i) => {
  if (l.includes('TASKS_PANEL_DATA') || l.includes('SECTIONS_14_21_BUGS') || l.includes('ERRORS_PANEL_DATA') || l.includes('BUGS_PANEL_DATA')) {
    console.log(`${i+1}: ${l.trim()}`);
  }
});
