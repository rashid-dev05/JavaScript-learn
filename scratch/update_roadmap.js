const fs = require('fs');

// 1. Update index.html
let html = fs.readFileSync('index.html', 'utf8');
const oldHtmlTarget = '<span class="info-fraction" id="roadmap-fraction">0/21 bölmə (0/201 tapşırıq)</span>';
const newHtmlTarget = '<span class="info-fraction" id="roadmap-fraction">0/21 bölmə <span class="info-fraction-sub">(0/201 tapşırıq)</span></span>';

if (html.includes(oldHtmlTarget)) {
    html = html.replace(oldHtmlTarget, newHtmlTarget);
    fs.writeFileSync('index.html', html, 'utf8');
    console.log('index.html updated successfully!');
} else {
    console.log('index.html already updated or target not found');
}

// 2. Update roadmap.js
let roadmap = fs.readFileSync('roadmap.js', 'utf8');
const oldRoadmapTarget = 'roadmapFractionEl.textContent = `${completedSectionsCount}/${totalSectionsCount} bölmə (${validCompletedTasks}/${totalCurriculumTasks} tapşırıq)`;';
const newRoadmapTarget = 'roadmapFractionEl.innerHTML = `${completedSectionsCount}/${totalSectionsCount} bölmə <span class="info-fraction-sub">(${validCompletedTasks}/${totalCurriculumTasks} tapşırıq)</span>`;';

if (roadmap.includes(oldRoadmapTarget)) {
    roadmap = roadmap.replace(oldRoadmapTarget, newRoadmapTarget);
    fs.writeFileSync('roadmap.js', roadmap, 'utf8');
    console.log('roadmap.js updated successfully!');
} else {
    console.log('roadmap.js already updated or target not found');
}

// 3. Update app.js
let app = fs.readFileSync('app.js', 'utf8');
const oldAppTarget1 = 'roadmapFraction.textContent = `0/21 bölmə (0/${totalCurriculumTasks} tapşırıq)`;';
const newAppTarget1 = 'roadmapFraction.innerHTML = `0/21 bölmə <span class="info-fraction-sub">(0/${totalCurriculumTasks} tapşırıq)</span>`;';

const oldAppTarget2 = 'roadmapFractionEl.textContent = `${completedSectionsCount}/${totalSectionsCount} bölmə (${validCompletedTasks}/${totalCurriculumTasks} tapşırıq)`;';
const newAppTarget2 = 'roadmapFractionEl.innerHTML = `${completedSectionsCount}/${totalSectionsCount} bölmə <span class="info-fraction-sub">(${validCompletedTasks}/${totalCurriculumTasks} tapşırıq)</span>`;';

let appUpdated = false;
if (app.includes(oldAppTarget1)) {
    app = app.replace(oldAppTarget1, newAppTarget1);
    appUpdated = true;
}
if (app.includes(oldAppTarget2)) {
    app = app.replace(oldAppTarget2, newAppTarget2);
    appUpdated = true;
}
if (appUpdated) {
    fs.writeFileSync('app.js', app, 'utf8');
    console.log('app.js updated successfully!');
} else {
    console.log('app.js already updated or targets not found');
}

// 4. Update style.css
let css = fs.readFileSync('style.css', 'utf8');

// A. Base style for .info-fraction and .info-fraction-sub
const oldInfoFraction = `.info-fraction {
    font-family: var(--font-code);
    font-size: 0.95rem;
    font-weight: 700;
    color: #06B6D4;
}`;

const newInfoFraction = `.info-fraction {
    font-family: var(--font-code);
    font-size: 0.95rem;
    font-weight: 700;
    color: #06B6D4;
}

.info-fraction-sub {
    white-space: nowrap;
}`;

if (css.includes(oldInfoFraction)) {
    css = css.replace(oldInfoFraction, newInfoFraction);
    console.log('Base .info-fraction-sub added to style.css');
}

