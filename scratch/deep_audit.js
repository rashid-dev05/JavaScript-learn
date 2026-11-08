const fs = require('fs');

console.log('=== 1. AUDITING LOCALSTORAGE USAGES ===');
const appCode = fs.readFileSync('app.js', 'utf-8');
const examCode = fs.readFileSync('exam.js', 'utf-8');

function auditLocalStorage(code, filename) {
  const lines = code.split('\n');
  lines.forEach((l, i) => {
    if (l.includes('localStorage.getItem(')) {
      // Check surrounding lines for try/catch
      const surrounding = lines.slice(Math.max(0, i - 5), Math.min(lines.length, i + 6)).join('\n');
      const hasTry = surrounding.includes('try') || surrounding.includes('catch');
      console.log(`[${filename}:${i+1}] localStorage.getItem: has try/catch? ${hasTry}`);
      if (!hasTry) {
        console.log(`   Line: ${l.trim()}`);
      }
    }
  });
}
auditLocalStorage(appCode, 'app.js');
auditLocalStorage(examCode, 'exam.js');

console.log('\n=== 2. AUDITING ADDEVENTLISTENER NULL CHECKS ===');
function auditEventListeners(code, filename) {
  const lines = code.split('\n');
  lines.forEach((l, i) => {
    if (l.includes('.addEventListener(')) {
      // Check if directly chained like document.getElementById('...').addEventListener
      const match = l.match(/document\.(?:getElementById|querySelector)\(['"]([^'"]+)['"]\)\.addEventListener/);
      if (match) {
        console.log(`[${filename}:${i+1}] Direct addEventListener without null check: #${match[1]}`);
      }
    }
  });
}
auditEventListeners(appCode, 'app.js');
auditEventListeners(examCode, 'exam.js');

console.log('\n=== 3. AUDITING WORKER & DIRECT EXECUTION ===');
lines = appCode.split('\n');
lines.forEach((l, i) => {
  if (l.includes('new Worker(') || l.includes('Worker(')) {
    console.log(`[app.js:${i+1}] Worker usage: ${l.trim()}`);
  }
});
