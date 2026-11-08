const fs = require('fs');

const css = fs.readFileSync('style.css', 'utf-8');
const lines = css.split('\n');

console.log('Line 9060 to 9070:');
for (let i = 9059; i < 9070; i++) {
  console.log(`${i+1}: ${lines[i]}`);
}

console.log('Line 9535 to 9550:');
for (let i = 9534; i < 9550; i++) {
  console.log(`${i+1}: ${lines[i]}`);
}
