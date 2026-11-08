const fs = require('fs');

const appJs = fs.readFileSync('app.js', 'utf-8');
const indexHtml = fs.readFileSync('index.html', 'utf-8');

const hgIds = [
  'hg-challenge-title',
  'hg-challenge-scenario',
  'hg-challenge-instruction',
  'hg-challenge-expected',
  'hg-output-text',
  'hg-output-status',
  'hg-hints-badge',
  'hg-hints-list'
];

hgIds.forEach(id => {
  const inApp = appJs.includes(id);
  const inHtml = indexHtml.includes(id);
  console.log(`${id}: in app.js? ${inApp}, in index.html? ${inHtml}`);
});
