const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf-8');
const htmlLines = html.split(/\r?\n/);
console.log('=== HTML MODALS & OVERLAYS ===');
htmlLines.forEach((l, idx) => {
  const lower = l.toLowerCase();
  if (lower.includes('dialog') || lower.includes('modal') || lower.includes('toast') || lower.includes('overlay') || lower.includes('tooltip') || lower.includes('popover') || lower.includes('dropdown')) {
    console.log(`${idx+1}: ${l.trim().substring(0, 100)}`);
  }
});

const css = fs.readFileSync('style.css', 'utf-8');
const cssLines = css.split(/\r?\n/);
console.log('\n=== CSS MODALS & OVERLAYS ===');
cssLines.forEach((l, idx) => {
  const lower = l.toLowerCase();
  if (lower.startsWith('dialog') || lower.includes('.modal') || lower.includes('toast') || lower.includes('tooltip') || lower.includes('overlay') || lower.includes('.bottom-sheet')) {
    console.log(`${idx+1}: ${l.trim().substring(0, 80)}`);
  }
});
