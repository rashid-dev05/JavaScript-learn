const fs = require('fs');
const appCode = fs.readFileSync('app.js', 'utf8');
const match = appCode.match(/function preprocessModuleCode\([\s\S]*?\n    \}/);
if (!match) throw new Error('Not found');

const fn = new Function('rawCode', match[0] + '; return preprocessModuleCode(rawCode);');

const testCases = [
    'const {\n a,\n b\n} = require("x");\nconsole.log(123);',
    'import {\n a,\n b\n} from "x";\nconsole.log("hello");',
    'export {\n a,\n b\n};\nconsole.log("ok");',
    'export async function f() {\n  return 42;\n}\nconsole.log(f);',
    'export default async function main() {\n  return 100;\n}\nconsole.log(main);',
    'export default async function() {\n  return 99;\n}',
    'export default function named() {\n  return 1;\n}',
    'export default class MyClass {}\nconst inst = new MyClass();',
    'export const a = 1, b = 2;\nconsole.log(a, b);',
    'export let c = 3;\nconsole.log(c);',
    'export var d = 4;\nconsole.log(d);',
    'import x from "y"; console.log("after");',
    'const s = `hello \nimport x from "y";\nworld`;\nconsole.log(s);',
    '// import x from "y";\nconsole.log("comment");',
    '/*\nimport x from "y";\n*/\nconsole.log("block comment");'
];

const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;

testCases.forEach((tc, idx) => {
    const res = fn(tc);
    try {
        new AsyncFunction(res);
    } catch(err) {
        console.error('FAILED case ' + idx + ':', tc, 'Result was:', res, 'Error:', err);
        process.exit(1);
    }
});

const trailingCheck = fn('import x from "y"; console.log("after");');
if (!trailingCheck.includes('console.log("after");')) {
    throw new Error('Trailing code lost!');
}

console.log('SUCCESS: All 15 test cases + trailing code check passed!');
