const fs = require('fs');
const files = fs.readdirSync('build/assets').filter(f => f.endsWith('.js'));
let found = false;
for (const f of files) {
  const code = fs.readFileSync('build/assets/' + f, 'utf8');
  // Match any characters (up to 80), then .map(
  const regex = /.{0,80}\.map\(/g;
  let match;
  while ((match = regex.exec(code)) !== null) {
    console.log(`Match in ${f} at index ${match.index}:`);
    console.log(match[0]);
    console.log('---');
    found = true;
  }
}
if(!found) console.log('No matches found');
