module.exports = {
    extends: [
        'eslint-config-airbnb/rules/react'
    ],
    rules: {
        'jsx-quotes': 'error',
        'no-extra-parens': 'off',
        'react/button-has-type': 0,
        'react/default-props-match-prop-types': 0, // up for consideration
        'react/destructuring-assignment': 0, // up for consideration
        'react/display-name': 'error',
        'react/jsx-boolean-value': ['error', 'always'],
        'react/jsx-curly-brace-presence': 0,
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'react/jsx-key': 'error',
        'react/jsx-no-duplicate-props': 2,
        'react/jsx-no-undef': 'error',
        'react/jsx-no-bind': 'error',
        'react/jsx-one-expression-per-line': 0,
        'react/jsx-pascal-case': 'error',
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react/jsx-wrap-multilines': [2, { prop: 'ignore', arrow: 'ignore' }],
        'react/no-access-state-in-setstate': 0, // up for heavy consideration
        'react/no-array-index-key': 0, // up for consideration
        'react/no-is-mounted': 'error',
        'react/no-this-in-sfc': 0,
        'react/no-unknown-property': 'error',
        'react/prefer-stateless-function': 'error',
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'error',
        'react/require-default-props': 0, // up for consideration
        'react/self-closing-comp': 'error',
        'react/sort-comp': [1, {
            order: [
                'static-methods',
                'propTypes',
                'defaultProps',
                'instance-variables',
                'lifecycle',
                'everything-else',
                'render'
            ]
        }]
    }
};
