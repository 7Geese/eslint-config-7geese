module.exports = {
    rules: {
        //  Tests should use `it()` instead of `test()`
        'jest/consistent-test-it': 'off',
        //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/lowercase-name.md
        'jest/lowercase-name': 'off',
        //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/no-disabled-tests.md
        'jest/no-disabled-tests': 'off',
        //  Error out if set to only run a single test
        //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/no-focused-tests.md
        'jest/no-focused-tests': 'off',
        //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/no-hooks.md
        'jest/no-hooks': 'off',
        //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/no-identical-title.md
        'jest/no-identical-title': 'off',
        //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-jasmine-globals.md
        'jest/no-jasmine-globals': 'off',
        //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/no-jest-import.md
        'jest/no-jest-import': 'off',
        //  Allow snapshots to get 'yuge, we don't include them in .gitattribute anyway
        //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/no-large-snapshots.md
        'jest/no-large-snapshots': 'off',
        //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/no-test-prefixes.md
        'jest/no-test-prefixes': 'off',
        //  expect(thing).toHaveLength() > expect(thing.length).toBe()
        //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/prefer-to-have-length.md
        'jest/prefer-to-have-length': 'off',
        //  Suggest using toBeNull() instead of toBe(null)
        //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/prefer-to-be-null.md
        'jest/prefer-to-be-null': 'off',
        //  Suggest using toBeUndefined() instead of toBe(undefined)
        //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/prefer-to-be-undefined.md
        'jest/prefer-to-be-undefined': 'off',
        //  We don't enforce assertation counting
        //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/prefer-expect-assertions.md
        'jest/prefer-expect-assertions': 'off',
        //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/valid-describe.md
        'jest/valid-describe': 'off',
        //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/valid-expect.md
        'jest/valid-expect': 'off',
        //  Ensure we return promise out of
        //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/valid-expect-in-promise.md
        'jest/valid-expect-in-promise': 'off',
        'jest/prefer-inline-snapshots': 'off',
        'jest/expect-expect': 'off',
        'jest/no-test-return-statement': 'off',
        'jest/prefer-strict-equal': 'off',
    },
};
