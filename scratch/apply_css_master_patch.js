const fs = require('fs');

let css = fs.readFileSync('style.css', 'utf-8');

// 1. Update :root with responsive tokens if not present
if (!css.includes('--header-height-mobile:')) {
  css = css.replace(
    '--touch-target-min: 44px;',
    '--touch-target-min: 44px;\n    --header-height-mobile: 58px;\n    --sidebar-mobile-width: min(320px, 86vw);\n    --container-max-width: 1320px;'
  );
  console.log('Added responsive tokens to :root');
}

// 2. Hardware-accelerated mobile-nav-drawer
const oldDrawer = `.mobile-nav-drawer {
    position: fixed;
    top: 0;
    right: -360px;
    width: min(320px, 86vw);
    height: 100%;
    height: 100dvh;
    max-height: 100dvh;
    background: #090D16;
    border-left: 1px solid rgba(255, 255, 255, 0.12);
    z-index: 500;
    display: flex;
    flex-direction: column;
    padding: max(1.25rem, var(--sat)) max(1.25rem, var(--sar)) max(1.25rem, var(--sab)) 1.25rem;
    transition: right 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: -10px 0 40px rgba(0, 0, 0, 0.6);
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    box-sizing: border-box;
}

.mobile-nav-drawer.open {
    right: 0;
}`;

const newDrawer = `.mobile-nav-drawer {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: var(--sidebar-mobile-width, min(320px, 86vw));
    max-width: 360px;
    height: 100vh;
    height: 100dvh;
    max-height: 100dvh;
    background: #090D16;
    border-left: 1px solid rgba(255, 255, 255, 0.12);
    z-index: 500;
    display: flex;
    flex-direction: column;
    padding: max(1.25rem, var(--sat)) max(1.25rem, var(--sar)) max(1.25rem, var(--sab)) max(1.25rem, var(--sal));
    transform: translateX(100%);
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: -12px 0 40px rgba(0, 0, 0, 0.7);
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    box-sizing: border-box;
    visibility: hidden;
}

.mobile-nav-drawer.open {
    transform: translateX(0);
    visibility: visible;
}`;

if (css.includes('right: -360px;')) {
  css = css.replace(oldDrawer, newDrawer);
  console.log('Replaced mobile-nav-drawer with hardware-accelerated transform');
}

// 3. Replace lines 9062 to 9538 with Master Responsive Architecture
const targetStart = `/* ==========================================================================
   MASTER MOBILE RESPONSIVE ARCHITECTURE (320px - 430px up to Tablet)
   Specialized Refactor: Zero-horizontal-scroll, Fluid Typography, Dynamic Viewports,
   44x44px Touch Targets, and Ergonomic Mobile Reach.
   ========================================================================== */`;

const startIdx = css.indexOf(targetStart);
const endMarker = `.btn-loading {`;
const endIdx = css.indexOf(endMarker, startIdx);

