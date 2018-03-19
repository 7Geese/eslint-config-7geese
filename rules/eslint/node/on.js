module.exports = {
    env: {
        node: true,
    },
    rules: {
        // enforce return after a callback
        'callback-return': 0,
        // disallow require() outside of the top-level module scope
        'global-require': 1,
        // enforces error handling in callbacks (node environment)
        'handle-callback-err': 0,
        //  https://eslint.org/docs/4.0.0/rules/no-buffer-constructor
        'no-buffer-constructor': 0,
        // disallow mixing regular variable and require declarations
        'no-mixed-requires': [0, false],
        // disallow use of new operator with the require function
        'no-new-require': 2,
        // disallow string concatenation with __dirname and __filename
        // https://eslint.org/docs/rules/no-path-concat
        'no-path-concat': 2,
        // disallow use of process.env
        'no-process-env': 0,
        // disallow process.exit()
        'no-process-exit': 0,
        // restrict usage of specified node modules
        'no-restricted-modules': 0,
        // disallow use of synchronous methods (off by default)
        'no-sync': 0,
    },
};
