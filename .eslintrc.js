// @ts-check
'use strict';

module.exports = ((/** @type {import('eslint').Linter.Config} */ e) => e)({
  extends: './node_modules/@arthurka/eslint',
  overrides: [
    {
      files: ['tests/types*/*.ts'],
      rules: {
        'import/no-unresolved': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'no-multiple-empty-lines': ['warn', {
          max: 1,
          maxBOF: 0,
          maxEOF: 0,
        }],
        'keyword-spacing': ['warn', {}],
        '@typescript-eslint/member-delimiter-style': ['warn', {
          overrides: {
            interface: {
              singleline: {
                requireLast: true,
              },
            },
          },
        }],
      },
    },
  ],
});
