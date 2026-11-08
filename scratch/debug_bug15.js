const fs = require('fs');
const app = fs.readFileSync('app.js', 'utf8');
const startIdx = app.indexOf('function preprocessModuleCode');
const endIdx = app.indexOf('function runJavaScript(');
const mockBlock = app.slice(startIdx, endIdx);
const runner = new Function(mockBlock + '\nreturn { runJavaScriptDirect, preprocessModuleCode };')();

async function run() {
  const code = `const form = document.querySelector("#abune-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Defolt dayandırıldı:", e.defaultPrevented);
});

form.dispatchEvent(new Event("submit"));`;

  const res = await runner.runJavaScriptDirect(runner.preprocessModuleCode(code));
  console.log('Result output:', JSON.stringify(res.output));
  console.log('Error:', res.error);
}
run();
