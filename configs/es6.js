module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module'
    },
    extends: [
        'eslint:recommended',
        'eslint-config-airbnb-base',
        'eslint-config-airbnb-base/rules/strict'
    ],
    plugins: [
        'json'
    ],
    rules: {
        'comma-dangle': [0, 'never'],
        'handle-callback-err': 0,
        indent: [2, 4, { 'ignoredNodes': ['JSXElement *', 'JSXElement'] }],
        'object-curly-newline': 0,
        'one-var': [0, { uninitialized: 'always', initialized: 'never' }],
        'one-var-declaration-per-line': [0, 'initializations'],
        'operator-linebreak': 0,
        'prefer-destructuring': 0, // up for consideration
        'max-len': 'off',
        'new-cap': 0,
        'no-console': 0,
        'no-return-assign': 0,
        'no-restricted-globals': 0, // up for consideration
        'no-self-compare': 0,
        yoda: [0, 'always']
    }
};
