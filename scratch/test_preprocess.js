const fs = require('fs');

function preprocessModuleCode(rawCode) {
    if (!rawCode || typeof rawCode !== 'string') return '';

    function blankOut(str) {
        return str.replace(/[^\r\n]/g, ' ');
    }

    const len = rawCode.length;
    let i = 0;
    let result = '';

    while (i < len) {
        const ch = rawCode[i];
        const next = i + 1 < len ? rawCode[i + 1] : '';

        // 1. Single-line comment: keep intact
        if (ch === '/' && next === '/') {
            let start = i;
            i += 2;
            while (i < len && rawCode[i] !== '\n' && rawCode[i] !== '\r') {
                i++;
            }
            result += rawCode.slice(start, i);
            continue;
        }

        // 2. Multi-line comment: keep intact
        if (ch === '/' && next === '*') {
            let start = i;
            i += 2;
            while (i < len && !(rawCode[i] === '*' && rawCode[i + 1] === '/')) {
                i++;
            }
            if (i < len) i += 2;
            result += rawCode.slice(start, i);
            continue;
        }

        // 3. String literal (' or "): keep intact
        if (ch === "'" || ch === '"') {
            const quote = ch;
            let start = i;
            i++;
            while (i < len && rawCode[i] !== quote) {
                if (rawCode[i] === '\\') i++;
                i++;
            }
            if (i < len) i++;
            result += rawCode.slice(start, i);
            continue;
        }

        // 4. Template literal (`): handle expressions (${...})
        if (ch === '`') {
            let start = i;
            i++;
            while (i < len) {
                if (rawCode[i] === '\\') {
                    i += 2;
                    continue;
                }
                if (rawCode[i] === '`') {
                    i++;
                    break;
                }
                if (rawCode[i] === '$' && rawCode[i + 1] === '{') {
                    result += rawCode.slice(start, i + 2);
                    i += 2;
                    let braceDepth = 1;
                    let exprStart = i;
                    while (i < len && braceDepth > 0) {
                        const c = rawCode[i];
                        const n = i + 1 < len ? rawCode[i + 1] : '';
                        if (c === '/' && n === '/') {
                            while (i < len && rawCode[i] !== '\n' && rawCode[i] !== '\r') i++;
                            continue;
                        }
                        if (c === '/' && n === '*') {
                            i += 2;
                            while (i < len && !(rawCode[i] === '*' && rawCode[i + 1] === '/')) i++;
                            if (i < len) i += 2;
                            continue;
                        }
                        if (c === "'" || c === '"') {
                            const q = c; i++;
                            while (i < len && rawCode[i] !== q) {
                                if (rawCode[i] === '\\') i++;
                                i++;
                            }
                            if (i < len) i++;
                            continue;
                        }
                        if (c === '`') {
                            i++;
                            while (i < len && rawCode[i] !== '`') {
                                if (rawCode[i] === '\\') i++;
                                i++;
                            }
                            if (i < len) i++;
                            continue;
                        }
                        if (c === '{') braceDepth++;
                        else if (c === '}') {
                            braceDepth--;
                            if (braceDepth === 0) break;
                        }
                        i++;
                    }
                    const exprCode = rawCode.slice(exprStart, i);
                    result += preprocessModuleCode(exprCode);
                    if (i < len && rawCode[i] === '}') {
                        result += '}';
                        i++;
                    }
                    start = i;
                    continue;
                }
                i++;
            }
            result += rawCode.slice(start, i);
            continue;
        }

        // 5. Code statements outside strings/comments
        const remaining = rawCode.slice(i);

        // A. Multi-line or single-line import:
        const importMatch = remaining.match(/^import\s+([\s\S]*?from\s*['"][^'"]+['"]|['"][^'"]+['"]);?/);
        if (importMatch) {
            result += blankOut(importMatch[0]);
            i += importMatch[0].length;
            continue;
        }

        // B. require statement:
        const reqMatch = remaining.match(/^(?:const|let|var)\s+(?:\{[\s\S]*?\}|[a-zA-Z0-9_$]+)\s*=\s*require\s*\([^)]*\);?/);
        if (reqMatch) {
            result += blankOut(reqMatch[0]);
            i += reqMatch[0].length;
            continue;
        }

        // C. export default async function / export default function / export default class (with name)
        const expDefNamedMatch = remaining.match(/^export\s+default\s+(async\s+function|function|class)\s+([a-zA-Z0-9_$]+)\b/);
        if (expDefNamedMatch) {
            result += blankOut('export default ') + expDefNamedMatch[1] + ' ' + expDefNamedMatch[2];
            i += expDefNamedMatch[0].length;
            continue;
        }

        // D. export default <anonymous function/class or expression>
        const expDefExprMatch = remaining.match(/^export\s+default\s+/);
        if (expDefExprMatch) {
            result += 'const __default__ = ';
            i += expDefExprMatch[0].length;
            continue;
        }

        // E. export async function / export function / export class / export const / export let / export var
        const expDeclMatch = remaining.match(/^export\s+(async\s+function|function|class|const|let|var)\b/);
        if (expDeclMatch) {
            result += blankOut('export ') + expDeclMatch[1];
            i += expDeclMatch[0].length;
            continue;
        }

        // F. export { a, b }; (multi-line or single-line)
        const expNamedMatch = remaining.match(/^export\s*\{[\s\S]*?\};?/);
        if (expNamedMatch) {
            result += blankOut(expNamedMatch[0]);
            i += expNamedMatch[0].length;
            continue;
        }

        // Regular character
        result += ch;
        i++;
    }

    return result;
}

const testCases = [
    'const {\n a,\n b\n} = require("x");\nconsole.log(123);',
    'import {\n a,\n b\n} from "x";\nconsole.log("hello");',
    'export {\n a,\n b\n};\nconsole.log("ok");',
    'export async function f() {\n  return 42;\n}\nconsole.log(f);',
    'export default async function main() {\n  return 100;\n}\nconsole.log(main);',
    'export default async function() {\n  return 99;\n}',
    'export default function named() {\n  return 1;\n}',
    'export default function() {\n  return 2;\n}',
    'export default class MyClass {}',
    'export default class {}',
    'export default 42;',
    'import x from "y"; console.log("after");',
    'const template = `\nimport x from "fake";\nconsole.log("fake");\n`;\nconsole.log("done");',
    '// import comment from "c";\nconsole.log("comment ok");',
    '/* multi-line\nimport comment from "c";\n*/\nconsole.log("comment ok2");'
];

const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;

let passed = 0;
for (const code of testCases) {
    const out = preprocessModuleCode(code);
    try {
        new AsyncFunction('require', out);
        passed++;
    } catch (err) {
        console.error('FAILED TO PARSE:\nOriginal:\n' + code + '\nProcessed:\n' + out + '\nError:', err);
        process.exit(1);
    }
}

console.log(`All ${passed} comprehensive test cases parsed successfully in new AsyncFunction!`);

const sameLineTest = preprocessModuleCode("import x from 'y'; console.log('after');");
if (!sameLineTest.includes("console.log('after');")) {
    throw new Error("sameLineTest failed: console.log('after') missing!");
}
console.log("Confirmed: import x from 'y'; console.log('after') preserves console.log('after')!");

