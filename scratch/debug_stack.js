const fs = require('fs');
const vm = require('vm');

const appCode = fs.readFileSync('app.js', 'utf8');
const injected = appCode.replace(/\n\s*\}\)\(\);?\s*$/, '\n    window.__internal = { createWorkerScript };\n})();');
const win = { location: {}, localStorage: { getItem: ()=>null, setItem: ()=>{} }, sessionStorage: { getItem: ()=>null }, document: { getElementById: ()=>null, querySelectorAll: ()=>[], querySelector: ()=>null, createElement: ()=>({ classList:{add:()=>{},remove:()=>{}} }) }, addEventListener: ()=>{}, setTimeout, clearTimeout, setInterval, clearInterval };
win.window = win;
const ctx = vm.createContext({ ...win, global: win, globalThis: win, console, Date, Math, String, Number, Boolean, Array, Object, Map, Set, WeakMap, WeakSet, Promise, Error, TypeError, RangeError, SyntaxError, ReferenceError, RegExp, JSON, performance, SECTIONS_1_5:[], SECTIONS_6_9:[], SECTIONS_10_13:[], SECTIONS_14:[], SECTIONS_15:[], SECTIONS_16:[], SECTIONS_17:[], SECTIONS_18:[], SECTIONS_19:[], SECTIONS_20:[], SECTIONS_21:[], TASKS_PANEL_DATA:[], ERRORS_PANEL_DATA:[], ECOSYSTEM_LESSONS_DATA:[], EXAM_QUESTIONS_DATA:[] });
vm.runInContext(injected, ctx);
const workerScript = ctx.window.__internal.createWorkerScript();

// Add try catch around parts of workerScript or log inside
const debugScript = workerScript.replace('syncError = err.name + \': \' + err.message;', 'syncError = err.stack || (err.name + \': \' + err.message);');
const sandboxSelf = {
    postMessage: (d) => console.log('postMessage with stack:', d),
    addEventListener: ()=>{},
    setTimeout, clearTimeout, setInterval, clearInterval,
    Date, Math, String, Number, Boolean, Array, Object, Map, Set, WeakSet, WeakMap, Promise, Error, TypeError, RangeError, SyntaxError, ReferenceError, RegExp, JSON, performance,
    btoa: (s) => Buffer.from(s).toString('base64'), atob: (s) => Buffer.from(s, 'base64').toString()
};
sandboxSelf.self = sandboxSelf;
const wCtx = vm.createContext(sandboxSelf);
vm.runInContext(debugScript, wCtx);
sandboxSelf.onmessage({ data: { code: 'console.error("e"); console.log("ok");', timeoutMs: 1000 } });
