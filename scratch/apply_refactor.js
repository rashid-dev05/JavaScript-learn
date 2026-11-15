const fs = require('fs');

let css = fs.readFileSync('./style.css', 'utf8');

// 1. Add Stacking Context tokens and fluid typography to :root
const rootTarget = `    --sidebar-mobile-width: min(320px, 86vw);
    --container-max-width: 1320px;
}`;

const rootReplacement = `    --sidebar-mobile-width: min(320px, 86vw);
    --container-max-width: 1320px;

    /* Stacking Context (Z-Index) Tokens */
    --z-canvas-underlay: -2;
    --z-canvas-wave: -1;
    --z-base: 1;
    --z-elevated: 10;
    --z-sidebar: 80;
    --z-sticky-nav: 1000;
    --z-dropdown: 1100;
    --z-sidebar-mobile: 450;
    --z-drawer-backdrop: 490;
    --z-drawer: 500;
    --z-modal-backdrop: 900;
    --z-modal: 1000;
    --z-modal-fullscreen: 2500;
    --z-keyboard-toolbar: 9999;
    --z-toast: 9999;
    --z-loading: 9999;

    /* Fluid Typography Scale */
    --font-size-hero: clamp(1.85rem, 5vw + 0.5rem, 2.85rem);
    --font-size-h1: clamp(1.5rem, 4vw + 0.3rem, 2.75rem);
    --font-size-h2: clamp(1.3rem, 3vw + 0.2rem, 2.1rem);
    --font-size-h3: clamp(1.1rem, 2vw + 0.2rem, 1.5rem);
}`;

css = css.replace(rootTarget, rootReplacement);

// 2. Replace solitary 100vh with 100dvh fallback
css = css.replace(
`/* ---- App Layout ---- */
.app {
    display: flex;
    min-height: 100vh;
}`,
`/* ---- App Layout ---- */
.app {
    display: flex;
    min-height: 100vh;
    min-height: 100dvh;
}`
);

css = css.replace(
`.main-content {
    margin-left: 0;
    flex: 1;
    min-width: 0;
    min-height: 100vh;
    padding: 2.25rem 2.5rem;
    max-width: 1080px;
    position: relative;
    background: transparent !important;
}`,
`.main-content {
    margin-left: 0;
    flex: 1;
    min-width: 0;
    min-height: 100vh;
    min-height: 100dvh;
    padding: 2.25rem 2.5rem;
    max-width: 1080px;
    position: relative;
    background: transparent !important;
}`
);

css = css.replace(
`/* Split-Screen Dual-Panel */
.exam-split-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.35rem;
    align-items: stretch;
    min-height: calc(100vh - 190px);
    height: calc(100vh - 190px);
}`,
`/* Split-Screen Dual-Panel */
.exam-split-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.35rem;
    align-items: stretch;
    min-height: calc(100vh - 190px);
    min-height: calc(100dvh - 190px);
    height: calc(100vh - 190px);
    height: calc(100dvh - 190px);
}`
);

css = css.replace(
`/* Blueprint Grid Background Canvas */
.blueprint-canvas {
    background-color: var(--bg-primary);
    background-image: 
        linear-gradient(to right, rgba(56, 189, 248, 0.04) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(56, 189, 248, 0.04) 1px, transparent 1px);
    background-size: 36px 36px;
    background-attachment: fixed;
    min-height: 100vh;
}`,
`/* Blueprint Grid Background Canvas */
.blueprint-canvas {
    background-color: var(--bg-primary);
    background-image: 
        linear-gradient(to right, rgba(56, 189, 248, 0.04) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(56, 189, 248, 0.04) 1px, transparent 1px);
    background-size: 36px 36px;
    background-attachment: fixed;
    min-height: 100vh;
    min-height: 100dvh;
}`
);

css = css.replace(
`/* App Layout & Full-Width Rules */
.app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
}`,
`/* App Layout & Full-Width Rules */
.app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    min-height: 100dvh;
    width: 100%;
}`
);

