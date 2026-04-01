const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '..', 'node_modules', 'tsconfig.json');
const content = {
  compilerOptions: {
    module: 'esnext',
    target: 'ES2022',
    moduleResolution: 'node'
  },
  include: ['src']
};

if (!fs.existsSync(path.dirname(targetPath))) {
  fs.mkdirSync(path.dirname(targetPath), { recursive: true });
}

fs.writeFileSync(targetPath, JSON.stringify(content, null, 2) + '\n', 'utf8');
console.log(`Created missing ${targetPath}`);
