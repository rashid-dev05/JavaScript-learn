function hasObviousInfiniteLoop(code) {
    if (!code || typeof code !== 'string') return false;
    const stripped = code
        .replace(/\/\*[\s\S]*?\*\//g, ' ')
        .replace(/\/\/[^\r\n]*/g, ' ')
        .replace(/(['"`])(?:\\.|(?!\1)[^\\])*\1/g, '""');
    return (
        /\bwhile\s*\(\s*(true|1|!0)\s*\)/i.test(stripped) ||
        /\bfor\s*\(\s*[^;]*;\s*;\s*[^)]*\)/.test(stripped) ||
        /\bfor\s*\(\s*[^;]*;\s*(true|1|!0)\s*;/i.test(stripped) ||
        /\bdo\s*\{[\s\S]*\}\s*while\s*\(\s*(true|1|!0)\s*\)/i.test(stripped)
    );
}

const tests = [
    { code: 'while(true){}', expected: true },
    { code: 'while ( 1 ) { }', expected: true },
    { code: 'while ( !0 ) { }', expected: true },
    { code: 'for(;;){}', expected: true },
    { code: 'for ( let i = 0 ; ; i++ ) {}', expected: true },
    { code: 'for ( ; true ; ) {}', expected: true },
    { code: 'do { console.log(1); } while(true)', expected: true },
    { code: 'while(i < 10) { i++; }', expected: false },
    { code: 'for(let i = 0; i < 10; i++) {}', expected: false },
    { code: 'console.log("while(true)");', expected: false },
    { code: '// while(true)\nconsole.log(1);', expected: false },
    { code: '/* while(true) */\nconsole.log(1);', expected: false }
];

tests.forEach((t, i) => {
    const res = hasObviousInfiniteLoop(t.code);
    if (res !== t.expected) {
        console.error(`Failed test ${i}: ${t.code} expected ${t.expected} got ${res}`);
        process.exit(1);
    }
});
console.log('All hasObviousInfiniteLoop tests passed!');
