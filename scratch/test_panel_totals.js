const fs = require('fs');
const vm = require('vm');

const pData = fs.readFileSync('panel_data.js', 'utf8');
const bData = fs.readFileSync('data_bug_panel.js', 'utf8');

const ctx = { window: {}, console: console };
vm.createContext(ctx);
vm.runInContext(pData, ctx);
vm.runInContext(bData, ctx);

const tasks = ctx.TASKS_PANEL_DATA || [];
const errors = ctx.ERRORS_PANEL_DATA || [];

console.log('Total Panel Task sections:', tasks.length);
let totalTaskCount = 0;
tasks.forEach(s => totalTaskCount += (s.tasks ? s.tasks.length : 0));
console.log('Total Panel Tasks count:', totalTaskCount);

console.log('Total Error sections:', errors.length);
let totalBugCount = 0;
errors.forEach(s => totalBugCount += (s.bugs ? s.bugs.length : 0));
console.log('Total Panel Bugs count:', totalBugCount);
