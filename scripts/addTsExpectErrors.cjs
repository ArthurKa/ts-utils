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
  const filePaths = [
    path.resolve(`dist/esm/${fileName}.d.ts`),
    path.resolve(`dist/cjs/${fileName}.d.ts`),
  ];

  filePaths.forEach(filePath => {
    const lines = (
      fs
        .readFileSync(filePath, 'utf-8')
        .split('\n')
    );
    lines.splice(line, 0, '// @ts-expect-error');

    const result = lines.join('\n');

    fs.writeFileSync(filePath, result);
  });
});
