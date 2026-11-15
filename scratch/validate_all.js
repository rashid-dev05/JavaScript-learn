const fs = require('fs');
const { execSync } = require('child_process');

console.log('--- 1. Testing JS Syntax for all modified files ---');
try {
    execSync('node -c simulator.js', { stdio: 'inherit' });
    console.log('simulator.js syntax: VALID');
    execSync('node -c app.js', { stdio: 'inherit' });
    console.log('app.js syntax: VALID');
    execSync('node -c sw.js', { stdio: 'inherit' });
    console.log('sw.js syntax: VALID');
} catch (e) {
    console.error('Syntax error detected!', e);
    process.exit(1);
}

console.log('\n--- 2. Testing sanitizeCodeForExecution ---');
const simulator = require('../simulator.js');
const testInput = 'const fn = (a, b) \u21D2 a + b;\nif (x \u2A7E 10 && y \u2A7D 5 && z \u2260 0) {\n  console.log(\u201CHello\u201D, \u2018World\u2019);\n}\n\u00A0let\u00A0num\u200B=\u00A042;';
const clean = simulator.sanitizeCodeForExecution(testInput);
console.log('Sanitized output:\n' + clean);

if (clean.includes('\u21D2') || clean.includes('\u2A7E') || clean.includes('\u2A7D') || clean.includes('\u2260') || clean.includes('\u201C') || clean.includes('\u2018') || clean.includes('\u00A0') || clean.includes('\u200B')) {
    console.error('FAILED: Unicode ligatures still present!');
    process.exit(1);
} else {
    console.log('Unicode ligatures successfully purged: PASSED');
}

console.log('\n--- 3. Testing index.html sandbox security ---');
const html = fs.readFileSync('index.html', 'utf8');
const hasIframe = html.includes('id="code-runner-frame"');
const hasAllowScripts = html.includes('sandbox="allow-scripts"');
const hasAllowSameOrigin = html.includes('allow-same-origin');
const hasSimScript = html.includes('src="simulator.js"');

console.log('Iframe present:', hasIframe);
console.log('sandbox="allow-scripts" present:', hasAllowScripts);
console.log('allow-same-origin forbidden (must be false):', hasAllowSameOrigin);
console.log('simulator.js script tag present:', hasSimScript);

if (!hasIframe || !hasAllowScripts || hasAllowSameOrigin || !hasSimScript) {
    console.error('FAILED: Security attributes mismatch in index.html');
    process.exit(1);
}

console.log('\n--- 4. Testing sw.js precache assets ---');
const sw = fs.readFileSync('sw.js', 'utf8');
const hasPrecache = sw.includes("'./simulator.js'");
console.log('simulator.js precached in sw.js:', hasPrecache);
if (!hasPrecache) {
    console.error('FAILED: simulator.js not precached in sw.js');
    process.exit(1);
}

console.log('\n--- ALL ARCHITECTURAL TESTS PASSED 100% ---');
