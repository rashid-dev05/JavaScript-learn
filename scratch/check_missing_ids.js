const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');
const app = fs.readFileSync('app.js', 'utf8');
const exam = fs.readFileSync('exam.js', 'utf8');

const auditItems = [
  'exam-bank-modal',
  'nav-btn-errors',
  'exam-active-session',
  'exam-bubbles-nav',
  'exam-q-section',
  'exam-q-difficulty',
  'exam-q-title',
  'exam-q-instruction',
  'surrender-solution-box',
  'hg-time-minus',
  'hg-time-plus',
  'hg-reveal-hint-btn',
  'hero-streak-count',
  'qb-reset-filters-btn',
  'welcome-start-btn',
  'progress-jump-to-errors-btn',
  'sidebar-toggle',
  'mobile-logo'
];

auditItems.forEach(id => {
  const inHtml = html.includes('id="' + id + '"') || html.includes("id='" + id + "'");
  console.log('ID: ' + id + ' | in index.html: ' + inHtml);
});