// 3. Rigid widths in tables and heatmaps
css = css.replace(
`.lesson-table {
    width: 100%;
    min-width: 520px;
    border-collapse: separate;`,
`.lesson-table {
    width: 100%;
    min-width: min(520px, 100%);
    border-collapse: separate;`
);

css = css.replace(
`.heatmap-grid {
    display: grid;
    grid-template-columns: repeat(14, minmax(22px, 1fr)) !important;
    min-width: 360px;
    gap: 6px !important;
    box-sizing: border-box;
}`,
`.heatmap-grid {
    display: grid;
    grid-template-columns: repeat(14, minmax(18px, 1fr)) !important;
    min-width: min(100%, 360px);
    width: 100%;
    gap: 6px !important;
    box-sizing: border-box;
}`
);

// 4. Hero Terminal Window Fluid Max Height
css = css.replace(
`.hero-terminal-card,
.hero-terminal-window {
    width: 100%;
    max-width: 480px;
    height: 520px;
    min-height: 520px;
    max-height: 520px;
    background: #090D16;`,
`.hero-terminal-card,
.hero-terminal-window {
    width: 100%;
    max-width: 480px;
    min-height: 380px;
    height: 520px;
    max-height: min(520px, 85dvh);
    background: #090D16;`
);

// 5. Expand Defensive Grid & Flex Overflow
css = css.replace(
`.hero-section > *,
.welcome-features > *,
.phase-cards-grid > *,
.diagram-clusters-grid > *,
.badges-grid > *,
.errors-overview-stats > *,
.errors-stages-grid > *,
.tasks-overview-stats > *,
.tasks-stages-grid > *,
.exam-stats-grid > *,
.exam-lobby-grid > *,
.exam-split-layout > *,
.eco-workspace-grid > *,
.hourglass-split-layout > * {
    min-width: 0;
    max-width: 100%;
    box-sizing: border-box;
}`,
`.hero-section > *,
.welcome-features > *,
.phase-cards-grid > *,
.diagram-clusters-grid > *,
.badges-grid > *,
.errors-overview-stats > *,
.errors-stages-grid > *,
.tasks-overview-stats > *,
.tasks-stages-grid > *,
.exam-stats-grid > *,
.exam-lobby-grid > *,
.exam-split-layout > *,
.eco-workspace-grid > *,
.hourglass-split-layout > *,
.hero-content,
.hero-left-content,
.stage-header-left,
.stage-header-right,
.exam-task-panel,
.exam-code-panel,
.exam-topbar-left,
.exam-topbar-right,
.eco-header-left,
.eco-header-right,
.eco-theory-pane,
.eco-editor-pane,
.badge-content,
.panel-header-info,
.panel-card-header,
.topic-header-left,
.topic-breadcrumb {
    min-width: 0;
    max-width: 100%;
    box-sizing: border-box;
}`
);

// 6. Sidebar nav topic titles truncation
css = css.replace(
`.nav-section-title {
    flex: 1;
    font-size: 0.88rem;
    font-weight: 600;
    color: var(--text-primary);
    line-height: 1.35;
    letter-spacing: -0.01em;
}`,
`.nav-section-title {
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 0.88rem;
    font-weight: 600;
    color: var(--text-primary);
    line-height: 1.35;
    letter-spacing: -0.01em;
}`
);

css = css.replace(
`.nav-topic-title {
    flex: 1;
    line-height: 1.35;
}`,
`.nav-topic-title {
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 1.35;
}`
);

