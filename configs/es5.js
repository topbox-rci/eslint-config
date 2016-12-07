module.exports = {
    extends: [
        './es6.js'
    ],
    rules: {
        'func-names': 0,
        'import/no-amd': 0,
        'no-restricted-syntax': [
            2,
            'ForOfStatement',
            'LabeledStatement',
            'WithStatement'
        ],
        'no-var': 0,
        'object-shorthand': 0,
        'prefer-arrow-callback': 0,
        'prefer-rest-params': 0,
        'prefer-template': 0,
        strict: 0
    }
};
