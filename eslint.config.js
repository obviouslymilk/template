import eslint from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import tseslint from 'typescript-eslint'

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.strict,
    ...tseslint.configs.stylistic,
    ...pluginVue.configs['flat/recommended'],
    {
        files: ['*.vue', '**/*.vue', '*.ts', '**/*.ts'],
        languageOptions: {
            parserOptions: {
                parser: '@typescript-eslint/parser',
                ecmaVersion: "latest",
                sourceType: 'module',
            }
        }
    }
)