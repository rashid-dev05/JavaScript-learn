const fs = require('fs');
const css = fs.readFileSync('style.css', 'utf-8');

let depth = 0;
let errors = 0;
let inComment = false;
let inString = false;
let stringChar = '';

for (let i = 0; i < css.length; i++) {
  const c = css[i];
  const next = css[i + 1];

  if (!inString && !inComment && c === '/' && next === '*') {
    inComment = true;
    i++;
    continue;
  }
  if (inComment && c === '*' && next === '/') {
    inComment = false;
    i++;
    continue;
  }
  if (inComment) continue;

  if (!inString && (c === '"' || c === "'")) {
    inString = true;
    stringChar = c;
    continue;
  }
  if (inString && c === stringChar && css[i - 1] !== '\\') {
    inString = false;
    continue;
  }
  if (inString) continue;

  if (c === '{') depth++;
  if (c === '}') {
    depth--;
    if (depth < 0) {
      console.error(`Unmatched closing brace at character ${i}`);
      errors++;
      depth = 0;
    }
  }
}

console.log('Final brace depth (should be 0):', depth);
console.log('Total brace mismatch errors:', errors);
console.log('Total CSS length:', css.length);