// 7. Add WCAG 44x44px Touch Targets & Global Typography Resilience in the responsive section
const touchAndTypoRules = `
/* --------------------------------------------------------------------------
   WCAG 2.5.5 / 2.5.8 TOUCH TARGETS & ERGONOMIC RESILIENCE
   Ensures interactive controls meet 44x44px minimum target area
   -------------------------------------------------------------------------- */
.stepper-btn {
    min-width: 44px !important;
    min-height: 44px !important;
    width: auto !important;
    height: 44px !important;
    padding: 0 0.5rem !important;
    box-sizing: border-box !important;
    touch-action: manipulation;
}

.history-clear-btn {
    min-height: 44px !important;
    padding: 0.45rem 1rem !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    touch-action: manipulation;
}

.preset-chip {
    min-height: 44px !important;
    padding: 0.45rem 1rem !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    touch-action: manipulation;
}

.terminal-run-chip {
    min-height: 38px !important;
    min-width: 44px !important;
    padding: 0.4rem 0.85rem !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    touch-action: manipulation;
}

.time-pill-btn,
.hg-time-btn {
    min-height: 44px !important;
    padding: 0.5rem 0.95rem !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    touch-action: manipulation;
}

.stepper-arrow-btn,
.hg-step-btn {
    min-height: 44px !important;
    min-width: 44px !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    touch-action: manipulation;
}

.mobile-js-btn {
    min-width: 40px !important;
    height: 40px !important;
    padding: 0 8px !important;
    touch-action: manipulation;
}

/* Global Typography Overflow Resilience & Word Wrapping */
h1, h2, h3, h4, h5, h6,
.hero-title,
.welcome-title,
.stage-main-title,
.card-title,
.exam-task-title,
.panel-card-title,
.score-info h4 {
    overflow-wrap: break-word;
    word-break: normal;
}

p, li, blockquote, label {
    overflow-wrap: break-word;
}

/* GPU Composite Optimization on Keyframes & Ambient Mesh */
body::before,
body::after,
.welcome-emoji,
.streak-flame-container .flame-core,
.pulse-dot,
.engine-dot {
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    transform-style: preserve-3d;
}
`;

css = css.replace(
`/* --------------------------------------------------------------------------
   6. TACTILE TOUCH FEEDBACK & COARSE POINTER POLISH
   -------------------------------------------------------------------------- */
@media (hover: none) and (pointer: coarse) {
    button:hover,
    .btn:hover,
    .nav-pill-btn:hover,
    .roadmap-card:hover,
    .badge-card:hover,
    .feature-card:hover {
        transform: none !important;
        box-shadow: inherit !important;
    }
}`,
`/* --------------------------------------------------------------------------
   6. TACTILE TOUCH FEEDBACK & COARSE POINTER POLISH
   -------------------------------------------------------------------------- */
${touchAndTypoRules}

@media (hover: none) and (pointer: coarse) {
    *:hover {
        -webkit-tap-highlight-color: transparent;
    }
    button:hover,
    .btn:hover,
    .nav-pill-btn:hover,
    .roadmap-card:hover,
    .badge-card:hover,
    .feature-card:hover,
    .nav-section:hover,
    .nav-section-header:hover,
    .nav-topic:hover,
    .panel-nav-btn:hover,
    .exam-pill-btn:hover,
    .topic-nav-btn:hover,
    .exercise-hint-btn:hover,
    .exercise-submit-btn:hover,
    .editor-btn:hover,
    .qb-card:hover,
    .eco-node-btn:hover,
    .cluster-card:hover,
    .streak-flame-container:hover,
    .hero-btn:hover,
    .stepper-btn:hover,
    .top-nav-reset-btn:hover,
    .mobile-menu-toggle:hover {
        transform: none !important;
        box-shadow: inherit !important;
        filter: none !important;
    }
}`
);

// Also add mobile hero terminal card responsive fluid rules into @media (max-width: 768px)
const terminalMobileFix = `
    .hero-terminal-card,
    .hero-terminal-window {
        max-width: 100% !important;
        height: auto !important;
        min-height: auto !important;
        max-height: none !important;
    }

    .terminal-body,
    .terminal-code-body {
        height: auto !important;
        min-height: 200px !important;
        max-height: 320px !important;
    }

    .terminal-output-pane,
    .terminal-console-drawer {
        height: auto !important;
        min-height: 120px !important;
        max-height: 200px !important;
    }
`;

css = css.replace(
`    .toast {
        max-width: 100% !important;
        width: 100% !important;
    }
}`,
`    .toast {
        max-width: 100% !important;
        width: 100% !important;
    }
${terminalMobileFix}
}`
);

fs.writeFileSync('./style.css', css, 'utf8');
console.log('Successfully updated style.css with refactored architectural fixes!');
