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
    'plugin/use-baseline': [
      true,
      {
        available: 'widely',
      },
    ],
    'declaration-no-important': true,
  },
};
