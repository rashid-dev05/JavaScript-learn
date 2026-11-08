const fs = require('fs');

const appJs = fs.readFileSync('app.js', 'utf-8');
const lines = appJs.split('\n');

function findFunctionLines(fnName) {
  lines.forEach((l, i) => {
    if (l.includes(`function ${fnName}`) || l.includes(`${fnName} =`)) {
      console.log(`--- ${fnName} at L${i+1} ---`);
      for (let j = i; j < Math.min(lines.length, i + 35); j++) {
        console.log(`L${j+1}: ${lines[j]}`);
      }
    }
  });
}

findFunctionLines('saveProgress');
findFunctionLines('loadProgress');
findFunctionLines('saveExamHistory');
