const fs = require('fs');
const files = ['data_sections_6_9.js', 'data_sections_10_13.js', 'panel_data.js'];
files.forEach(f => {
    const c = fs.readFileSync(f, 'utf8');
    const regex = /"expectedOutput":\s*"([^"]*)"/g;
    let m;
    while ((m = regex.exec(c)) !== null) {
        if (m[1].includes('{') || m[1].includes('}')) {
            console.log(f + ': ' + m[1].replace(/\r?\n/g, '\\n'));
        }
    }
});
