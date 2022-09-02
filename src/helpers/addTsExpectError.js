// @ts-check
'use strict';

const fs = require('node:fs');
const path = require('node:path');

/** @type {Array<[string, number]>} */
const files = [
  ['isArrayLength', -3],
  ['ExactShape', 3],
];

files.forEach(([fileName, line]) => {
  const filePath = path.resolve(`build/${fileName}.d.ts`);

  const lines = (
    fs
      .readFileSync(filePath, 'utf-8')
      .split('\n')
  );
  lines.splice(line, 0, '// @ts-expect-error');

  const result = lines.join('\n');

  fs.writeFileSync(filePath, result);
});
