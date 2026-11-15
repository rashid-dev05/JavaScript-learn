const fs = require('fs');
const vm = require('vm');

const pData = fs.readFileSync('panel_data.js', 'utf8');
const bData = fs.readFileSync('data_bug_panel.js', 'utf8');

const ctx = { window: {} };
vm.createContext(ctx);
vm.runInContext(pData, ctx);
vm.runInContext(bData, ctx);

const tasks = ctx.PANEL_TASKS_DATA || ctx.window.PANEL_TASKS_DATA || [];
const bugs = ctx.PANEL_ERRORS_DATA || ctx.window.PANEL_ERRORS_DATA || [];

console.log('Panel Tasks count:', tasks.length);
console.log('Panel Bugs count:', bugs.length);
