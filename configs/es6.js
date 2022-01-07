module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true
    },
    parser: '@babel/eslint-parser',
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
        'comma-dangle': [2, 'never'],
        'function-paren-newline': 0, // up for consideration
        'handle-callback-err': 2,
        'implicit-arrow-linebreak': 0, // up for consideration
        'import/no-cycle': 0, // up for consideration
        indent: [2, 4, { ignoredNodes: ['JSXElement *', 'JSXElement', 'JSXFragment'] }],
        'lines-between-class-members': 0,
        'object-curly-newline': 0,
        'one-var': [0, { uninitialized: 'always', initialized: 'never' }],
        'one-var-declaration-per-line': [2, 'initializations'],
        'operator-linebreak': 0,
        'prefer-destructuring': 0, // up for consideration
        'max-len': 'off',
        'new-cap': 2,
        'no-console': 2,
        'no-else-return': 0, // up for consideration
        'no-return-assign': 0,
        'no-restricted-globals': 0, // up for consideration
        'no-self-compare': 2,
        yoda: 0,
        'max-classes-per-file': 0,
        'arrow-parens': [2, 'as-needed', { requireForBlockBody: true }],
        'no-multiple-empty-lines': 0,
        'func-names': 0,
        'object-shorthand': 0,
        'prefer-arrow-callback': 1,
        'prefer-template': 0,
        'import/no-import-module-exports': 0,
        'function-call-argument-newline': 0,
        'default-param-last': 1, // trying out for consideration
        'class-methods-use-this': 0
    }
};
