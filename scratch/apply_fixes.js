const fs = require('fs');

// 1. Update index.html
let html = fs.readFileSync('index.html', 'utf8');

// A. Insert <iframe id="code-runner-frame" sandbox="allow-scripts"> before </body>
const iframeSnippet = `    <!-- Təcrid Olunmuş Təhlükəsiz Kod İcraçısı Iframe Sandbox (YALNIZ allow-scripts, allow-same-origin QƏTİYYƏN YOXDUR) -->\n    <iframe id="code-runner-frame" sandbox="allow-scripts" class="hidden" style="display:none;" title="JSÖyrən Sandboxed Code Runner" aria-hidden="true"></iframe>\n`;

if (!html.includes('id="code-runner-frame"')) {
    html = html.replace('</body>', iframeSnippet + '</body>');
    console.log('Added sandboxed iframe to index.html');
}

// B. Insert <script src="simulator.js"></script> before <script src="app.js"></script>
const simScript = '    <!-- Code Runner Sandbox Simulator -->\n    <script src="simulator.js"></script>\n';
if (!html.includes('src="simulator.js"')) {
    html = html.replace('    <!-- App Logic Engine -->\n    <script src="app.js"></script>', simScript + '    <!-- App Logic Engine -->\n    <script src="app.js"></script>');
    console.log('Added simulator.js script tag to index.html');
}

fs.writeFileSync('index.html', html, 'utf8');

// 2. Update sw.js
let sw = fs.readFileSync('sw.js', 'utf8');
if (!sw.includes("'./simulator.js'")) {
    sw = sw.replace("'./data_hourglass_challenges.js',", "'./data_hourglass_challenges.js',\n    './simulator.js',");
    fs.writeFileSync('sw.js', sw, 'utf8');
    console.log('Added ./simulator.js to sw.js PRECACHE_ASSETS');
}

// 3. Update app.js
let app = fs.readFileSync('app.js', 'utf8');

// A. Add sanitizeCodeForExecution near top of app.js
const sanitizerCode = `    // ---- Pre-Execution Unicode Normalizer ----
    function sanitizeCodeForExecution(rawCode) {
        if (typeof rawCode !== 'string') return '';
        return rawCode
            // 1. Sıfır enli və görünməz idarəetmə simvollarının silinməsi
            .replace(/[\\u200B-\\u200D\\uFEFF\\u200E\\u200F]/g, '')
            // 2. Qırılmayan və xüsusi tipoqrafik boşluqların standart boşluğa çevrilməsi
            .replace(/[\\u00A0\\u202F\\u2000-\\u200A]/g, ' ')
            // 3. Tipoqrafik liqatura və riyazi simvolların ASCII JS tokenlərinə çevrilməsi
            .replace(/\\u21D2/g, '=>') // ⇒
            .replace(/\\u2A7E/g, '>=') // ⩾
            .replace(/\\u2265/g, '>=') // ≥
            .replace(/\\u2A7D/g, '<=') // ⩽
            .replace(/\\u2264/g, '<=') // ≤
            .replace(/\\u2260/g, '!==') // ≠
            // 4. Tipoqrafik qoşa dırnaqların standart " dırnağına çevrilməsi
            .replace(/[\\u201C\\u201D\\u201E\\u201F\\u00AB\\u00BB]/g, '"')
            // 5. Tipoqrafik tək dırnaqların standart ' dırnağına çevrilməsi
            .replace(/[\\u2018\\u2019\\u201A\\u201B\\u2032]/g, "'");
    }
`;

if (!app.includes('function sanitizeCodeForExecution')) {
    const targetAnchor = '    // ---- Təhlükəsiz Brauzer Yaddaşı (Storage) Qoruyucusu ----';
    app = app.replace(targetAnchor, sanitizerCode + '\n' + targetAnchor);
    console.log('Added sanitizeCodeForExecution to app.js');
}

