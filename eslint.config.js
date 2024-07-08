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
      'no-new-object': 'error',
      'object-shorthand': 'error',
      'quote-props': ['error', 'as-needed'],
      'no-array-constructor': 'error',
      'prefer-destructuring': ['error', {
        array: true,
        object: true
      },
        {
          enforceForRenamedProperties: true
        }],
      'func-style': ['error', 'expression'],
      'func-names': ['error', 'as-needed'],
      'no-loop-func': 'error',
      'prefer-rest-params': 'error'
    },
  },
);