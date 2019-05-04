const fs = require('fs');
const { join } = require('fs');

const cwd = process.cwd();
const blocks = fs.readdirSync(cwd).filter(name => {
  return fs.statSync(join(cwd, name)).isDirectory();
});

blocks.forEach(name => {
  const packagePath = join(cwd, name, 'package.json');
  if (fs.existsSync(packagePath)) {
    const content = fs.readFileSync(packagePath);
    console.log(content);
  }
});
