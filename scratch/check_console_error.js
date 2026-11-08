const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.startsWith('data_') || f === 'panel_data.js');
files.forEach(f => {
    const c = fs.readFileSync(f, 'utf8');
    const lines = c.split('\n');
    lines.forEach((l, idx) => {
        if (l.includes('console.error')) {
            const block = lines.slice(Math.max(0, idx - 10), Math.min(lines.length, idx + 15)).join('\n');
            console.log(`=== ${f}:${idx+1} ===\n${block}\n`);
        }
    });
});
