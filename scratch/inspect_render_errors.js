const fs = require('fs');
const app = fs.readFileSync('app.js', 'utf8');

const errPanelIdx = app.indexOf('function renderErrorsPanel');
console.log(app.slice(errPanelIdx + 1500, errPanelIdx + 3000));
