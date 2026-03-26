const fs = require('fs');
const files = fs.readdirSync('build/assets').filter(f => f.endsWith('.js') && f.includes('index'));
for (const f of files) {
  const code = fs.readFileSync('build/assets/' + f, 'utf8');
  const lines = code.split('\n');
  if (lines.length > 580) {
    const line = lines[580];
    console.log(`--- ${f} Line 581 (Length: ${line.length}) ---`);
    if (line.length > 3000) {
      console.log('Column 3000 to 3500:');
      console.log(line.substring(3000, 3500));
      console.log('\nLooking for .map in this chunk:');
      const regex = /.{0,40}\.map\(/g;
      let match;
      while ((match = regex.exec(line.substring(3000, 3500))) !== null) {
        console.log(match[0]);
      }
    }
  }
}
