const fs = require('fs');
const css = fs.readFileSync('./style.css', 'utf8');

let braces = 0;
let inString = false;
let strChar = '';
let inComment = false;

for (let i = 0; i < css.length; i++) {
    const ch = css[i];
    const next = css[i + 1];

    if (!inString && !inComment && ch === '/' && next === '*') {
        inComment = true;
        i++;
        continue;
    }
    if (inComment && ch === '*' && next === '/') {
        inComment = false;
        i++;
        continue;
    }
    if (inComment) continue;

    if (!inString && (ch === '"' || ch === "'")) {
        inString = true;
        strChar = ch;
        continue;
    }
    if (inString && ch === strChar && css[i-1] !== '\\') {
        inString = false;
        continue;
    }
    if (inString) continue;

    if (ch === '{') braces++;
    if (ch === '}') braces--;
    if (braces < 0) {
        console.error('Mismatched closing brace at char', i);
        process.exit(1);
    }
}

if (braces !== 0) {
    console.error('Unclosed brace! Remaining open braces:', braces);
    process.exit(1);
} else {
    console.log('CSS brace matching: PERFECT 100% BALANCED!');
}
