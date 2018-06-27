module.exports = {
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['react'],
    rules: {
        // Prevent missing displayName in a React component definition
        'react/display-name': 'off',
        // Forbid certain propTypes
        'react/forbid-prop-types': 'off',
        // Prevent usage of dangerous JSX properties
        'react/no-danger': 'off',
        // Prevent usage of deprecated methods
        'react/no-deprecated': 'error',
        // Prevent usage of setState in componentDidMount
        'react/no-did-mount-set-state': 'error',
        // Prevent usage of setState in componentDidUpdate
        'react/no-did-update-set-state': 'error',
        // Prevent direct mutation of this.state
        'react/no-direct-mutation-state': 'error',
        // Prevent usage of findDOMNode
        'react/no-find-dom-node': 'warn',
        // Prevent usage of isMounted
        'react/no-is-mounted': 'error',
        // Prevent multiple component definition per file
        'react/no-multi-comp': 'error',
        // Prevent usage of the return value of React.render
        'react/no-render-return-value': 'off',
        // Prevent usage of setState
        'react/no-set-state': 'off',
        // Prevent using string references in ref attribute.
        'react/no-string-refs': 'error',
        // Prevent usage of unknown DOM property
        'react/no-unknown-property': 'error',
        // Enforce ES5 or ES6 class for React Components
        'react/prefer-es6-class': 'error',
        // Enforce stateless React Components to be written as a pure function
        'react/prefer-stateless-function': 'off',
        // Prevent missing props validation in a React component definition
        'react/prop-types': 'error',
        // Prevent missing React when using JSX
        'react/react-in-jsx-scope': 'error',
        // Restrict file extensions that may be required
        'react/require-extension': 'off',
        // Enforce React components to have a shouldComponentUpdate method
        'react/require-optimization': 'off',
        // Enforce ES5 or ES6 class for returning value in render function
        'react/require-render-return': 'off',
        // Prevent extra closing tags for components without children
        'react/self-closing-comp': 'error',
        // Enforce component methods order
        'react/sort-comp': 'error',
        // Enforce propTypes declarations alphabetical sorting
        'react/sort-prop-types': ['error', {
            callbacksLast: true,
            sortShapeProp: true,
        }],

        // ========================================================================
        //                                JSX Specific Rules
        // ========================================================================

        // Enforce boolean attributes notation in JSX
        'react/jsx-boolean-value': 'error',
        // Validate closing bracket location in JSX
        'react/jsx-closing-bracket-location': ['error', 'tag-aligned'],
        // Enforce or disallow spaces inside of curly braces in JSX attributes
        'react/jsx-curly-spacing': 'off',
        // Enforce or disallow spaces around equal signs in JSX attributes (fixable)
        'react/jsx-equals-spacing': 'off',
        // Restrict file extensions that may contain JSX
        'react/jsx-filename-extension': 'off',
        // Enforce position of the first prop in JSX
        'react/jsx-first-prop-new-line': 'off',
        // Enforce event handler naming conventions in JSX
        'react/jsx-handler-names': 'warn',
        // Validate JSX indentation
        'react/jsx-indent': ['error', 4],
        // Validate props indentation in JSX
        'react/jsx-indent-props': ['error', 4],
        // Validate JSX has key prop when in array or iterator
        'react/jsx-key': 'error',
        // Limit maximum of props on a single line in JSX
        'react/jsx-max-props-per-line': 'off',
        // Prevent usage of .bind() and arrow functions in JSX props
        'react/jsx-no-bind': 'off',
        // Prevent comments from being inserted as text nodes
        'react/jsx-no-comment-textnodes': 'off',
        // Prevent duplicate props in JSX
        'react/jsx-no-duplicate-props': 'off',
        // Prevent usage of unwrapped JSX strings
        'react/jsx-no-literals': 'off',
        // Prevent usage of unsafe target='_blank'
        'react/jsx-no-target-blank': 'off',
        // Disallow undeclared variables in JSX
        'react/jsx-no-undef': 'error',
        // Enforce PascalCase for user-defined JSX components
        'react/jsx-pascal-case': 'error',
        // Enforce propTypes declarations alphabetical sorting
        'react/jsx-sort-props': 'off',
        // Validate spacing before closing bracket in JSX (fixable)
        'react/jsx-space-before-closing': 'off',
        // Prevent React to be incorrectly marked as unused
        // Prevent React to be incorrectly marked as unused
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
        'react/jsx-uses-react': ['error'],
        // Prevent variables used in JSX to be incorrectly marked as unused
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
        'react/jsx-uses-vars': 'error',
        // Prevent missing parentheses around multilines JSX
        'react/jsx-wrap-multilines': 'error',
    },
};
