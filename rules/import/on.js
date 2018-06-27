module.exports = {
    plugins: ['import'],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.json', '.less'],
            },
        },
        'import/extensions': ['.js', '.jsx', '.json', '.less'],
        'import/core-modules': [],
        'import/ignore': [
            'node_modules',
            '\\.(coffee|scss|css|less|hbs|svg|json)$',
        ],
    },
    rules: {
        // ensure imports point to files/modules that can be resolved
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
        'import/no-unresolved': ['error', {
            ignore: ['base-components'],
        }],
        // ensure named imports coupled with named exports
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md#when-not-to-use-it
        'import/named': 2,
        // ensure default import coupled with default export
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md#when-not-to-use-it
        'import/default': 0,
        // Ensure imported namespaces contain dereferenced properties as they are dereferenced
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/namespace.md
        'import/namespace': 0,
        // Report any invalid exports, i.e. re-export of the same name
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md
        'import/export': 2,
        // do not allow a default import name to match a named export
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md
        'import/no-named-as-default': 2,
        // warn on accessing default export property names that are also named exports
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md
        'import/no-named-as-default-member': 2,
        // Report imported names marked with @deprecated documentation tag
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-deprecated.md
        'import/no-deprecated': 0,
        // Forbid the use of extraneous packages
        'import/no-extraneous-dependencies': 0,
        // Forbid mutable exports
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md
        'import/no-mutable-exports': 2,
        // disallow require()
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-commonjs.md
        'import/no-commonjs': 0,
        // disallow AMD require/define
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-amd.md
        'import/no-amd': 2,
        // No Node.js builtin modules
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-nodejs-modules.md
        'import/no-nodejs-modules': 0,
        // disallow non-import statements appearing before import statements
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/imports-first.md
        // deprecated: use `import/first`
        'import/imports-first': 0,
        // disallow non-import statements appearing before import statements
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md
        'import/first': 0,
        // Enforce a convention in module import order
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
        'import/order': [2, {
            'groups': [
                'builtin',
                'external',
                ['internal', 'parent', 'sibling', 'index'],
            ],
            'newlines-between': 'never',
        }],
        // Report repeated import of the same module in multiple places
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
        'import/no-duplicates': 2,
        // Report namespace imports
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-namespace.md
        'import/no-namespace': 'off',
        // Ensure consistent use of file extension within the import path
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
        'import/extensions': ['error', 'ignorePackages', {
            js: 'ignorePackages',
            jsx: 'ignorePackages',
        }],
        // Require a newline after the last import/require in a group
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
        'import/newline-after-import': ['error', { count: 2 }],
        // Require modules with a single export to use a default export
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
        'import/prefer-default-export': 'error',
        // Restrict which files can be imported in a given folder
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-restricted-paths.md
        'import/no-restricted-paths': 'off',
        // Forbid modules to have too many dependencies
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/max-dependencies.md
        'import/max-dependencies': ['error', { max: 12 }],
        // Forbid import of modules using absolute paths
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md
        'import/no-absolute-path': 'error',
        // Forbid require() calls with expressions
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
        'import/no-dynamic-require': 'error',
        // prevent importing the submodules of other modules
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-internal-modules.md
        'import/no-internal-modules': ['off', {
            allow: [],
        }],
        // Warn if a module could be mistakenly parsed as a script by a consumer
        // leveraging Unambiguous JavaScript Grammar
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/unambiguous.md
        'import/unambiguous': 'off',
        // Forbid Webpack loader syntax in imports
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md
        'import/no-webpack-loader-syntax': 'error',
        // Prevent unassigned imports
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unassigned-import.md
        // importing for side effects is perfectly acceptable, if you need side effects.
        'import/no-unassigned-import': 'off',
        // Prevent importing the default as if it were named
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-default.md
        'import/no-named-default': 'error',
        // Reports if a module's default export is unnamed
        // https://github.com/benmosher/eslint-plugin-import/blob/d9b712ac7fd1fddc391f7b234827925c160d956f/docs/rules/no-anonymous-default-export.md
        'import/no-anonymous-default-export': ['off', {
            allowArray: true,
            allowArrowFunction: true,
            allowAnonymousClass: false,
            allowAnonymousFunction: false,
            allowLiteral: true,
            allowObject: true,
        }],
        // This rule enforces that all exports are declared at the bottom of the file.
        // https://github.com/benmosher/eslint-plugin-import/blob/98acd6afd04dcb6920b81330114e146dc8532ea4/docs/rules/exports-last.md
        'import/exports-last': 'error',
        // Reports when named exports are not grouped together in a single export declaration
        // or when multiple assignments to CommonJS module.exports or exports object are present in a single file.
        // https://github.com/benmosher/eslint-plugin-import/blob/44a038c06487964394b1e15b64f3bd34e5d40cde/docs/rules/group-exports.md
        'import/group-exports': 'off',
        // forbid default exports. this is a terrible rule, do not use it.
        // https://github.com/benmosher/eslint-plugin-import/blob/44a038c06487964394b1e15b64f3bd34e5d40cde/docs/rules/no-default-export.md
        'import/no-default-export': 'off',
        // Forbid a module from importing itself
        // https://github.com/benmosher/eslint-plugin-import/blob/44a038c06487964394b1e15b64f3bd34e5d40cde/docs/rules/no-self-import.md
        'import/no-self-import': 'error',
        // Ensures that there are no useless path segments
        // https://github.com/benmosher/eslint-plugin-import/issues/1032
        'import/no-useless-path-segments': 'error',
        //  https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/dynamic-import-chunkname.md
        'import/dynamic-import-chunkname': 'error',
        //  https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-cycle.md
        'import/no-cycle': 'error',
        //  https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-relative-parent-imports.md
        'import/no-relative-parent-imports': 'error',
    },
};
