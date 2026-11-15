const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const regex = /(src|href)=["'](http[^"']+)["']/g;
let m;
while ((m = regex.exec(html)) !== null) {
  console.log(m[1] + ': ' + m[2]);
}