// B. Refactor renderNav in app.js
const oldRenderNav = `    // ---- Navigation Rendering ----
    function renderNav() {
        // Çoxsəviyyəli konteyner axtarışı (Desktop, Mobile və Dinamik DOM üçün)
        let nav = document.getElementById('sidebar-nav') ||
                  document.querySelector('.sidebar-nav') ||
                  document.querySelector('#sidebar nav') ||
                  document.getElementById('mobile-sidebar-nav');

        // Özünübərpa edən fallback: Əgər #sidebar mövcuddursa, amma nav yoxdursa, dinamik yaradılır
        if (!nav) {
            const sidebar = document.getElementById('sidebar');
            if (sidebar) {
                nav = document.createElement('nav');
                nav.className = 'sidebar-nav';
                nav.id = 'sidebar-nav';
                sidebar.appendChild(nav);
            }
        }

        // Qoruyucu DOM yoxlaması: nav konteyneri tapılmadıqda heç bir xəta törətmədən təhlükəsiz çıxış
        if (!nav) {
            console.warn('[renderNav] Navigasiya konteyneri (#sidebar-nav) tapılmadı. İcra təhlükəsiz dayandırıldı.');
            return;
        }

        // Təhlükəsiz təmizləmə
        nav.innerHTML = '';

        if (!Array.isArray(CURRICULUM) || CURRICULUM.length === 0) {
            return;
        }

        const completedSet = (state && state.completedTopics instanceof Set) 
            ? state.completedTopics 
            : new Set();

        CURRICULUM.forEach(section => {
            if (!section || !Array.isArray(section.topics)) return;

            const sectionEl = document.createElement('div');
            sectionEl.className = 'nav-section';
            sectionEl.dataset.sectionId = section.id || '';

            // Aktiv mövzu yoxlaması
            const hasActive = section.topics.some(t => t && t.id === state.currentTopicId);
            if (hasActive) sectionEl.classList.add('expanded');

            // Bölmə üzrə irəliləyiş
            const completedInSection = section.topics.filter(t => t && completedSet.has(t.id)).length;
            const totalInSection = section.topics.length;

            const header = document.createElement('div');
            header.className = 'nav-section-header';
            header.innerHTML = \`
                <span class="nav-section-icon">\${section.icon || '📌'}</span>
                <span class="nav-section-title">\${section.title || ''}</span>
                <span class="nav-section-progress">\${completedInSection}/\${totalInSection}</span>
                <span class="nav-section-arrow">▶</span>
            \`;
            header.addEventListener('click', () => {
                cancelSidebarCollapseTimer();
                sectionEl.classList.toggle('expanded');
            });

            const topicsList = document.createElement('div');
            topicsList.className = 'nav-topics';

            section.topics.forEach(topic => {
                if (!topic) return;

                const topicEl = document.createElement('div');
                topicEl.className = 'nav-topic';
                if (topic.id === state.currentTopicId) topicEl.classList.add('active');
                if (completedSet.has(topic.id)) topicEl.classList.add('completed');

                const statusIcon = completedSet.has(topic.id) ? '✓' : '';
                topicEl.innerHTML = \`
                    <span class="nav-topic-status">\${statusIcon}</span>
                    <span class="nav-topic-title">\${topic.title || ''}</span>
                \`;
                topicEl.addEventListener('click', () => {
                    cancelSidebarCollapseTimer();
                    navigateToTopic(topic.id);
                    closeMobileSidebar();
                });
                topicsList.appendChild(topicEl);
            });

            sectionEl.appendChild(header);
            sectionEl.appendChild(topicsList);
            nav.appendChild(sectionEl);
        });
    }`;

