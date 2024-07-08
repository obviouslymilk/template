import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  typescript: {
    tsconfigPath: 'tsconfig.json',
  },
  isInEditor: true,
}, {
  files: ['**/*.vue'],
  rules: [

  ],
}, {
  rules: {
    'no-console': ["off"],
    'quotes': ['error', 'single'],
    'func-style': ["error", "expression", {
      "allowArrowFunctions": true
    }],
    'func-names': ["error", "always"],
    'default-param-last': ['error'],
  },
})
