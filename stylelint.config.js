/** @type {import('stylelint').Config} */
export default {
  extends: [
    'stylelint-config-recommended-vue',
    'stylelint-config-hudochenkov/full',
  ],
  plugins: [
    'stylelint-order',
  ],
  ignoreFiles: ['**/*.js', '**/*.ts'],
  overrides: [
    {
      files: [
        '*.vue',
        '**/*.vue',
      ],
    },
  ],
  rules: {
    'order/order': [
      'custom-properties',
      'declarations',
    ],
    'declaration-no-important': true,
    'value-keyword-case': [
      'lower',
      {
        ignoreFunctions: ['/^(f|F)oo$/', 'v-bind'],
      },
    ],
    'function-no-unknown': [true, { ignoreFunctions: ['v-bind'] }],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: [
          'deep',
          'export',
        ],
      },
    ],
    'selector-class-pattern': '^[a-z]([a-z0-9-]+)?(__([a-z0-9]+-?)+)?(__([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+){0,2}$|^Mui.*$|^([a-z][a-z0-9]*)(_[a-z0-9]+)*$',
  },
};
