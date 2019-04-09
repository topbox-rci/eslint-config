module.exports = {
    extends: [
        'eslint-config-airbnb/rules/react'
    ],
    rules: {
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react/jsx-no-duplicate-props': 'error',
        'react/jsx-no-undef': 'error',
        'react/jsx-no-bind': 'error',
        'react/jsx-pascal-case': 'error',
        'react/jsx-key': 'error',
        'jsx-quotes': 'error',
        'react/no-is-mounted': 'error',
        'react/no-unknown-property': 'error',
        'react/react-in-jsx-scope': 'error',
        'react/self-closing-comp': 'error',
        'react/jsx-wrap-multilines': 'error',
        'no-extra-parens': 'off',
        'react/display-name': 'error',
        'react/prefer-stateless-function': 'error',
        'react/jsx-boolean-value': ['error', 'always'],
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'react/prop-types': 'off',
        'react/sort-comp': [2, {
            order: [
                'static-methods',
                'instance-variables',
                'lifecycle',
                'everything-else',
                'render'
            ]
        }]
    }
};