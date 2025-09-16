/** @type {import('stylelint').Config} */
export default {
  extends: [
    'stylelint-config-standard-vue',
    'stylelint-config-hudochenkov/full',
  ],
  plugins: [
    'stylelint-plugin-use-baseline',
    'stylelint-order',
  ],
  overrides: [
    {
      files: [
        '*.vue',
        '**/*.vue',
      ],
    },
  ],
  rules: {
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
        ignorePseudoClasses: ['deep'],
      },
    ],
  },
};
