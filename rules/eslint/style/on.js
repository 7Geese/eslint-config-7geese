module.exports = {
    rules: {
        // enforce line breaks after opening and before closing array brackets
        // https://eslint.org/docs/rules/array-bracket-newline
        'array-bracket-newline': 0,
        // enforce line breaks between array elements
        // https://eslint.org/docs/rules/array-element-newline
        'array-element-newline': 0,
        // Disallow or enforce spaces inside of brackets
        // https://eslint.org/docs/rules/array-bracket-spacing
        'array-bracket-spacing': [0, 'never'],
        // disallow or enforce spaces inside of single line blocks
        // https://eslint.org/docs/rules/block-spacing
        'block-spacing': [2, 'always'],
        // enforce one true brace style
        // https://eslint.org/docs/rules/brace-style
        'brace-style': [2, '1tbs', { allowSingleLine: true }],
        // require camel case names
        camelcase: [2, { properties: 'never' }],
        // enforce or disallow capitalization of the first letter of a comment
        // https://eslint.org/docs/rules/capitalized-comments
        'capitalized-comments': [0, 'never'],
        // require trailing commas in multiline object literals
        'comma-dangle': [2, {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
            functions: 'always-multiline',
        }],
        // enforce spacing before and after comma
        'comma-spacing': [2, { before: false, after: true }],
        // enforce one true comma style
        'comma-style': [2, 'last', {
            exceptions: {
                ArrayExpression: false,
                ArrayPattern: false,
                ArrowFunctionExpression: false,
                CallExpression: false,
                FunctionDeclaration: false,
                FunctionExpression: false,
                ImportDeclaration: false,
                ObjectExpression: false,
                ObjectPattern: false,
                VariableDeclaration: false,
                NewExpression: false,
            },
        }],
        // disallow padding inside computed properties
        'computed-property-spacing': [2, 'never'],
        // enforces consistent naming when capturing the current execution context
        'consistent-this': 0,
        // enforce newline at the end of file, with no multiple empty lines
        'eol-last': [2, 'always'],
        // enforce spacing between functions and their invocations
        // https://eslint.org/docs/rules/func-call-spacing
        'func-call-spacing': [2, 'never'],
        // require function names to match the name of the variable or property to which they are assigned
        'func-name-matching': 0,
        // require function expressions to have a name
        // https://eslint.org/docs/rules/func-names
        'func-names': 1,
        // enforces use of function declarations or expressions
        // https://eslint.org/docs/rules/func-style
        'func-style': [2, 'expression'],
        // enforce consistent line breaks inside function parentheses
        // https://eslint.org/docs/rules/function-paren-newline
        'function-paren-newline': 0,
        // disallow certain identifiers to prevent them being used
        // https://eslint.org/docs/rules/id-blacklist
        'id-blacklist': 0,
        // this option enforces minimum and maximum identifier lengths (variable names, property names etc.)
        'id-length': 0,
        // require identifiers to match the provided regular expression
        'id-match': 0,
        // Enforce the location of arrow function bodies with implicit returns
        // https://eslint.org/docs/rules/implicit-arrow-linebreak
        'implicit-arrow-linebreak': [2, 'beside'],
        // this option sets a specific tab width for your code
        // https://eslint.org/docs/rules/indent
        indent: [2, 4, {
            SwitchCase: 1,
            VariableDeclarator: 1,
            outerIIFEBody: 1,
            FunctionDeclaration: {
                parameters: 1,
                body: 1,
            },
            FunctionExpression: {
                parameters: 1,
                body: 1,
            },
            CallExpression: {
                arguments: 1,
            },
            ArrayExpression: 1,
            ObjectExpression: 1,
            ImportDeclaration: 1,
            flatTernaryExpressions: false,
            // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
            ignoredNodes: ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
            ignoreComments: false,
        }],
        // specify whether double or single quotes should be used in JSX attributes
        // https://eslint.org/docs/rules/jsx-quotes
        'jsx-quotes': [2, 'prefer-double'],
        // enforces spacing between keys and values in object literal properties
        // https://eslint.org/docs/rules/key-spacing
        'key-spacing': [2, { beforeColon: false, afterColon: true }],
        // require a space before & after certain keywords
        'keyword-spacing': [2, {
            before: true,
            after: true,
            overrides: {
                return: {
                    after: true,
                },
                throw: {
                    after: true,
                },
                case: {
                    after: true,
                },
            },
        }],
        // enforce position of line comments
        // https://eslint.org/docs/rules/line-comment-positions
        'line-comment-position': [0, {
            position: 'above',
            ignorePattern: '',
            applyDefaultPatterns: true,
        }],
        // disallow mixed "LF" and "CRLF" as linebreaks
        // https://eslint.org/docs/rules/linebreak-style
        'linebreak-style': [2, 'unix'],
        // require or disallow an empty line between class members
        // https://eslint.org/docs/rules/lines-between-class-members
        'lines-between-class-members': [2, 'always', { exceptAfterSingleLine: false }],
        // enforces empty lines around comments
        'lines-around-comment': 0,
        // require or disallow newlines around directives
        // https://eslint.org/docs/rules/lines-around-directive
        'lines-around-directive': [2, {
            before: 'always',
            after: 'always',
        }],
        // specify the maximum depth that blocks can be nested
        'max-depth': [2, 4],
        // specify the maximum length of a line in your program
        // https://eslint.org/docs/rules/max-len
        'max-len': [2, 150, 2, {
            ignoreUrls: true,
            ignoreComments: false,
            ignoreRegExpLiterals: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
        }],
        // specify the max number of lines in a file
        // https://eslint.org/docs/rules/max-lines
        'max-lines': [1, {
            max: 500,
            skipBlankLines: true,
            skipComments: true,
        }],
        // specify the maximum depth callbacks can be nested
        'max-nested-callbacks': [2, 4],
        // limits the number of parameters that can be used in the function declaration.
        'max-params': [0, 3],
        // specify the maximum number of statement allowed in a function
        'max-statements': [0, 12],
        // specify the maximum number of statements allowed per line
        // https://eslint.org/docs/rules/max-statements-per-line
        'max-statements-per-line': [0, { max: 1 }],
        // enforce a particular style for multiline comments
        // https://eslint.org/docs/rules/multiline-comment-style
        'multiline-comment-style': [0, 'starred-block'],
        //  https://eslint.org/docs/rules/multiline-ternary
        'multiline-ternary': 'off',
        // require a capital letter for constructors
        'new-cap': [2, {
            newIsCap: true,
            newIsCapExceptions: [],
            capIsNew: false,
            capIsNewExceptions: [],
        }],
        // disallow the omission of parentheses when invoking a constructor with no arguments
        // https://eslint.org/docs/rules/new-parens
        'new-parens': 2,
        // allow/disallow an empty newline after var statement
        'newline-after-var': 0,
        // require newline before return statement
        'newline-before-return': 0,
        // enforce newline after each call when chaining the calls
        'newline-per-chained-call': [2, { ignoreChainWithDepth: 4 }],
        // disallow use of the Array constructor
        'no-array-constructor': 2,
        // disallow use of bitwise operators
        // https://eslint.org/docs/rules/no-bitwise
        'no-bitwise': 2,
        // disallow use of the continue statement
        // https://eslint.org/docs/rules/no-continue
        'no-continue': 2,
        // disallow comments inline after code
        'no-inline-comments': 0,
        // disallow if as the only statement in an else block
        // https://eslint.org/docs/rules/no-lonely-if
        'no-lonely-if': 2,
        // disallow un-paren'd mixes of different operators
        // https://eslint.org/docs/rules/no-mixed-operators
        'no-mixed-operators': 0,
        // disallow mixed spaces and tabs for indentation
        'no-mixed-spaces-and-tabs': 2,
        // disallow use of chained assignment expressions
        // https://eslint.org/docs/rules/no-multi-assign
        'no-multi-assign': 2,
        // disallow multiple empty lines
        'no-multiple-empty-lines': [2, { max: 2, maxEOF: 1 }],
        // disallow negated conditions
        // https://eslint.org/docs/rules/no-negated-condition
        'no-negated-condition': 0,
        // disallow nested ternary expressions
        'no-nested-ternary': 2,
        // disallow use of the Object constructor
        'no-new-object': 2,
        // disallow use of unary operators, ++ and --
        // https://eslint.org/docs/rules/no-plusplus
        'no-plusplus': [2, {
            allowForLoopAfterthoughts: true,
        }],
        // disallow certain syntax forms
        // https://eslint.org/docs/rules/no-restricted-syntax
        'no-restricted-syntax': [2,
            {
                selector: 'ForInStatement',
                message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
            },
            {
                selector: 'ForOfStatement',
                message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
            },
            {
                selector: 'LabeledStatement',
                message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
            },
            {
                selector: 'WithStatement',
                message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
            },
        ],
        // disallow space between function identifier and application
        'no-spaced-func': 2,
        // disallow tab characters entirely
        'no-tabs': 2,
        // disallow the use of ternary operators
        'no-ternary': 0,
        // disallow trailing whitespace at the end of lines
        'no-trailing-spaces': [2, {
            skipBlankLines: false,
            ignoreComments: false,
        }],
        // disallow dangling underscores in identifiers
        'no-underscore-dangle': [2, {
            allow: [],
            allowAfterThis: false,
            allowAfterSuper: false,
            enforceInMethodNames: false,
        }],
        // disallow the use of Boolean literals in conditional expressions
        // also, prefer `a || b` over `a ? a : b`
        // https://eslint.org/docs/rules/no-unneeded-ternary
        'no-unneeded-ternary': [2, { defaultAssignment: false }],
        // disallow whitespace before properties
        // https://eslint.org/docs/rules/no-whitespace-before-property
        'no-whitespace-before-property': 2,
        // https://eslint.org/docs/rules/nonblock-statement-body-position
        'nonblock-statement-body-position': 'off',
        // require or disallow padding inside curly braces
        'object-curly-spacing': 0,
        // enforce placing object properties on separate lines or all on same line
        // https://eslint.org/docs/rules/object-curly-newline
        'object-curly-newline': [2, {
            ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
            ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
        }],
        // enforce "same line" or "multiple line" on object properties.
        // https://eslint.org/docs/rules/object-property-newline
        'object-property-newline': [2, {
            allowAllPropertiesOnSameLine: true,
        }],
        // allow just one var statement per functionprefer-destructuring
        'one-var': [2, 'never'],
        // require or disallow an newline around variable declarations
        'one-var-declaration-per-line': [2, 'always'],
        // require assignment operator shorthand where possible or prohibit it entirely
        'operator-assignment': [2, 'always'],
        // Requires operator at the beginning of the line in multiline statements
        // https://eslint.org/docs/rules/operator-linebreak
        'operator-linebreak': [2, 'before'],
        // enforce padding within blocks
        'padded-blocks': [2, {
            blocks: 'never',
            classes: 'never',
            switches: 'never',
        }],
        // https://eslint.org/docs/rules/prefer-numeric-literals
        'prefer-numeric-literals': 'off',
        //  https://github.com/eslint/eslint/blob/master/docs/rules/prefer-object-spread.md
        'prefer-object-spread': 1,
        // Require or disallow padding lines between statements
        // https://eslint.org/docs/rules/padding-line-between-statements
        'padding-line-between-statements': 'off',
        // require quotes around object literal property names
        // https://eslint.org/docs/rules/quote-props.html
        'quote-props': [2, 'as-needed', {
            keywords: false,
            unnecessary: true,
            numbers: false,
        }],
        // specify whether double or single quotes should be used
        quotes: [2, 'single', {
            allowTemplateLiterals: true,
            avoidEscape: true,
        }],
        // Require JSDoc comment
        // https://eslint.org/docs/rules/require-jsdoc
        'require-jsdoc': 0,
        // require or disallow use of semicolons instead of ASI
        semi: [2, 'always'],
        // enforce spacing before and after semicolons
        'semi-spacing': [2, { before: false, after: true }],
        // Enforce location of semicolons
        // https://eslint.org/docs/rules/semi-style
        'semi-style': [2, 'last'],
        // requires object keys to be sorted
        'sort-keys': [0, 'asc', {
            caseSensitive: false,
            natural: true,
        }],
        // sort variables within the same declaration block
        'sort-vars': 0,
        // require or disallow space before blocks
        'space-before-blocks': [2, 'always'],
        // require or disallow space before function opening parenthesis
        // https://eslint.org/docs/rules/space-before-function-paren
        'space-before-function-paren': [2, {
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'always',
        }],
        // require or disallow spaces inside parentheses
        'space-in-parens': [2, 'never'],
        // require spaces around operators
        'space-infix-ops': 2,
        // Require or disallow spaces before/after unary operators
        // https://eslint.org/docs/rules/space-unary-ops
        'space-unary-ops': [2, {
            words: true,
            nonwords: false,
            overrides: {},
        }],
        // require or disallow a space immediately following the // or /* in a comment
        'spaced-comment': [2, 'always', {
            line: {
                markers: ['!'],
                exceptions: ['-', '+'],
            },
            block: {
                markers: ['!'],
                exceptions: ['*'],
                balanced: true,
            },
        }],
        // Enforce spacing around colons of switch statements
        // https://eslint.org/docs/rules/switch-colon-spacing
        'switch-colon-spacing': [2, { after: true, before: false }],
        // Require or disallow spacing between template tags and their literals
        // https://eslint.org/docs/rules/template-tag-spacing
        'template-tag-spacing': [2, 'never'],
        // require or disallow the Unicode Byte Order Mark
        // https://eslint.org/docs/rules/unicode-bom
        'unicode-bom': [2, 'never'],
        // require regex literals to be wrapped in parentheses
        'wrap-regex': 0,
    },
};
