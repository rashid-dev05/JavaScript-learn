const fs = require('fs');

const exam = fs.readFileSync('exam.js', 'utf8');
const lines = exam.split('\n');

lines.forEach((l, i) => {
  if (l.includes('qb-reset-filters-btn') || l.includes('exam-bank-modal') || l.includes('question-bank-modal')) {
    console.log(`${i + 1}: ${l.trim()}`);
  }
});
