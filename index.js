
module.exports = {
    extends: [
        './rules/eslint.js',
        './rules/7geese.js',
        './rules/compat.js',
        './rules/filenames.js',
        './rules/import.js',
        './rules/jest.js',
        './rules/jsx-a11y.js',
        './rules/promise.js',
        './rules/react.js',
        './rules/react-hooks.js',
        './rules/testing-library.js',
    ].map(require.resolve),
    parser: '@babel/eslint-parser',
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
