function createSandboxConsole(logs, onAsyncError) {
    let groupIndent = '';
    const groupStack = [];
    const countMap = Object.create(null);
    const timeMap = Object.create(null);

    function emit(text) {
        if (groupIndent.length > 0) {
            const indented = String(text).split('\n').map(line => groupIndent + line).join('\n');
            logs.push(indented);
        } else {
            logs.push(String(text));
        }
    }

    function formatLine(args) {
        return args.map(a => formatConsoleArg(a)).join(' ');
    }

    function renderTable(data, properties) {
        if (data === null || data === undefined || (typeof data !== 'object' && typeof data !== 'function')) {
            emit(formatConsoleArg(data));
            return;
        }

        try {
            const isArray = Array.isArray(data);
            const rowKeys = isArray ? data.map((_, i) => String(i)) : Object.keys(data);
            if (rowKeys.length === 0) {
                emit(formatConsoleArg(data));
                return;
            }

            // Collect column keys
            let colKeysSet = new Set();
            for (const rKey of rowKeys) {
                const row = data[rKey];
                if (row !== null && typeof row === 'object') {
                    for (const k of Object.keys(row)) {
                        colKeysSet.add(k);
                    }
                } else {
                    colKeysSet.add('Values');
                }
            }

            let colKeys = Array.from(colKeysSet);
            if (Array.isArray(properties) && properties.length > 0) {
                colKeys = properties.map(String).filter(p => colKeysSet.has(p));
            }

            const headerCol = '(index)';
            const headers = [headerCol, ...colKeys];
            const rows = [];

            for (const rKey of rowKeys) {
                const row = data[rKey];
                const rowData = [rKey];
                for (const col of colKeys) {
                    if (row !== null && typeof row === 'object') {
                        rowData.push(col in row ? formatConsoleArg(row[col], 1) : '');
                    } else if (col === 'Values') {
                        rowData.push(formatConsoleArg(row, 1));
                    } else {
                        rowData.push('');
                    }
                }
                rows.push(rowData);
            }

            // Calculate widths
            const colWidths = headers.map((h, colIdx) => {
                let maxW = h.length;
                for (const row of rows) {
                    const cellLen = String(row[colIdx] || '').length;
                    if (cellLen > maxW) maxW = cellLen;
                }
                return Math.max(maxW, 3);
            });

            function pad(str, len) {
                str = String(str || '');
                return str + ' '.repeat(Math.max(0, len - str.length));
            }

            const headerLine = headers.map((h, i) => pad(h, colWidths[i])).join(' | ');
            const sepLine = colWidths.map(w => '-'.repeat(w)).join('-+-');
            const rowLines = rows.map(r => r.map((c, i) => pad(c, colWidths[i])).join(' | '));

            emit([headerLine, sepLine, ...rowLines].join('\n'));
        } catch (e) {
            emit(formatConsoleArg(data));
        }
    }

    return {
        log: function(...args) {
            emit(formatLine(args));
        },
        info: function(...args) {
            emit(formatLine(args));
        },
        warn: function(...args) {
            emit(formatLine(args));
        },
        error: function(...args) {
            emit(formatLine(args));
        },
        debug: function(...args) {
            emit(formatLine(args));
        },
        dir: function(item) {
            emit(formatConsoleArg(item));
        },
        table: function(data, properties) {
            renderTable(data, properties);
        },
        group: function(...args) {
            if (args.length > 0) emit(formatLine(args));
            groupStack.push(groupIndent);
            groupIndent += '  ';
        },
        groupCollapsed: function(...args) {
            if (args.length > 0) emit(formatLine(args));
            groupStack.push(groupIndent);
            groupIndent += '  ';
        },
        groupEnd: function() {
            if (groupStack.length > 0) {
                groupIndent = groupStack.pop();
            } else {
                groupIndent = '';
            }
        },
        assert: function(condition, ...args) {
            if (!condition) {
                if (args.length > 0) {
                    emit('Assertion failed: ' + formatLine(args));
                } else {
                    emit('Assertion failed');
                }
            }
        },
        count: function(label = 'default') {
            const key = label === undefined ? 'default' : String(label);
            countMap[key] = (countMap[key] || 0) + 1;
            emit(`${key}: ${countMap[key]}`);
        },
        countReset: function(label = 'default') {
            const key = label === undefined ? 'default' : String(label);
            countMap[key] = 0;
        },
        time: function(label = 'default') {
            const key = label === undefined ? 'default' : String(label);
            timeMap[key] = (typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now();
        },
        timeLog: function(label = 'default', ...args) {
            const key = label === undefined ? 'default' : String(label);
            if (timeMap[key] !== undefined) {
                const now = (typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now();
                const diff = (now - timeMap[key]).toFixed(3);
                emit(`${key}: ${diff}ms` + (args.length > 0 ? ' ' + formatLine(args) : ''));
            }
        },
        timeEnd: function(label = 'default') {
            const key = label === undefined ? 'default' : String(label);
            if (timeMap[key] !== undefined) {
                const now = (typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now();
                const diff = (now - timeMap[key]).toFixed(3);
                emit(`${key}: ${diff}ms`);
                delete timeMap[key];
            } else {
                emit(`${key}: 0.000ms`);
            }
        },
        trace: function(...args) {
            const header = 'Trace:' + (args.length > 0 ? ' ' + formatLine(args) : '');
            emit(header + '\n    at eval (<anonymous>)');
        },
        clear: function() {}
    };
}