if (startIdx !== -1 && endIdx !== -1) {
  const masterResponsiveCSS = `/* ==========================================================================
   MASTER MOBILE RESPONSIVE ARCHITECTURE (320px - 480px up to Tablet & Desktop)
   Consolidated Refactor: Zero-horizontal-scroll, Fluid Typography, Dynamic Viewports,
   44x44px Touch Targets, Ergonomic Mobile Bottom Sheets & Defensive Overflows.
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. DEFENSIVE GRID OVERFLOW & ROOT SAFEGUARDS
   -------------------------------------------------------------------------- */
.hero-section > *,
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
}

/* --------------------------------------------------------------------------
   2. DATA TABLES & HEATMAPS (Momentum Scroll & Stacked Card Mode)
   -------------------------------------------------------------------------- */
.lesson-table-wrapper {
    width: 100%;
    margin: 1.5rem 0;
    border-radius: var(--radius-md);
    border: 1px solid var(--border-primary);
    background: var(--bg-card);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    box-shadow: var(--shadow-sm);
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    position: relative;
    scrollbar-width: thin;
    scrollbar-color: rgba(6, 182, 212, 0.3) transparent;
    background-image: 
        linear-gradient(to right, rgba(9, 13, 22, 0.9), rgba(9, 13, 22, 0)),
        linear-gradient(to left, rgba(9, 13, 22, 0.9), rgba(9, 13, 22, 0));
    background-position: left center, right center;
    background-repeat: no-repeat;
    background-size: 18px 100%, 18px 100%;
    background-attachment: local, local;
}

[data-theme="light"] .lesson-table-wrapper {
    background: rgba(255, 255, 255, 0.9);
    border-color: rgba(226, 232, 240, 0.9);
    background-image: 
        linear-gradient(to right, rgba(248, 250, 252, 0.9), rgba(248, 250, 252, 0)),
        linear-gradient(to left, rgba(248, 250, 252, 0.9), rgba(248, 250, 252, 0));
}

.lesson-table {
    width: 100%;
    min-width: 520px;
    border-collapse: separate;
    border-spacing: 0;
    text-align: left;
    font-size: 0.92rem;
}

.lesson-table thead th {
    position: sticky;
    top: 0;
    z-index: 2;
    background: rgba(18, 28, 50, 0.95);
    backdrop-filter: blur(10px);
    padding: 12px 16px;
    font-weight: 700;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-size: 0.78rem;
    border-bottom: 1px solid var(--border-primary);
    border-right: 1px solid var(--border-secondary);
    white-space: nowrap;
}

.lesson-table thead th:last-child {
    border-right: none;
}

[data-theme="light"] .lesson-table thead th {
    background: rgba(241, 245, 249, 0.95);
    color: #475569;
    border-bottom-color: #CBD5E1;
}

.lesson-table td {
    padding: 12px 16px;
    color: var(--text-primary);
    vertical-align: middle;
    border-bottom: 1px solid var(--border-secondary);
    border-right: 1px solid var(--border-secondary);
}

.lesson-table td:last-child {
    border-right: none;
}

.lesson-table tbody tr:last-child td {
    border-bottom: none;
}

@media (max-width: 640px) {
    .lesson-table-wrapper {
        background-image: none !important;
        overflow-x: visible !important;
        border: none !important;
        background: transparent !important;
        box-shadow: none !important;
        margin: 1.25rem 0 !important;
    }

    .lesson-table {
        min-width: 0 !important;
        width: 100% !important;
        display: block !important;
        border: none !important;
    }

    .lesson-table thead {
        display: none !important;
    }

    .lesson-table tbody {
        display: flex !important;
        flex-direction: column !important;
        gap: 0.85rem !important;
        width: 100% !important;
    }

    .lesson-table tbody tr {
        display: flex !important;
        flex-direction: column !important;
        background: var(--bg-card) !important;
        border: 1px solid var(--border-primary) !important;
        border-radius: var(--radius-md) !important;
        padding: 0.75rem 1rem !important;
        box-shadow: var(--shadow-sm) !important;
        width: 100% !important;
        box-sizing: border-box !important;
    }

    .lesson-table td {
        display: flex !important;
        justify-content: space-between !important;
        align-items: center !important;
        padding: 0.65rem 0 !important;
        border-right: none !important;
        border-bottom: 1px solid rgba(255, 255, 255, 0.06) !important;
        font-size: 0.88rem !important;
        gap: 0.75rem !important;
        text-align: right !important;
    }

    [data-theme="light"] .lesson-table td {
        border-bottom-color: rgba(0, 0, 0, 0.06) !important;
    }

    .lesson-table td:last-child {
        border-bottom: none !important;
    }

    .lesson-table td[data-label]::before {
        content: attr(data-label);
        font-weight: 600;
        color: var(--text-secondary);
        font-size: 0.78rem;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        text-align: left;
        flex-shrink: 0;
    }
}

.heatmap-wrapper {
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    padding-bottom: 0.65rem;
    scrollbar-width: thin;
    scrollbar-color: rgba(6, 182, 212, 0.3) transparent;
}

.heatmap-grid {
    display: grid;
    grid-template-columns: repeat(14, minmax(22px, 1fr)) !important;
    min-width: 360px;
    gap: 6px !important;
    box-sizing: border-box;
}

/* --------------------------------------------------------------------------
   3. FORMS, SEARCH FIELDS & SELECTION CONTROLS (Anti-Zoom & 44px targets)
   -------------------------------------------------------------------------- */
input,
select,
textarea,
.panel-search-input,
.panel-select,
.exam-search-input,
.qb-search-input,
#errors-panel-view .panel-search-input,
#errors-panel-view .panel-select,
#tasks-panel-view .panel-search-input,
#tasks-panel-view .panel-select {
    font-size: 16px !important;
    line-height: 1.5 !important;
}

input:not([type="checkbox"]):not([type="radio"]),
select,
textarea,
.panel-search-input,
.panel-select,
.exam-search-input,
.qb-search-input {
    min-height: var(--touch-target-min, 44px) !important;
    padding: 0.65rem 0.95rem !important;
    border-radius: var(--radius-md) !important;
    box-sizing: border-box !important;
    touch-action: manipulation;
}

/* --------------------------------------------------------------------------
   4. MODALS & DIALOGS (Bottom-Sheet & Full-Screen Architecture)
   -------------------------------------------------------------------------- */
dialog:modal {
    overscroll-behavior: contain;
    outline: none;
}

dialog::backdrop {
    overflow: hidden;
    overscroll-behavior: contain;
}

@media (max-width: 768px) {
    dialog.exam-modal:not(.question-bank-modal):not(.result-modal),
    dialog.diagram-modal,
    dialog.hourglass-result-modal {
        position: fixed !important;
        inset: auto 0 0 0 !important;
        margin: 0 !important;
        width: 100vw !important;
        max-width: 100vw !important;
        max-height: 86vh !important;
        max-height: 86dvh !important;
        border-radius: 22px 22px 0 0 !important;
        border-left: none !important;
        border-right: none !important;
        border-bottom: none !important;
        box-shadow: 0 -12px 40px rgba(0, 0, 0, 0.75) !important;
        animation: bottomSheetIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
        padding-bottom: max(1rem, var(--sab)) !important;
    }

    @keyframes bottomSheetIn {
        from { transform: translateY(100%); }
        to { transform: translateY(0); }
    }

    dialog.exam-modal:not(.question-bank-modal):not(.result-modal) .modal-dialog-content::before,
    dialog.diagram-modal .diagram-modal-card::before,
    dialog.hourglass-result-modal .hourglass-result-card::before {
        content: '';
        display: block;
        width: 38px;
        height: 4.5px;
        border-radius: var(--radius-full);
        background: rgba(255, 255, 255, 0.25);
        margin: 0.55rem auto 0.65rem auto;
        flex-shrink: 0;
    }

    .modal-footer {
        flex-direction: column-reverse !important;
        align-items: stretch !important;
        gap: 0.65rem !important;
    }

    .modal-footer .modal-btn {
        width: 100% !important;
        min-height: 48px !important;
        justify-content: center !important;
    }

    dialog.exam-modal.question-bank-modal,
    dialog.exam-modal.result-modal {
        position: fixed !important;
        inset: 0 !important;
        margin: 0 !important;
        width: 100vw !important;
        max-width: 100vw !important;
        height: 100vh !important;
        height: 100dvh !important;
        max-height: 100dvh !important;
        border-radius: 0 !important;
        border: none !important;
    }

    .qb-modal-header {
        padding: max(0.75rem, var(--sat)) 1.15rem 0.75rem 1.15rem !important;
    }

    .qb-body {
        padding: 1rem 1.15rem !important;
        max-height: calc(100dvh - 170px) !important;
    }
}

/* --------------------------------------------------------------------------
   5. RESPONSIVE BREAKPOINT ADAPTATIONS (max-width: 992px, 768px, 640px, 380px)
   -------------------------------------------------------------------------- */

@media (max-width: 992px) {
    .navbar-center {
        display: none !important;
    }

    .mobile-menu-toggle {
        display: flex !important;
    }

    body.view-topic .sidebar {
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        bottom: 0 !important;
        height: 100vh !important;
        height: 100dvh !important;
        max-height: 100dvh !important;
        width: var(--sidebar-mobile-width, min(320px, 86vw)) !important;
        max-width: 350px !important;
        z-index: 450 !important;
        transform: translateX(-100%);
        transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        box-shadow: 10px 0 35px rgba(0, 0, 0, 0.65) !important;
        padding-top: max(0.75rem, var(--sat));
        padding-bottom: max(1.5rem, var(--sab));
        padding-left: max(0.5rem, var(--sal));
        visibility: hidden;
    }

    body.view-topic .sidebar.open {
        transform: translateX(0);
        visibility: visible;
    }

    body.view-topic .main-content {
        margin-left: 0 !important;
        width: 100% !important;
        max-width: 100% !important;
        padding-top: 1rem !important;
    }

    .hero-section {
        grid-template-columns: 1fr !important;
        gap: 2.25rem !important;
    }

    .bootcamp-container,
    #errors-panel-view,
    #tasks-panel-view {
        padding-left: max(1.25rem, var(--sal));
        padding-right: max(1.25rem, var(--sar));
        padding-bottom: max(3.5rem, var(--sab));
    }
}

@media (max-width: 768px) {
    .top-navbar {
        min-height: var(--header-height-mobile, 58px);
        padding: max(0.45rem, var(--sat)) max(0.85rem, var(--sar)) 0.45rem max(0.85rem, var(--sal));
        gap: 0.5rem;
    }

    .brand-badge {
        padding: 0.35rem 0.75rem;
        min-height: 38px;
        gap: 0.45rem;
    }

    .brand-text {
        font-size: 0.86rem;
    }

    .engine-badge {
        display: none !important;
    }

    .top-nav-reset-btn,
    .mobile-menu-toggle {
        width: 42px !important;
        height: 42px !important;
        min-width: 42px !important;
        min-height: 42px !important;
    }

    .main-content {
        padding: clamp(0.85rem, 3vw, 1.25rem) clamp(0.75rem, 2.5vw, 1rem);
    }

    .panel-filter-bar,
    #errors-panel-view .panel-filter-bar,
    #tasks-panel-view .panel-filter-bar {
        flex-direction: column !important;
        align-items: stretch !important;
        gap: 0.85rem !important;
        padding: 1rem !important;
    }

    .panel-filter-bar .filter-group,
    #errors-panel-view .filter-group,
    #tasks-panel-view .filter-group {
        width: 100% !important;
        flex-direction: column !important;
        align-items: stretch !important;
        gap: 0.4rem !important;
    }

    .panel-filter-bar .filter-search,
    #errors-panel-view .filter-search,
    #tasks-panel-view .filter-search {
        width: 100% !important;
        min-width: 0 !important;
        flex: 1 1 100% !important;
    }

    .panel-search-input,
    .panel-select {
        width: 100% !important;
    }

    .phase-cards-grid,
    .diagram-clusters-grid,
    .badges-grid,
    .errors-stages-grid,
    .tasks-stages-grid {
        grid-template-columns: 1fr !important;
        gap: 1rem !important;
    }

    .errors-overview-stats,
    .tasks-overview-stats,
    .exam-stats-grid {
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 0.75rem !important;
    }

    .exam-split-layout {
        grid-template-columns: 1fr !important;
        height: auto !important;
        min-height: auto !important;
        gap: 1rem !important;
    }

    .exam-task-panel {
        height: auto !important;
        max-height: 420px !important;
    }

    .exam-code-panel {
        height: auto !important;
        min-height: 460px !important;
    }

    .exam-editor-container,
    .exam-editor-container #exam-editor,
    .exam-editor-container .CodeMirror {
        position: relative !important;
        height: 280px !important;
    }

    .toast-container {
        left: max(0.85rem, var(--sal));
        right: max(0.85rem, var(--sar));
        bottom: max(1rem, var(--sab));
        align-items: stretch;
    }

    .toast {
        max-width: 100% !important;
        width: 100% !important;
    }
}

@media (max-width: 640px) {
    .welcome-features {
        grid-template-columns: 1fr !important;
        gap: 1rem !important;
    }

    .exercise-actions {
        flex-direction: column !important;
        align-items: stretch !important;
        gap: 0.65rem !important;
    }

    .exercise-action-btns {
        display: flex !important;
        width: 100% !important;
        gap: 0.5rem !important;
    }

    .exercise-hint-btn,
    .exercise-reset-btn {
        flex: 1 !important;
        justify-content: center !important;
    }

    .exercise-submit-btn {
        width: 100% !important;
        justify-content: center !important;
    }
}

@media (max-width: 480px) {
    .errors-overview-stats,
    .tasks-overview-stats,
    .exam-pills-selector,
    .exam-mode-selector {
        grid-template-columns: 1fr !important;
    }

    .exam-mode-selector button[data-mode="all"] {
        grid-column: 1 !important;
    }
}

@media (max-width: 380px) {
    .top-navbar {
        padding: max(0.35rem, var(--sat)) 0.5rem 0.35rem 0.5rem !important;
    }

    .brand-badge {
        padding: 0.3rem 0.55rem !important;
        gap: 0.35rem !important;
    }

    .brand-text {
        font-size: 0.78rem !important;
    }

    .top-nav-reset-btn,
    .mobile-menu-toggle {
        width: 38px !important;
        height: 38px !important;
        min-width: 38px !important;
        min-height: 38px !important;
        padding: 8px !important;
    }

    .exam-stats-grid {
        grid-template-columns: 1fr !important;
    }
}

/* --------------------------------------------------------------------------
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
}

button:active,
.btn:active,
.nav-pill-btn:active,
.hero-btn:active,
.exercise-submit-btn:active,
.modal-btn:active,
.stepper-btn:active,
.top-nav-reset-btn:active,
.mobile-menu-toggle:active,
.brand-badge:active,
.roadmap-card:active,
.diagram-modal-close:active,
.qb-close-btn:active,
.mobile-drawer-close:active {
    transform: scale(0.96) !important;
    transition: transform 0.08s ease-out !important;
}

`;

  css = css.substring(0, startIdx) + masterResponsiveCSS + css.substring(endIdx);
  fs.writeFileSync('style.css', css, 'utf-8');
  console.log('Successfully updated style.css with Master Responsive Architecture!');
} else {
  console.error('Target range not found in style.css');
}
