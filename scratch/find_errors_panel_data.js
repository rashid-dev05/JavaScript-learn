const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.js'));
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (content.includes('ERRORS_PANEL_DATA')) {
    console.log(f, 'has ERRORS_PANEL_DATA');
  }
});
