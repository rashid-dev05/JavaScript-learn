const fs = require('fs');
const app = fs.readFileSync('app.js', 'utf8');
const startIdx = app.indexOf('function preprocessModuleCode');
const endIdx = app.indexOf('function runJavaScript(');
const mockBlock = app.slice(startIdx, endIdx);
const runner = new Function(mockBlock + '\nreturn { runJavaScriptDirect, preprocessModuleCode };')();

async function run() {
  const code = `console.log("Event is:", Event.name);
const ev = new Event("submit");
console.log("cancelable:", ev.cancelable);
ev.preventDefault();
console.log("defaultPrevented:", ev.defaultPrevented);`;

  const res = await runner.runJavaScriptDirect(code);
  console.log(res.output);
}
run();
