const path = require('path');
const eslintPath = path.join(process.env.LOCALAPPDATA, 'npm-cache', '_npx', '515228b7c8d004a2', 'node_modules', 'eslint');
const { ESLint } = require(eslintPath);

async function main() {
    const eslint = new ESLint({
        overrideConfigFile: true,
        overrideConfig: [
            {
                languageOptions: {
                    ecmaVersion: 'latest',
                    sourceType: 'script',
                    globals: {
                        window: 'readonly',
                        document: 'readonly',
                        localStorage: 'readonly',
                        sessionStorage: 'readonly',
                        navigator: 'readonly',
                        location: 'readonly',
                        history: 'readonly',
                        performance: 'readonly',
                        setTimeout: 'readonly',
                        clearTimeout: 'readonly',
                        setInterval: 'readonly',
                        clearInterval: 'readonly',
                        requestAnimationFrame: 'readonly',
                        cancelAnimationFrame: 'readonly',
                        confirm: 'readonly',
                        prompt: 'readonly',
                        alert: 'readonly',
                        Event: 'readonly',
                        CustomEvent: 'readonly',
                        Blob: 'readonly',
                        URL: 'readonly',
                        Worker: 'readonly',
                        IntersectionObserver: 'readonly',
                        console: 'readonly',
                        btoa: 'readonly',
                        atob: 'readonly',
                        escape: 'readonly',
                        unescape: 'readonly',
                        self: 'readonly',
                        global: 'readonly',
                        Buffer: 'readonly',
                        CodeMirror: 'readonly',
                        SECTIONS_1_5: 'readonly',
                        SECTIONS_6_9: 'readonly',
                        SECTIONS_10_13: 'readonly',
                        SECTIONS_14: 'readonly',
                        SECTIONS_15: 'readonly',
                        SECTIONS_16: 'readonly',
                        SECTIONS_17: 'readonly',
                        SECTIONS_18: 'readonly',
                        SECTIONS_19: 'readonly',
                        SECTIONS_20: 'readonly',
                        SECTIONS_21: 'readonly',
                        TASKS_PANEL_DATA: 'readonly',
                        ERRORS_PANEL_DATA: 'readonly',
                        ECOSYSTEM_LESSONS_DATA: 'readonly',
                        EXAM_QUESTIONS_DATA: 'readonly'
                    }
                },
                rules: {
                    'no-undef': 'error'
                }
            }
        ]
    });

    const results = await eslint.lintFiles(['app.js']);
    const undefErrors = [];
    results.forEach(r => {
        r.messages.forEach(m => {
            if (m.ruleId === 'no-undef') {
                undefErrors.push(`Line ${m.line}:${m.column} - ${m.message}`);
            }
        });
    });

    console.log(`Found ${undefErrors.length} no-undef errors in app.js:`);
    undefErrors.forEach(e => console.log('  ' + e));
}

main().catch(console.error);
