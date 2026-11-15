const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');
const css = fs.readFileSync('style.css', 'utf8');

// 1. Verify IDs in index.html
const ids = ['cert-status-badge', 'cert-title', 'cert-subtitle', 'cert-user-name', 'cert-id', 'cert-date'];
console.log('--- Checking HTML IDs ---');
ids.forEach(id => {
    const found = html.includes(`id="${id}"`) || html.includes(`class="${id}"`);
    console.log(`ID/Class [${id}]: ${found ? 'FOUND' : 'MISSING'}`);
});

// 2. Verify CSS classes
const certClasses = [
    '.certificate-section',
    '.certificate-card',
    '.cert-border-glow',
    '.cert-inner',
    '.cert-header',
    '.cert-badge-logo',
    '.cert-status',
    '.cert-title',
    '.cert-subtitle',
    '.cert-recipient',
    '.cert-body',
    '.cert-footer',
    '.cert-meta',
    '.cert-stamp'
];

console.log('\n--- Checking CSS Selectors ---');
certClasses.forEach(cls => {
    const count = (css.match(new RegExp(cls.replace('.', '\\.'), 'g')) || []).length;
    console.log(`Selector [${cls}]: found ${count} times`);
});