// B. Base style for .stage-theme-subtitle and icon alignment
const oldStageTheme = `.stage-theme-subtitle {
    font-size: 1.02rem;
    font-weight: 600;
    color: var(--stage-accent, #10B981);
    margin: 0 0 0.55rem 0;
    display: flex;
    align-items: center;
    gap: 0.45rem;
}

.stage-theme-subtitle .theme-icon {
    font-size: 0.85rem;
}`;

const newStageTheme = `.stage-theme-subtitle {
    font-size: 1.02rem;
    font-weight: 600;
    color: var(--stage-accent, #10B981);
    margin: 0 0 0.55rem 0;
    display: flex;
    align-items: flex-start;
    gap: 0.45rem;
}

.stage-theme-subtitle .theme-icon {
    font-size: 0.85rem;
    margin-top: 0.2em;
    flex-shrink: 0;
}`;

if (css.includes(oldStageTheme)) {
    css = css.replace(oldStageTheme, newStageTheme);
    console.log('Base .stage-theme-subtitle alignment updated in style.css');
}

// C. Base style for .card-pill
const oldCardTop = `.card-top {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    margin-bottom: 0.85rem;
}`;

const newCardTop = `.card-top {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    margin-bottom: 0.85rem;
}

.card-pill {
    display: inline-flex;
    align-items: center;
    padding: 0.25rem 0.65rem;
    border-radius: 6px;
    font-family: var(--font-code);
    font-size: 0.78rem;
    font-weight: 700;
    white-space: nowrap;
    background: rgba(var(--stage-accent-rgb, 6, 182, 212), 0.12);
    border: 1px solid rgba(var(--stage-accent-rgb, 6, 182, 212), 0.3);
    color: var(--stage-accent, #06B6D4);
}`;

if (css.includes(oldCardTop) && !css.includes('.card-pill {')) {
    css = css.replace(oldCardTop, newCardTop);
    console.log('Base .card-pill added to style.css');
}

