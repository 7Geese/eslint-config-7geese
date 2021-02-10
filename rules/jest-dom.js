module.exports = {
    plugins: ['jest-dom'],
    rules: {
        // https://github.com/testing-library/eslint-plugin-jest-dom/blob/master/docs/rules/prefer-checked.md
        'jest-dom/prefer-checked': 'warn',
        // https://github.com/testing-library/eslint-plugin-jest-dom/blob/master/docs/rules/prefer-empty.md
        'jest-dom/prefer-empty': 'error',
        // https://github.com/testing-library/eslint-plugin-jest-dom/blob/master/docs/rules/prefer-enabled-disabled.md
        'jest-dom/prefer-enabled-disabled': 'error',
        // https://github.com/testing-library/eslint-plugin-jest-dom/blob/master/docs/rules/prefer-focus.md
        'jest-dom/prefer-focus': 'error',
        // https://github.com/testing-library/eslint-plugin-jest-dom/blob/master/docs/rules/prefer-in-document.md
        'jest-dom/prefer-in-document': 'error',
        // https://github.com/testing-library/eslint-plugin-jest-dom/blob/master/docs/rules/prefer-required.md
        'jest-dom/prefer-required': 'error',
        // https://github.com/testing-library/eslint-plugin-jest-dom/blob/master/docs/rules/prefer-to-have-attribute.md
        'jest-dom/prefer-to-have-attribute': 'error',
        // https://github.com/testing-library/eslint-plugin-jest-dom/blob/master/docs/rules/prefer-to-have-class.md
        'jest-dom/prefer-to-have-class': 'error',
        // https://github.com/testing-library/eslint-plugin-jest-dom/blob/master/docs/rules/prefer-to-have-style.md
        'jest-dom/prefer-to-have-style': 'error',
        // https://github.com/testing-library/eslint-plugin-jest-dom/blob/master/docs/rules/prefer-to-have-text-content.md
        'jest-dom/prefer-to-have-text-content': 'error',
        // https://github.com/testing-library/eslint-plugin-jest-dom/blob/master/docs/rules/prefer-to-have-value.md
        'jest-dom/prefer-to-have-value': 'error',
    },
};

