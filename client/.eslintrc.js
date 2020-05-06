module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/essential',
        'eslint:recommended',
    ],
    parserOptions: {
        parser: 'babel-eslint',
    },
    rules: {
        'comma-dangle': ['error', 'always-multiline'],
        'indent': ['error', 4],
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-else-return': 'error',
        'no-trailing-spaces': 'error',
        'no-unreachable': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-var': 'error',
        'prefer-const': 'error',
        'semi': ['error', 'never'],
        'vue/attribute-hyphenation': 'error',
        'vue/component-name-in-template-casing': ['error', 'kebab-case'],
        'vue/html-closing-bracket-newline': 'error',
        'vue/html-closing-bracket-spacing': 'error',
        'vue/html-indent': ['error', 4],
        'vue/html-quotes': 'error',
        'vue/html-self-closing': 'error',
        'vue/mustache-interpolation-spacing': 'error',
        'vue/no-dupe-keys': 'error',
        'vue/no-use-v-if-with-v-for': 'error',
        'vue/order-in-components': 'error',
        'vue/prop-name-casing': 'error',
        'vue/require-default-prop': 'error',
        'vue/require-prop-types': 'error',
        'vue/return-in-computed-property': 'error',
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)',
            ],
            env: {
                jest: true,
            },
        },
    ],
}
