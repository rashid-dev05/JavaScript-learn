const fs = require('fs');
const js = fs.readFileSync('app.js', 'utf-8');
const lines = js.split('\n');
let start = -1;
lines.forEach((l, i) => {
  if (l.includes('function loadHourglassChallenge') || l.includes('loadHourglassChallenge =')) {
    start = i;
  }
});
if (start !== -1) {
  for (let i = start; i < start + 60; i++) {
    console.log(`L${i+1}: ${lines[i]}`);
  }
}
