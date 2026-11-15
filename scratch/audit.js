const fs = require('fs');
const css = fs.readFileSync('./style.css', 'utf8');
const lines = css.split('\n');

console.log('=== CSS DEEP AUDIT RESULTS ===');

// 1. Check 100vh occurrences
console.log('\n--- 1. Check 100vh usage ---');
let vhIssues = [];
lines.forEach((l, i) => {
    if (l.includes('100vh')) {
        const hasDvh = (lines[i-1] && lines[i-1].includes('100dvh')) || 
                       (lines[i+1] && lines[i+1].includes('100dvh')) ||
                       l.includes('100dvh');
        if (!hasDvh) {
            vhIssues.push({ line: i + 1, text: l.trim() });
        }
    }
});
console.log('Total 100vh without adjacent 100dvh fallback:', vhIssues.length);
vhIssues.slice(0, 10).forEach(x => console.log('Line ' + x.line + ': ' + x.text));

// 2. Rigid px widths that cause mobile overflow
console.log('\n--- 2. Rigid pixel widths (min-width or width > 280px) ---');
let rigidWidths = [];
lines.forEach((l, i) => {
    const match = l.match(/(?:^|\s)(width|min-width):\s*(\d+)px/);
    if (match) {
        const prop = match[1];
        const val = parseInt(match[2], 10);
        if (val >= 300) {
            rigidWidths.push({ line: i + 1, prop: prop, val: val, text: l.trim() });
        }
    }
});
console.log('Total rigid px widths/min-widths >= 300px:', rigidWidths.length);
rigidWidths.forEach(x => console.log('Line ' + x.line + ': ' + x.text));

// 3. Rigid px heights that cause vertical overflow / clipping on mobile
console.log('\n--- 3. Rigid pixel heights (height / min-height >= 400px) ---');
let rigidHeights = [];
lines.forEach((l, i) => {
    const match = l.match(/(?:^|\s)(height):\s*(\d+)px/);
    if (match) {
        const val = parseInt(match[2], 10);
        if (val >= 350) {
            rigidHeights.push({ line: i + 1, val: val, text: l.trim() });
        }
    }
});
console.log('Total rigid px heights >= 350px:', rigidHeights.length);
rigidHeights.forEach(x => console.log('Line ' + x.line + ': ' + x.text));

// 4. Flex / Grid blowout checks (missing min-width: 0 on flex/grid items with long text or editors)
console.log('\n--- 4. Potential Flex/Grid blowout candidates ---');
let flexWithoutMin = [];
lines.forEach((l, i) => {
    if (l.includes('flex: 1') && !l.includes('min-width') && !lines[i+1]?.includes('min-width') && !lines[i-1]?.includes('min-width')) {
        // check selector context
        flexWithoutMin.push({ line: i + 1, text: l.trim() });
    }
});
console.log('Flex: 1 without adjacent min-width: 0:', flexWithoutMin.length);
flexWithoutMin.slice(0, 10).forEach(x => console.log('Line ' + x.line + ': ' + x.text));

// 5. Animations / Transitions on layout-thrashing properties
console.log('\n--- 5. Layout-thrashing transitions/animations ---');
let layoutThrashing = [];
lines.forEach((l, i) => {
    if (l.includes('transition:') && (l.includes('max-height') || l.includes('width') || l.includes('height') || l.includes('top') || l.includes('left'))) {
        layoutThrashing.push({ line: i + 1, text: l.trim() });
    }
    if (l.includes('@keyframes')) {
        // check keyframes definition
    }
});
console.log('Layout-thrashing transitions (max-height, width, top, etc.):', layoutThrashing.length);
layoutThrashing.forEach(x => console.log('Line ' + x.line + ': ' + x.text));

// 6. Hover styles not wrapped in @media (hover: hover)
console.log('\n--- 6. Hover styles outside @media (hover: hover) ---');
let hoverSelectors = [];
let inHover = false;
let braceDepth = 0;
let mediaHoverDepth = -1;

for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    if (l.includes('@media (hover: hover)') || l.includes('@media (hover:hover)')) {
        mediaHoverDepth = braceDepth;
    }
    if (l.includes('{')) braceDepth += (l.match(/\{/g) || []).length;
    if (l.includes('}')) {
        braceDepth -= (l.match(/\}/g) || []).length;
        if (mediaHoverDepth !== -1 && braceDepth <= mediaHoverDepth) {
            mediaHoverDepth = -1;
        }
    }
    if (l.includes(':hover') && !l.includes('@media') && mediaHoverDepth === -1) {
        hoverSelectors.push({ line: i + 1, text: l.trim() });
    }
}
console.log('Total :hover selectors outside @media (hover: hover):', hoverSelectors.length);
hoverSelectors.slice(0, 15).forEach(x => console.log('Line ' + x.line + ': ' + x.text));

// 7. Touch targets smaller than 44px
console.log('\n--- 7. Small buttons/interactive targets (< 44px) ---');
let smallTargets = [];
lines.forEach((l, i) => {
    const match = l.match(/(?:^|\s)(?:height|min-height|width|min-width):\s*(\d+)px/);
    if (match) {
        const val = parseInt(match[1], 10);
        if (val < 40 && val > 15 && (lines[i-1]?.includes('btn') || lines[i-2]?.includes('btn') || l.includes('btn') || lines[i-1]?.includes('button') || lines[i-2]?.includes('button'))) {
            smallTargets.push({ line: i + 1, text: l.trim(), prev: lines[i-1]?.trim() });
        }
    }
});
console.log('Small button targets count:', smallTargets.length);
smallTargets.forEach(x => console.log('Line ' + x.line + ': ' + x.text + ' (prev: ' + x.prev + ')'));

// 8. Stacking Context & z-index
console.log('\n--- 8. High z-index values ---');
let highZ = [];
lines.forEach((l, i) => {
    const match = l.match(/z-index:\s*(\d+)/);
    if (match) {
        const val = parseInt(match[1], 10);
        if (val >= 100) {
            highZ.push({ line: i + 1, val: val, text: l.trim() });
        }
    }
});
console.log('z-index >= 100:', highZ.length);
highZ.forEach(x => console.log('Line ' + x.line + ': ' + x.text));
