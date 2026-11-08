const fs = require('fs');

const css = fs.readFileSync('style.css', 'utf-8');
const targetStr = `/* ==========================================================================
   MASTER MOBILE RESPONSIVE ARCHITECTURE (320px - 430px up to Tablet)
   Specialized Refactor: Zero-horizontal-scroll, Fluid Typography, Dynamic Viewports,
   44x44px Touch Targets, and Ergonomic Mobile Reach.
   ========================================================================== */`;

const startIdx = css.indexOf(targetStr);
const endMarker = `.btn-loading {`;
const endIdx = css.indexOf(endMarker, startIdx);

console.log('startIdx:', startIdx);
console.log('endIdx:', endIdx);
console.log('Found segment length:', endIdx - startIdx);
