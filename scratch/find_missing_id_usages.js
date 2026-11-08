const fs = require('fs');

const missingIds = [
  'nav-btn-errors',
  'exam-active-session',
  'menu-toggle',
  'exam-bubbles-nav',
  'exam-q-section',
  'exam-q-difficulty',
  'exam-q-title',
  'exam-q-instruction',
  'surrender-solution-box',
  'surrender-solution-code',
  'surrender-solution-explanation',
  'exam-question-indicator',
  'hg-time-minus',
  'hg-time-plus',
  'hg-reveal-hint-btn',
  'hero-streak-count',
  'progress-jump-to-errors-btn',
  'mobile-logo',
  'welcome-start-btn',
  'hg-output-text',
  'hg-output-status',
  'hg-hints-badge',
  'hg-hints-list',
  'hg-challenge-stages',
  'hg-challenge-diff',
  'hg-challenge-xp',
  'hg-challenge-title',
  'hg-challenge-scenario',
  'hg-challenge-instruction',
  'hg-challenge-expected',
  'hg-custom-mins-display',
  'qb-reset-filters-btn'
];

const files = ['app.js', 'exam.js', 'roadmap.js'];
missingIds.forEach(id => {
  files.forEach(f => {
    if (!fs.existsSync(f)) return;
    const content = fs.readFileSync(f, 'utf-8');
    const lines = content.split('\n');
    lines.forEach((l, i) => {
      if (l.includes(`'${id}'`) || l.includes(`"${id}"`)) {
        console.log(`[${f}:${i+1}] ID '${id}': ${l.trim()}`);
      }
    });
  });
});
