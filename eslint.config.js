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
        },
        rules: {
            "vue/max-attributes-per-line": ["error", {
                "singleline": {
                    "max": 2
                },
                "multiline": {
                    "max": 1
                }
            }],
            "vue/component-name-in-template-casing": ["error", "kebab-case", {
                "registeredComponentsOnly": true
            }],
            "vue/html-indent": [
                "error", 2
            ]
        }
    }
)