const newRenderNav = `    // ---- Navigation Rendering ----
    function renderNav() {
        // Çoxsəviyyəli və çoxlu hədəfli konteyner axtarışı (Desktop və Mobile üçün)
        let navTargets = document.querySelectorAll('#sidebar-nav, .sidebar-nav, #mobile-sidebar-nav');

        // Özünübərpa edən fallback: Əgər #sidebar mövcuddursa, amma nav yoxdursa, dinamik yaradılır
        if (!navTargets || navTargets.length === 0) {
            const sidebar = document.getElementById('sidebar');
            if (sidebar) {
                const createdNav = document.createElement('nav');
                createdNav.className = 'sidebar-nav';
                createdNav.id = 'sidebar-nav';
                sidebar.appendChild(createdNav);
                navTargets = [createdNav];
            } else {
                console.warn('[renderNav] Navigasiya konteyneri tapılmadı. İcra təhlükəsiz dayandırıldı.');
                return;
            }
        }

        const completedSet = (state && state.completedTopics instanceof Set) 
            ? state.completedTopics 
            : new Set();

        const hasCurriculum = Array.isArray(CURRICULUM) && CURRICULUM.length > 0;

        navTargets.forEach(nav => {
            if (!nav) return;
            nav.innerHTML = '';

            if (!hasCurriculum) return;

            CURRICULUM.forEach(section => {
                if (!section || !Array.isArray(section.topics)) return;

                const sectionEl = document.createElement('div');
                sectionEl.className = 'nav-section';
                sectionEl.dataset.sectionId = section.id || '';

                // Aktiv mövzu yoxlaması
                const hasActive = section.topics.some(t => t && t.id === state.currentTopicId);
                if (hasActive) sectionEl.classList.add('expanded');

                // Bölmə üzrə irəliləyiş
                const completedInSection = section.topics.filter(t => t && completedSet.has(t.id)).length;
                const totalInSection = section.topics.length;

                const header = document.createElement('div');
                header.className = 'nav-section-header';
                header.innerHTML = \`
                    <span class="nav-section-icon">\${section.icon || '📌'}</span>
                    <span class="nav-section-title">\${section.title || ''}</span>
                    <span class="nav-section-progress">\${completedInSection}/\${totalInSection}</span>
                    <span class="nav-section-arrow">▶</span>
                \`;
                header.addEventListener('click', () => {
                    cancelSidebarCollapseTimer();
                    sectionEl.classList.toggle('expanded');
                });

                const topicsList = document.createElement('div');
                topicsList.className = 'nav-topics';

                section.topics.forEach(topic => {
                    if (!topic) return;

                    const topicEl = document.createElement('div');
                    topicEl.className = 'nav-topic';
                    if (topic.id === state.currentTopicId) topicEl.classList.add('active');
                    if (completedSet.has(topic.id)) topicEl.classList.add('completed');

                    const statusIcon = completedSet.has(topic.id) ? '✓' : '';
                    topicEl.innerHTML = \`
                        <span class="nav-topic-status">\${statusIcon}</span>
                        <span class="nav-topic-title">\${topic.title || ''}</span>
                    \`;
                    topicEl.addEventListener('click', () => {
                        cancelSidebarCollapseTimer();
                        navigateToTopic(topic.id);
                        closeMobileSidebar();
                    });
                    topicsList.appendChild(topicEl);
                });

                sectionEl.appendChild(header);
                sectionEl.appendChild(topicsList);
                nav.appendChild(sectionEl);
            });
        });
    }`;

if (app.includes(oldRenderNav)) {
    app = app.replace(oldRenderNav, newRenderNav);
    console.log('Successfully refactored renderNav in app.js');
} else {
    console.log('oldRenderNav pattern not matched exactly in app.js');
}

// C. Guard renderTheory, renderExercises, renderBugFixes
const oldRenderTheory = `    function renderTheory(topic) {
        const container = document.getElementById('theory-content');
        container.innerHTML = topic.theory || '<p>Nəzəriyyə hazırlanır...</p>';

        // Render code examples
        const examplesContainer = document.getElementById('code-examples');
        examplesContainer.innerHTML = '';`;

const newRenderTheory = `    function renderTheory(topic) {
        const container = document.getElementById('theory-content');
        if (container) {
            container.innerHTML = topic.theory || '<p>Nəzəriyyə hazırlanır...</p>';
        }

        // Render code examples
        const examplesContainer = document.getElementById('code-examples');
        if (examplesContainer) {
            examplesContainer.innerHTML = '';`;

if (app.includes(oldRenderTheory)) {
    app = app.replace(oldRenderTheory, newRenderTheory);
    // Also add the closing brace for if (examplesContainer)
    const oldExEnd = `                examplesContainer.appendChild(exEl);
            });
        }
    }`;
    const newExEnd = `                examplesContainer.appendChild(exEl);
            });
        }
    }
}`;
    if (app.includes(oldExEnd)) {
        app = app.replace(oldExEnd, newExEnd);
        console.log('Successfully guarded renderTheory in app.js');
    }
}

// Guard exercises container
const oldExCheck = `        if (!topic.exercises || topic.exercises.length === 0) {
            container.innerHTML = '<p style="color:var(--text-secondary); text-align:center; padding:2rem;">Bu mövzu üçün tapşırıqlar hazırlanır...</p>';
            return;
        }`;

const newExCheck = `        if (!topic.exercises || topic.exercises.length === 0) {
            if (container) container.innerHTML = '<p style="color:var(--text-secondary); text-align:center; padding:2rem;">Bu mövzu üçün tapşırıqlar hazırlanır...</p>';
            return;
        }`;

