const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

// 1. Search for Question Bank Modal in index.html
const lines = html.split('\n');
console.log('--- Question Bank Modal matches in index.html ---');
lines.forEach((l, i) => {
  if (l.includes('modal') && (l.includes('qb') || l.includes('bank') || l.includes('exam'))) {
    console.log(i + 1, l.trim());
  }
});

console.log('--- Nav buttons in index.html ---');
lines.forEach((l, i) => {
  if (l.includes('data-view') && l.includes('nav-btn')) {
    console.log(i + 1, l.trim());
  }
});

console.log('--- Exam view in index.html ---');
lines.forEach((l, i) => {
  if (l.includes('id="exam-') || l.includes('class="exam-')) {
    console.log(i + 1, l.trim());
  }
});

console.log('--- Hourglass view in index.html ---');
lines.forEach((l, i) => {
  if (l.includes('id="hg-') || l.includes('class="hg-')) {
    console.log(i + 1, l.trim());
  }
});

console.log('--- Streak in index.html ---');
lines.forEach((l, i) => {
  if (l.includes('streak') || l.includes('alov')) {
    console.log(i + 1, l.trim());
  }
});
