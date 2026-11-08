const fs = require('fs');

const app = fs.readFileSync('app.js', 'utf8');

// Extract from function preprocessModuleCode to end of runJavaScriptDirect
const start = app.indexOf('function preprocessModuleCode');
const end = app.indexOf('function runJavaScript(');
const mockCode = app.slice(start, end);

const vm = require('vm');
const context = {
    console, Date, Math, String, Number, Boolean, Array, Object, RegExp, Promise, Set, Map, WeakSet, WeakMap, state: {}, localStorage: { getItem: () => null, setItem: () => {}, removeItem: () => {} }
};
vm.createContext(context);
vm.runInContext(mockCode, context);

const buggyCode = `const server = http.createServer((req, res) => {
  res.statusCode = 200;
  // XƏTA: res.end() unudulduğu üçün brauzer əbədi gözləmə vəziyyətində qalır
});
const sim = server.simulateRequest("/");
console.log("Sorğu statusu:", sim.ended ? "Tamamlandı" : "Asılı qaldı");`;

async function test() {
    console.log('Testing buggyCode in runJavaScriptDirect...');
    const res = await context.runJavaScriptDirect(buggyCode);
    console.log('Result of buggyCode:', res);

    const correctCode = `const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end("Uğurlu cavab");
});
const sim = server.simulateRequest("/");
console.log("Sorğu statusu:", sim.ended ? "Tamamlandı" : "Asılı qaldı");`;

    console.log('Testing correctCode in runJavaScriptDirect...');
    const res2 = await context.runJavaScriptDirect(correctCode);
    console.log('Result of correctCode:', res2);
}

test();
