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
    entryPoints: ['src/index.ts', 'src/backend.ts'],
    outdir: 'dist/esm',
  },
  {
    format: 'cjs',
    entryPoints: ['src/index.ts', 'src/backend.ts'],
    outdir: 'dist/cjs',
    outExtension: { '.js': '.cjs' },
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
