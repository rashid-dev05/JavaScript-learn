const fs = require('fs');
const fmt = fs.readFileSync('scratch/test_formatter.js', 'utf8');
const con = fs.readFileSync('scratch/test_sandbox_console.js', 'utf8');

const fullCode = fmt + '\n' + con + `
const logs = [];
const c = createSandboxConsole(logs);

c.table([{ a: 1, b: 'hello' }, { a: 2, b: 'world' }]);
c.group('Group 1');
c.log('Inside group');
c.groupEnd();
c.dir({ x: 10 });
c.debug('debugging');
c.assert(false, 'failed condition');
c.assert(true, 'should not log');
c.time('my-timer');
c.timeEnd('my-timer');
c.count('counter');
c.count('counter');
c.trace('trace test');

console.log(logs.join('\\n'));
`;

eval(fullCode);
