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
  },
})
