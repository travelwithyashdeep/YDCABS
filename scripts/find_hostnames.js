const fs = require('fs');
const path = require('path');

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const urls = content.match(/https?:\/\/[^\s'"`,)]+/g) || [];
  return urls.map(u => {
    try {
      return new URL(u).hostname;
    } catch {
      return null;
    }
  }).filter(Boolean);
}

const dir = path.join(__dirname, '../data');
const files = fs.readdirSync(dir);
const allHostnames = new Set();

files.forEach(f => {
  const full = path.join(dir, f);
  if (fs.statSync(full).isFile()) {
    checkFile(full).forEach(h => allHostnames.add(h));
  }
});

console.log('Found hostnames:', Array.from(allHostnames));
