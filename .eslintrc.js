// @ts-check
'use strict';

module.exports = ((/** @type {import('eslint').Linter.Config} */ e) => e)({
  extends: './node_modules/@arthurka/eslint',
  rules: {
    'arrow-body-style': 'off',
  },
  overrides: [
    {
      files: ['tests/types*/*.ts'],
      rules: {
        'import/no-unresolved': 'off',
        'no-lone-blocks': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'no-unused-expressions': 'off',
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
