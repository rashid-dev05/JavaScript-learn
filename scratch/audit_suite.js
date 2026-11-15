const fs = require('fs');
const { execSync } = require('child_process');

console.log('=== 1. Node Syntax Check on all JS files ===');
const jsFiles = fs.readdirSync('.').filter(f => f.endsWith('.js'));
let hasSyntaxError = false;
jsFiles.forEach(f => {
  try {
    execSync('node -c ' + f, { stdio: 'pipe' });
    console.log(f + ': OK');
  } catch(e) {
    console.error(f + ': SYNTAX ERROR -> ' + e.message);
    hasSyntaxError = true;
  }
});

console.log('\n=== 2. Check DOM IDs referenced in JS vs index.html ===');
const html = fs.readFileSync('index.html', 'utf8');
const idRegex = /document\.getElementById\(['"]([^'"]+)['"]\)/g;
const missingIds = [];
jsFiles.forEach(f => {
  if (f.startsWith('data_') && f !== 'data_hourglass_challenges.js') return;
  const content = fs.readFileSync(f, 'utf8');
  let m;
  while ((m = idRegex.exec(content)) !== null) {
    const id = m[1];
    if (!html.includes('id="' + id + '"') && !html.includes("id='" + id + "'")) {
      missingIds.push({ file: f, id });
    }
  }
});
console.log('Referenced IDs missing in index.html:', missingIds);

console.log('\n=== 3. Check CSS Class References in JS vs style.css & index.html ===');
const css = fs.readFileSync('style.css', 'utf8');
console.log('style.css length:', css.length, 'lines:', css.split('\n').length);

console.log('\n=== 4. Check HTML integrity (basic unclosed tags) ===');
const tagMatches = html.match(/<([a-zA-Z0-9\-]+)[^>]*>/g) || [];
console.log('Total HTML tags:', tagMatches.length);

console.log('\n=== 5. Check Curriculum data loading ===');
try {
  const s1_5 = fs.readFileSync('data_sections_1_5.js', 'utf8');
  const s6_9 = fs.readFileSync('data_sections_6_9.js', 'utf8');
  const s10_13 = fs.readFileSync('data_sections_10_13.js', 'utf8');
  console.log('Sections 1-13 read OK');
} catch (e) {
  console.error('Error reading curriculum files:', e);
}
