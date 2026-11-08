const fs = require('fs');
const path = require('path');
const eslintPath = path.join(process.env.LOCALAPPDATA, 'npm-cache', '_npx', '515228b7c8d004a2', 'node_modules', 'eslint');
const { ESLint } = require(eslintPath);

const vmTest = require('./test_vm_worker.js'); // wait, let's load buildWorkerScript

// Let's get the assembled worker script and lint it
const workerCode = `
/* eslint-disable no-unused-vars */
` + fs.readFileSync('scratch/test_vm_worker.js', 'utf8');