// D. Add Mobile Roadmap Rules into @media (max-width: 640px)
const mobileRoadmapRules = `
    /* --------------------------------------------------------------------------
       CURRICULUM ROADMAP & MODULE CARDS - MOBILE VIEWPORT POLISH (<= 640px)
       -------------------------------------------------------------------------- */
    .roadmap-section {
        margin-top: 1.25rem !important;
    }

    .roadmap-header {
        margin-bottom: 1.5rem !important;
        gap: 1.15rem !important;
        flex-direction: column !important;
        align-items: stretch !important;
    }

    .roadmap-heading {
        font-size: clamp(1.45rem, 6.5vw, 2.1rem) !important;
        line-height: 1.18 !important;
        letter-spacing: -0.02em !important;
        text-wrap: balance !important;
    }

    .roadmap-subheading {
        font-size: 0.88rem !important;
        line-height: 1.45 !important;
        margin-top: 0.35rem !important;
    }

    .roadmap-progress-badge {
        width: 100% !important;
        box-sizing: border-box !important;
        padding: 0.75rem 1rem !important;
        gap: 0.85rem !important;
        justify-content: flex-start !important;
        border-radius: 14px !important;
    }

    .circular-progress-wrap {
        width: 52px !important;
        height: 52px !important;
        flex-shrink: 0 !important;
    }

    .circle-pct {
        font-size: 0.8rem !important;
    }

    .info-title {
        font-size: 0.74rem !important;
    }

    .info-fraction {
        font-size: clamp(0.82rem, 3.5vw, 0.95rem) !important;
        line-height: 1.3 !important;
    }

    .info-fraction-sub {
        white-space: nowrap !important;
        display: inline-block !important;
    }

    /* Nested Stage Card Width Recovery (Eliminate Double-Padding Squeeze) */
    .roadmap-stage-block {
        padding: 1.15rem 0.85rem !important;
        border-radius: 18px !important;
    }

    .roadmap-stage-header-card {
        gap: 1rem !important;
        margin-bottom: 1.25rem !important;
        padding-bottom: 1rem !important;
    }

    .stage-badge-wrap {
        gap: 0.45rem !important;
        margin-bottom: 0.45rem !important;
    }

    .stage-num-pill,
    .stage-range-tag {
        font-size: 0.72rem !important;
        padding: 0.25rem 0.6rem !important;
    }

    .stage-main-title {
        font-size: clamp(1.2rem, 4.5vw, 1.45rem) !important;
        line-height: 1.25 !important;
        margin: 0.15rem 0 0.3rem 0 !important;
    }

    .stage-theme-subtitle {
        font-size: clamp(0.85rem, 3.2vw, 0.95rem) !important;
        align-items: flex-start !important;
        gap: 0.35rem !important;
        margin-bottom: 0.45rem !important;
    }

    .stage-theme-subtitle .theme-icon {
        margin-top: 0.2em !important;
        flex-shrink: 0 !important;
        font-size: 0.8rem !important;
    }

    .stage-desc-text {
        font-size: 0.84rem !important;
        line-height: 1.45 !important;
    }

    .stage-header-right {
        width: 100% !important;
        align-items: stretch !important;
        min-width: 0 !important;
        gap: 0.5rem !important;
    }

    .stage-status-badge {
        align-self: flex-start !important;
        font-size: 0.74rem !important;
        padding: 0.28rem 0.65rem !important;
    }

    .stage-mini-progress {
        width: 100% !important;
    }

    /* Module Card Polish on Mobile (360px - 430px) */
    .roadmap-card {
        padding: 1rem 1.15rem !important;
        min-height: auto !important;
        border-radius: 14px !important;
    }

    .card-watermark {
        font-size: 3.25rem !important;
        top: 0.25rem !important;
        right: 0.5rem !important;
        opacity: 0.025 !important;
        line-height: 1 !important;
    }

    .card-top {
        margin-bottom: 0.65rem !important;
        gap: 0.4rem !important;
    }

    .card-pill {
        white-space: nowrap !important;
        font-size: 0.74rem !important;
        padding: 0.2rem 0.55rem !important;
        border-radius: 6px !important;
        flex-shrink: 0 !important;
    }

    .card-badges-wrap {
        gap: 0.35rem !important;
        justify-content: flex-end !important;
    }

    .card-difficulty-pill,
    .card-status-badge {
        padding: 0.2rem 0.5rem !important;
        font-size: 0.7rem !important;
        white-space: nowrap !important;
    }

    .card-title {
        font-size: clamp(1rem, 4vw, 1.12rem) !important;
        margin-bottom: 0.35rem !important;
        line-height: 1.3 !important;
    }

    .card-desc {
        font-size: 0.82rem !important;
        line-height: 1.4 !important;
        margin-bottom: 0.65rem !important;
        display: -webkit-box !important;
        -webkit-line-clamp: 2 !important;
        -webkit-box-orient: vertical !important;
        overflow: hidden !important;
    }

    .card-meta-counts {
        font-size: 0.75rem !important;
        gap: 0.5rem !important;
        margin-bottom: 0.65rem !important;
    }

    .card-tags {
        margin: 0 0 0.85rem 0 !important;
        gap: 0.25rem !important;
    }

    .card-tags li {
        font-size: 0.74rem !important;
        line-height: 1.35 !important;
    }

    .card-progress-footer {
        padding-top: 0.65rem !important;
        gap: 0.65rem !important;
    }

    .card-progress-bar {
        flex: 1 !important;
        min-width: 80px !important;
        height: 5px !important;
    }

    .card-progress-label {
        font-size: 0.72rem !important;
        white-space: nowrap !important;
    }
`;

// Insert into the first @media (max-width: 640px) block
const media640Target = '@media (max-width: 640px) {';
const mediaIdx = css.indexOf(media640Target);
if (mediaIdx !== -1 && !css.includes('CURRICULUM ROADMAP & MODULE CARDS - MOBILE VIEWPORT POLISH')) {
    css = css.slice(0, mediaIdx + media640Target.length) + mobileRoadmapRules + css.slice(mediaIdx + media640Target.length);
    fs.writeFileSync('style.css', css, 'utf8');
    console.log('Mobile roadmap rules successfully added to @media (max-width: 640px) in style.css');
} else {
    console.log('Mobile roadmap rules already present or media query not found');
}
