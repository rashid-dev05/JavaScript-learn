const fs = require('fs');

const app = fs.readFileSync('app.js', 'utf8');
const lines = app.split('\n');

const searchTerms = [
  'exam-bank-modal',
  'nav-btn-errors',
  'hero-streak-count',
  'exam-active-session',
  'exam-bubbles-nav',
  'exam-q-section',
  'hg-time-minus',
  'welcome-start-btn'
];

searchTerms.forEach(term => {
  console.log(`\n=== Matches for "${term}" in app.js ===`);
  lines.forEach((l, i) => {
    if (l.includes(term)) {
      console.log(`${i + 1}: ${l.trim()}`);
    }
  });
});
