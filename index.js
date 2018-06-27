
module.exports = {
    extends: [
        './rules/eslint/best-practices/on.js',
        './rules/eslint/errors/on.js',
        './rules/eslint/es6/on.js',
        './rules/eslint/node/on.js',
        './rules/eslint/strict/on.js',
        './rules/eslint/style/on.js',
        './rules/eslint/variables/on.js',
        './rules/7geese/on.js',
        './rules/react/on.js',
        './rules/compat/on.js',
        './rules/filenames/on.js',
        './rules/import/on.js',
        './rules/jest/on.js',
        './rules/promise/on.js',
    ].map(require.resolve),
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            impliedStrict: true,
            generators: false,
            jsx: true,
            objectLiteralDuplicateProperties: false,
        },
    },
    env: {
        amd: true,
        es6: true,
        browser: true,
        jquery: true,
    },
    rules: {},
};
