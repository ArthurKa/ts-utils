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
    format: 'esm',
    outfile: 'dist/esm/index.js',
  },
  {
    format: 'cjs',
    outfile: 'dist/cjs/index.cjs',
  },
];

await Promise.all(
  builds.map(options => build({
    bundle: true,
    entryPoints: ['src/index.ts'],
    plugins: [externalizePackagesPlugin],
    platform: 'node',
    target: 'es2020',
    ...options,
  })),
);
