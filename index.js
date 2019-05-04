#!/usr/bin/env node
const fs = require('fs');
const { join } = require('path');

const cwd = process.cwd();
const blocks = fs.readdirSync(cwd).filter(name => {
  return fs.statSync(join(cwd, name)).isDirectory();
});

blocks.forEach(name => {
  const packagePath = join(cwd, name, 'package.json');
  if (fs.existsSync(packagePath)) {
    const content = require(packagePath);
    content.blockConfig = {
      specVersion: '0.1',
    };
    console.log(`start write blockConfig to ${packagePath}.`);
    fs.writeFileSync(packagePath, JSON.stringify(content, null, 2), 'utf-8');
  }
});

console.log('done!');
