module.exports = {
    plugins: ['testing-library'],
    rules: {
        // View rules at https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules
        'testing-library/await-async-query': 'error',
        'testing-library/await-async-utils': 'error',
        'testing-library/await-fire-event': 'off',
        "testing-library/consistent-data-testid": "off",
        'testing-library/no-await-sync-events': 'off',
        'testing-library/no-await-sync-query': 'error',
        'testing-library/no-debug': 'error',
        'testing-library/no-dom-import': 'error',
        'testing-library/no-manual-cleanup': 'off',
        'testing-library/no-render-in-setup': 'off',
        'testing-library/no-wait-for-empty-callback': 'off',
        'testing-library/no-wait-for-snapshot': 'off',
        'testing-library/prefer-explicit-assert': 'off',
        'testing-library/prefer-find-by': 'error',
        'testing-library/prefer-presence-queries': 'off',
        'testing-library/prefer-screen-queries': 'warn',
        'testing-library/prefer-wait-for': 'error',
    },
};
