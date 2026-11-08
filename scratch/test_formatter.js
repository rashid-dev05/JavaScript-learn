function formatConsoleArg(arg, depth = 0, seen = new WeakSet()) {
    if (arg === undefined) return 'undefined';
    if (arg === null) return 'null';

    const type = typeof arg;

    if (type === 'boolean') return String(arg);
    if (type === 'number') {
        if (Object.is(arg, -0)) return '-0';
        if (Number.isNaN(arg)) return 'NaN';
        if (arg === Infinity) return 'Infinity';
        if (arg === -Infinity) return '-Infinity';
        return String(arg);
    }
    if (type === 'bigint') return arg.toString() + 'n';
    if (type === 'symbol') return arg.toString();
    if (type === 'string') {
        return depth === 0 ? arg : JSON.stringify(arg);
    }
    if (type === 'function') {
        if (depth === 0) return arg.toString();
        const fnName = arg.name || 'anonymous';
        return `[Function: ${fnName}]`;
    }

    if (type === 'object') {
        if (arg instanceof Error) {
            return arg.stack ? arg.stack : `${arg.name || 'Error'}: ${arg.message || ''}`;
        }

        if (typeof Map !== 'undefined' && arg instanceof Map) {
            if (seen.has(arg)) return '[Dairəvi Obyekt]';
            seen.add(arg);
            if (depth >= 4) return '[Map]';
            const entries = [];
            for (const [k, v] of arg.entries()) {
                entries.push(`${formatConsoleArg(k, depth + 1, seen)} => ${formatConsoleArg(v, depth + 1, seen)}`);
            }
            return `Map(${arg.size}) { ${entries.join(', ')} }`;
        }

        if (typeof Set !== 'undefined' && arg instanceof Set) {
            if (seen.has(arg)) return '[Dairəvi Obyekt]';
            seen.add(arg);
            if (depth >= 4) return '[Set]';
            const values = [];
            for (const v of arg.values()) {
                values.push(formatConsoleArg(v, depth + 1, seen));
            }
            return `Set(${arg.size}) { ${values.join(', ')} }`;
        }

        if (typeof Date !== 'undefined' && arg instanceof Date) {
            return isNaN(arg.getTime()) ? 'Invalid Date' : arg.toISOString();
        }

        if (typeof RegExp !== 'undefined' && arg instanceof RegExp) {
            return arg.toString();
        }

        if (Array.isArray(arg)) {
            if (seen.has(arg)) return '[Dairəvi Obyekt]';
            seen.add(arg);
            if (depth >= 4) return '[Array]';
            if (arg.length === 0) return '[]';
            const indent = '  '.repeat(depth);
            const childIndent = '  '.repeat(depth + 1);
            const items = [];
            for (let i = 0; i < arg.length; i++) {
                items.push(childIndent + (i in arg ? formatConsoleArg(arg[i], depth + 1, seen) : '<empty>'));
            }
            return '[\n' + items.join(',\n') + '\n' + indent + ']';
        }

        if (seen.has(arg)) return '[Dairəvi Obyekt]';
        seen.add(arg);
        if (depth >= 4) return '[Object]';
        const keys = Object.keys(arg);
        if (keys.length === 0) return '{}';
        const indent = '  '.repeat(depth);
        const childIndent = '  '.repeat(depth + 1);
        const props = [];
        for (let i = 0; i < keys.length; i++) {
            const k = keys[i];
            const valStr = formatConsoleArg(arg[k], depth + 1, seen);
            props.push(childIndent + JSON.stringify(k) + ': ' + valStr);
        }
        return '{\n' + props.join(',\n') + '\n' + indent + '}';
    }

    return String(arg);
}

// Test cases
console.log('--- Test 1: Map, Set, Error, [NaN, Infinity, -0], {a:undefined} ---');
console.log([
    formatConsoleArg(new Map([[1, 2]])),
    formatConsoleArg(new Set([1])),
    formatConsoleArg(new Error("e")),
    formatConsoleArg([NaN, Infinity, -0]),
    formatConsoleArg({ a: undefined })
].join(' '));

console.log('--- Test 2: {a:1, b:[1,2]}, "z" ---');
console.log([
    formatConsoleArg({ a: 1, b: [1, 2] }),
    formatConsoleArg("z")
].join(' '));

console.log('--- Test 3: Circular ---');
const circ = { a: 1 };
circ.self = circ;
console.log(formatConsoleArg(circ));
