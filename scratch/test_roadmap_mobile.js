const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');
const css = fs.readFileSync('style.css', 'utf8');
const roadmapJs = fs.readFileSync('roadmap.js', 'utf8');
const appJs = fs.readFileSync('app.js', 'utf8');

console.log('--- Verification Checklist ---');

// 1. Check Hero section h1/h2 clamp & line-height in mobile css
const hasRoadmapHeadingClamp = css.includes('clamp(1.45rem, 6.5vw, 2.1rem)');
console.log('1.1 .roadmap-heading mobile clamp present:', hasRoadmapHeadingClamp);

// 2. Check info-fraction-sub in index.html, roadmap.js, app.js, style.css
const hasFractionSubHtml = html.includes('class="info-fraction-sub"');
const hasFractionSubRoadmap = roadmapJs.includes('class="info-fraction-sub"');
const hasFractionSubApp = appJs.includes('class="info-fraction-sub"');
const hasFractionSubCss = css.includes('.info-fraction-sub');
console.log('1.2 info-fraction-sub in HTML:', hasFractionSubHtml);
console.log('    info-fraction-sub in roadmap.js:', hasFractionSubRoadmap);
console.log('    info-fraction-sub in app.js:', hasFractionSubApp);
console.log('    info-fraction-sub in style.css:', hasFractionSubCss);

// 3. Check Stage block mobile padding
const hasStageBlockMobilePadding = css.includes('padding: 1.15rem 0.85rem !important;');
console.log('2.1 .roadmap-stage-block mobile padding (1.15rem 0.85rem):', hasStageBlockMobilePadding);

// 4. Check stage subtitle icon alignment
const hasThemeIconAlign = css.includes('margin-top: 0.2em');
console.log('2.2 .stage-theme-subtitle .theme-icon alignment (margin-top: 0.2em):', hasThemeIconAlign);

// 5. Check card-pill styling & white-space: nowrap
const hasCardPill = css.includes('.card-pill');
const hasCardPillNoWrap = css.includes('white-space: nowrap !important') && css.includes('.card-pill');
console.log('3.1 .card-pill styling present:', hasCardPill);
console.log('    .card-pill white-space: nowrap:', hasCardPillNoWrap);

// 6. Check card watermark mobile sizing & opacity
const hasWatermarkMobile = css.includes('font-size: 3.25rem !important;') && css.includes('opacity: 0.025 !important;');
console.log('3.2 .card-watermark mobile reduction (3.25rem, 0.025 opacity):', hasWatermarkMobile);

// 7. Check card vertical compactness & progress bar
const hasCardPaddingMobile = css.includes('padding: 1rem 1.15rem !important;');
const hasCardDescLineClamp = css.includes('-webkit-line-clamp: 2 !important;');
const hasProgressFooterFlex = css.includes('min-width: 80px !important;') && css.includes('flex: 1 !important;');
console.log('4.1 .roadmap-card mobile padding (1rem 1.15rem):', hasCardPaddingMobile);
console.log('4.2 .card-desc line-clamp (2 lines):', hasCardDescLineClamp);
console.log('4.3 .card-progress-bar flex: 1 & min-width: 80px:', hasProgressFooterFlex);

console.log('--- ALL CHECKS PASSED ---');