if (app.includes(oldExCheck)) {
    app = app.replace(oldExCheck, newExCheck);
    console.log('Guarded exercises container in app.js');
}

// Guard bugfix container
const oldBfCheck = `        if (bugFixList.length === 0) {
            container.innerHTML = '<p style="color:var(--text-secondary); text-align:center; padding:2rem;">Bu mövzu üçün xəta düzəltmə testləri hazırlanır...</p>';
            return;
        }`;

const newBfCheck = `        if (bugFixList.length === 0) {
            if (container) container.innerHTML = '<p style="color:var(--text-secondary); text-align:center; padding:2rem;">Bu mövzu üçün xəta düzəltmə testləri hazırlanır...</p>';
            return;
        }`;

if (app.includes(oldBfCheck)) {
    app = app.replace(oldBfCheck, newBfCheck);
    console.log('Guarded bugfix container in app.js');
}

// D. Pre-Execution Unicode Sanitization in runJavaScript
const oldRunJS = `    function runJavaScript(code, timeoutMs = 2500) {
        return new Promise((resolve) => {`;

const newRunJS = `    function runJavaScript(code, timeoutMs = 2500) {
        // Hər hansı icradan öncə tipoqrafik Unicode simvolları təmizlənir
        code = (typeof sanitizeCodeForExecution === 'function')
            ? sanitizeCodeForExecution(code)
            : (typeof Simulator !== 'undefined' && typeof Simulator.sanitizeCodeForExecution === 'function')
                ? Simulator.sanitizeCodeForExecution(code)
                : code;

        return new Promise((resolve) => {`;

if (app.includes(oldRunJS)) {
    app = app.replace(oldRunJS, newRunJS);
    console.log('Integrated sanitizeCodeForExecution into runJavaScript in app.js');
}

// E. Refactor runPlayground in app.js to use Simulator.run
const oldRunPlayground = `        const output = document.getElementById('sandbox-output');
        if (!state.sandboxEditor) {
            if (runBtn) runBtn.disabled = false;
            return;
        }
        const code = state.sandboxEditor.getValue();

        output.innerHTML = '<span class="running-indicator"><span class="running-dots"><span></span><span></span><span></span></span> İcra olunur...</span>';

        try {
            const result = await runJavaScript(code);
            if (result && result.error) {
                output.innerHTML = \`<span class="output-error">\${escapeHtml(result.error)}</span>\`;
            } else {
                output.textContent = (result && result.output) || '(Nəticə yoxdur)';
            }
        } catch (fatalErr) {`;

const newRunPlayground = `        const output = document.getElementById('sandbox-output');
        if (!state.sandboxEditor) {
            if (runBtn) runBtn.disabled = false;
            return;
        }
        const rawCode = state.sandboxEditor.getValue();
        const code = (typeof sanitizeCodeForExecution === 'function')
            ? sanitizeCodeForExecution(rawCode)
            : rawCode;

        output.innerHTML = '<span class="running-indicator"><span class="running-dots"><span></span><span></span><span></span></span> İcra olunur...</span>';

        try {
            // Təcrid olunmuş Sandboxed Iframe Simulator ilə təhlükəsiz icra
            let result;
            if (typeof Simulator !== 'undefined' && typeof Simulator.run === 'function') {
                result = await Simulator.run(code, 2500);
            } else {
                result = await runJavaScript(code);
            }
            if (result && result.error) {
                output.innerHTML = \`<span class="output-error">\${escapeHtml(result.error)}</span>\`;
            } else {
                output.textContent = (result && result.output) || '(Nəticə yoxdur)';
            }
        } catch (fatalErr) {`;

if (app.includes(oldRunPlayground)) {
    app = app.replace(oldRunPlayground, newRunPlayground);
    console.log('Integrated Simulator into runPlayground in app.js');
}

// F. Window exports
if (!app.includes('window.sanitizeCodeForExecution = sanitizeCodeForExecution;')) {
    app = app.replace(
        'window.appState = state;',
        'window.sanitizeCodeForExecution = sanitizeCodeForExecution;\n        window.appState = state;'
    );
    console.log('Exported sanitizeCodeForExecution to window in app.js');
}

fs.writeFileSync('app.js', app, 'utf8');
console.log('All changes written to app.js');
