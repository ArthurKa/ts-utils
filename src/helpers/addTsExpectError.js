// @ts-check
'use strict';

const fs = require('node:fs');
const path = require('node:path');

const filePath = path.resolve('build/isArrayLength.d.ts');

const lines = (
  fs
    .readFileSync(filePath, 'utf-8')
    .split('\n')
);
lines.splice(-3, 0, '// @ts-expect-error');

const result = lines.join('\n');

fs.writeFileSync(filePath, result);
