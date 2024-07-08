import ts from 'typescript-eslint';
import vue from 'eslint-plugin-vue';
import stylistic from '@stylistic/eslint-plugin';

export default ts.config(
  ...ts.configs.recommended,
  ...vue.configs['flat/recommended'],
  {
    languageOptions: {
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/comma-dangle': ['error', 'only-multiline'],
      '@stylistic/quotes': ['error', 'single'],

      'no-var': 'error',
      'no-array-constructor': 'error',
    },
  },
);