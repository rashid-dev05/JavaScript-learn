const fs = require('fs');

const se = fs.readFileSync('storage_engine.js', 'utf8');
console.log('storage_engine.js length:', se.length, 'lines:', se.split('\n').length);

// Look for error handling, try/catch, promises, and safety
const lines = se.split('\n');
lines.forEach((l, i) => {
  if (l.includes('reject(') || l.includes('catch') || l.includes('localStorage') || l.includes('indexedDB')) {
    // console.log(`${i+1}: ${l.trim()}`);
  }
});
console.log('storage_engine.js check complete.');
