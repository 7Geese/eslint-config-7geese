module.export = {
    rules: {
        // Prevent missing displayName in a React component definition
        'react/display-name': 'off',
        // Forbid certain propTypes
        'react/forbid-prop-types': 'off',
        // Prevent usage of dangerous JSX properties
        'react/no-danger': 'off',
        // Prevent usage of deprecated methods
        'react/no-deprecated': 'off',
        // Prevent usage of setState in componentDidMount
        'react/no-did-mount-set-state': 'off',
        // Prevent usage of setState in componentDidUpdate
        'react/no-did-update-set-state': 'off',
        // Prevent direct mutation of this.state
        'react/no-direct-mutation-state': 'off',
        // Prevent usage of findDOMNode
        'react/no-find-dom-node': 'off',
        // Prevent usage of isMounted
        'react/no-is-mounted': 'off',
        // Prevent multiple component definition per file
        'react/no-multi-comp': 'off',
        // Prevent usage of the return value of React.render
        'react/no-render-return-value': 'off',
        // Prevent usage of setState
        'react/no-set-state': 'off',
        // Prevent using string references in ref attribute.
        'react/no-string-refs': 'off',
        // Prevent usage of unknown DOM property
        'react/no-unknown-property': 'off',
        // Enforce ES5 or ES6 class for React Components
        'react/prefer-es6-class': 'off',
        // Enforce stateless React Components to be written as a pure function
        'react/prefer-stateless-function': 'off',
        // Prevent missing props validation in a React component definition
        'react/prop-types': 'off',
        // Prevent missing React when using JSX
        'react/react-in-jsx-scope': 'off',
        // Restrict file extensions that may be required
        'react/require-extension': 'off',
        // Enforce React components to have a shouldComponentUpdate method
        'react/require-optimization': 'off',
        // Enforce ES5 or ES6 class for returning value in render function
        'react/require-render-return': 'off',
        // Prevent extra closing tags for components without children
        'react/self-closing-comp': 'off',
        // Enforce component methods order
        'react/sort-comp': 'off',
        // Enforce propTypes declarations alphabetical sorting
        'react/sort-prop-types': 'off',
        // Enforce boolean attributes notation in JSX
        'react/jsx-boolean-value': 'off',
        // Validate closing bracket location in JSX
        'react/jsx-closing-bracket-location': 'off',
        // Enforce or disallow spaces inside of curly braces in JSX attributes
        'react/jsx-curly-spacing': 'off',
        // Enforce or disallow spaces around equal signs in JSX attributes (fixable)
        'react/jsx-equals-spacing': 'off',
        // Restrict file extensions that may contain JSX
        'react/jsx-filename-extension': 'off',
        // Enforce position of the first prop in JSX
        'react/jsx-first-prop-new-line': 'off',
        // Enforce event handler naming conventions in JSX
        'react/jsx-handler-names': 'off',
        // Validate JSX indentation
        'react/jsx-indent': 'off',
        // Validate props indentation in JSX
        'react/jsx-indent-props': 'off',
        // Validate JSX has key prop when in array or iterator
        'react/jsx-key': 'off',
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
        'react/jsx-no-undef': 'off',
        // Enforce PascalCase for user-defined JSX components
        'react/jsx-pascal-case': 'off',
        // Enforce props alphabetical sorting
        'react/jsx-sort-props': 'off',
        // Validate spacing before closing bracket in JSX (fixable)
        'react/jsx-space-before-closing': 'off',
        // Prevent React to be incorrectly marked as unused
        'react/jsx-uses-react': 'off',
        // Prevent variables used in JSX to be incorrectly marked as unused
        'react/jsx-uses-vars': 'off',
        // Prevent missing parentheses around multilines JSX
        'react/jsx-wrap-multilines': 'off',

        //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-elements.md
        'react/forbid-elements': 'off',
        //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
        'react/jsx-curly-brace-presence': 'off',
        //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-depth.md
        'react/jsx-max-depth': 'off',
        //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md
        'react/jsx-one-expression-per-line': 'off',
        //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-multi-spaces.md
        'react/jsx-props-no-multi-spaces': 'off',
        //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-default-props.md
        'react/jsx-sort-default-props': 'off',
        //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md
        'react/jsx-tag-spacing': 'off',
        //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md
        'react/no-access-state-in-setstate': 'off',
        //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
        'react/no-array-index-key': 'off',
        //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md
        'react/no-children-prop': 'off',
        //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
        'react/no-danger-with-children': 'off',
        //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md
        'react/no-redundant-should-component-update': 'off',
        //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md
        'react/no-this-in-sfc': 'off',
        //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-typos.md
        'react/no-typos': 'off',
        //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
        'react/no-unescaped-entities': 'off',
        //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unsafe.md
        'react/no-unsafe': 'off',
        //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
        'react/no-unused-prop-types': 'off',
        //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md
        'react/no-unused-state': 'off',
        //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md
        'react/no-will-update-set-state': 'off',
        //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
        'react/require-default-props': 'off',
        //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
        'react/style-prop-object': 'off',
        //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md
        'react/void-dom-elements-no-children': 'off',
        //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md
        'react/boolean-prop-naming': 'off',
        //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
        'react/button-has-type': 'off',
        //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md
        'react/default-props-match-prop-types': 'off',
        //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
        'react/destructuring-assignment': 'off',
        //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md
        'react/forbid-component-props': 'off',
        //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-dom-props.md
        'react/forbid-dom-props': 'off',
        //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-elements.md
        'react/forbid-dom-props': 'off',
        //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md
        'react/forbid-foreign-prop-types': 'off',
        //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-child-element-spacing.md
        'react/jsx-child-element-spacing': 'off',
        //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
        'react/jsx-closing-tag-location': 'off',
    },
};
