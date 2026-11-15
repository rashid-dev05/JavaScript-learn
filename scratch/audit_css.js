const fs = require('fs');

const css = fs.readFileSync('style.css', 'utf8');

// Check comments
const openComments = (css.match(/\/\*/g) || []).length;
const closeComments = (css.match(/\*\//g) || []).length;
console.log(`CSS Comments: ${openComments} open, ${closeComments} close.`);
if (openComments !== closeComments) {
  console.error('UNBALANCED CSS COMMENTS!');
}

// Check braces
let depth = 0;
let errors = 0;
for (let i = 0; i < css.length; i++) {
  if (css[i] === '{') depth++;
  else if (css[i] === '}') {
    depth--;
    if (depth < 0) {
      console.error(`Negative brace depth at index ${i}`);
      errors++;
      depth = 0;
    }
  }
}
console.log(`Final brace depth: ${depth} (must be 0). Errors: ${errors}`);

// Check media queries
const mediaQueries = css.match(/@media[^{]+{/g) || [];
console.log(`Total @media blocks: ${mediaQueries.length}`);
