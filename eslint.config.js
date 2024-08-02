import stylistic from '@stylistic/eslint-plugin';
import vue from 'eslint-plugin-vue';
import ts from 'typescript-eslint';

export default ts.config(
  ...ts.configs.strictTypeChecked,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-argument
  ...vue.configs['flat/recommended'],
  stylistic.configs['recommended-flat'],
  {
    languageOptions: {
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: true,
      },
    },
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/comma-dangle': ['error', 'only-multiline'],

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
