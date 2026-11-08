const fs = require('fs');

console.log('--- AUDITING SCRIPT TAGS & ORDER IN index.html ---');
const html = fs.readFileSync('index.html', 'utf-8');
const scriptMatches = [...html.matchAll(/<script[^>]*src=["']([^"']+)["'][^>]*>/g)];
const scripts = scriptMatches.map(m => m[1]);
console.log('Detected scripts in order:');
scripts.forEach((s, i) => {
  const exists = fs.existsSync(s) || s.startsWith('http');
  console.log(`  ${i+1}. ${s} ${exists ? '[OK]' : '[MISSING FILE!]'}`);
});

console.log('\n--- AUDITING ID MATCHES BETWEEN HTML AND JS ---');
const htmlIds = new Set([...html.matchAll(/id=["']([a-zA-Z0-9_\-]+)["']/g)].map(m => m[1]));

const jsFiles = ['app.js', 'exam.js', 'roadmap.js'];
jsFiles.forEach(jsFile => {
  if (!fs.existsSync(jsFile)) return;
  const content = fs.readFileSync(jsFile, 'utf-8');
  const getElMatches = [...content.matchAll(/document\.getElementById\(['"]([a-zA-Z0-9_\-]+)['"]\)/g)].map(m => m[1]);
  const querySelMatches = [...content.matchAll(/querySelector\(['"]#([a-zA-Z0-9_\-]+)['"]\)/g)].map(m => m[1]);
  const referencedIds = new Set([...getElMatches, ...querySelMatches]);
  
  const missing = [];
  referencedIds.forEach(id => {
    if (!htmlIds.has(id)) {
      missing.push(id);
    }
  });
  console.log(`${jsFile}: referenced ${referencedIds.size} IDs, missing in HTML: ${missing.length}`);
  if (missing.length > 0) {
    console.log(`  Missing IDs in ${jsFile}:`, missing);
  }
});

console.log('\n--- AUDITING GLOBAL DATA VARIABLES ---');
const dataVars = [
  'SECTIONS_DATA',
  'TASKS_PANEL_DATA',
  'ERRORS_PANEL_DATA',
  'ECOSYSTEM_LESSONS_DATA',
  'EXAM_QUESTIONS_DATA',
  'HOURGLASS_CHALLENGES_DATA',
  'ROADMAP_DATA'
];
dataVars.forEach(v => {
  // Check if defined in any file
  let definedIn = null;
  fs.readdirSync('.').filter(f => f.endsWith('.js')).forEach(f => {
    const code = fs.readFileSync(f, 'utf-8');
    if (new RegExp(`(?:var|let|const|window\\.)\\s*${v}\\b`).test(code)) {
      definedIn = f;
    }
  });
  console.log(`  ${v}: ${definedIn ? `Defined in ${definedIn}` : 'NOT EXPLICITLY DEFINED!'}`);
});
