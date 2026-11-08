const fs = require('fs');
const css = fs.readFileSync('style.css', 'utf-8');
const lines = css.split('\n');
console.log('Total lines:', lines.length);
console.log('Line 9062:', lines[9061]);
console.log('Line 9545:', lines[9544]);
console.log('Line 9548:', lines[9547]);
