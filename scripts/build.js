/* eslint-disable strict */
// @ts-check

import { build } from 'esbuild';

/** @type {import('esbuild').Plugin} */
const externalizePackagesPlugin = {
  name: 'externalize-packages',
  setup(buildContext) {
    // eslint-disable-next-line require-unicode-regexp -- Go does not support neither u nor v RegExp flags
    buildContext.onResolve({ filter: /^[^./]|^\.[^./]|^\.\.[^/]/ }, args => ({
      path: args.path,
      external: true,
    }));
  },
};

/** @type {Array<Partial<Parameters<typeof build>[0]>>} */
const builds = [
  {
    entryPoints: ['src/index.ts'],
    format: 'esm',
    outfile: 'dist/esm/index.js',
  },
  {
    entryPoints: ['src/backend.ts'],
    format: 'esm',
    outfile: 'dist/esm/backend.js',
  },
  {
    entryPoints: ['src/index.ts'],
    format: 'cjs',
    outfile: 'dist/cjs/index.cjs',
  },
  {
    entryPoints: ['src/backend.ts'],
    format: 'cjs',
    outfile: 'dist/cjs/backend.cjs',
  },
];

await Promise.all(
  builds.map(options => build({
    bundle: true,
    plugins: [externalizePackagesPlugin],
    platform: 'node',
    target: 'es2020',
    ...options,
  })),
);
