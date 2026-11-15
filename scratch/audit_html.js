const fs = require('fs');
const html = fs.readFileSync('./index.html', 'utf8');

console.log('--- Inputs check ---');
const inputs = html.match(/<input[^>]+>/g) || [];
inputs.forEach(inp => {
    const id = inp.match(/id=['"]([^'"]+)['"]/);
    if (id) {
        const hasLabel = html.includes('for="' + id[1] + '"') || html.includes("for='" + id[1] + "'");
        const hasAria = inp.includes('aria-label');
        console.log(`Input #${id[1]}: label=${hasLabel}, aria=${hasAria}`);
    }
});

console.log('\n--- Selects check ---');
const selects = html.match(/<select[^>]+>/g) || [];
selects.forEach(sel => {
    const id = sel.match(/id=['"]([^'"]+)['"]/);
    if (id) {
        const hasLabel = html.includes('for="' + id[1] + '"') || html.includes("for='" + id[1] + "'");
        const hasAria = sel.includes('aria-label');
        console.log(`Select #${id[1]}: label=${hasLabel}, aria=${hasAria}`);
    }
});

console.log('\n--- Dialogs check ---');
const dialogs = html.match(/<dialog[^>]+>/g) || [];
dialogs.forEach(d => console.log(d));
