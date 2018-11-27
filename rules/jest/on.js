module.exports = {
    env: {
        'jest/globals': true,
    },
    plugins: ['jest'],
    rules: {
        //  Tests should use `it()` instead of `test()`
        //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/consistent-test-it.md
        'jest/consistent-test-it': ['error', {
            fn: 'it',
        }],
        //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/lowercase-name.md
        'jest/lowercase-name': 'off',
        //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/no-disabled-tests.md
        'jest/no-disabled-tests': 'error',
        //  Error out if set to only run a single test
        //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/no-focused-tests.md
        'jest/no-focused-tests': 'off',
        //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/no-hooks.md
        'jest/no-hooks': 'off',
        //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/no-identical-title.md
        'jest/no-identical-title': 'error',
        //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-jasmine-globals.md
        'jest/no-jasmine-globals': 'error',
        //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/no-jest-import.md
        'jest/no-jest-import': 'error',
        //  Allow snapshots to get 'yuge, we don't include them in .gitattribute anyway
        //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/no-large-snapshots.md
        'jest/no-large-snapshots': 'off',
        //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/no-test-prefixes.md
        'jest/no-test-prefixes': 'error',
        //  expect(thing).toHaveLength() > expect(thing.length).toBe()
        //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/prefer-to-have-length.md
        'jest/prefer-to-have-length': 'error',
        //  Suggest using toBeNull() instead of toBe(null)
        //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/prefer-to-be-null.md
        'jest/prefer-to-be-null': 'error',
        //  Suggest using toBeUndefined() instead of toBe(undefined)
        //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/prefer-to-be-undefined.md
        'jest/prefer-to-be-undefined': 'error',
        //  We don't enforce assertation counting
        //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/prefer-expect-assertions.md
        'jest/prefer-expect-assertions': 'off',
        //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/valid-describe.md
        'jest/valid-describe': 'off',
        //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/valid-expect.md
        'jest/valid-expect': 'error',
        //  Ensure we return promise out of
        //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/valid-expect-in-promise.md
        'jest/valid-expect-in-promise': 'error',
        //  Suggest using inline snapshots
        //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-inline-snapshots.md
        'jest/prefer-inline-snapshots': 'off',
        //  Ensure there is an expect call in each test block
        //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/expect-expect.md
        'jest/expect-expect': 'error',
        //  Jest wants your tests to be void and not return anything
        //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-test-return-statement.md
        'jest/no-test-return-statement': 'off',
        //  Strict equality is better to check for
        //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-strict-equal.md
        'jest/prefer-strict-equal': 'off',
        //  Don't use the deprecated/aliased version of Jest methods
        //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-alias-methods.md
        'jest/no-alias-methods': 'error',
        //  .toThrow should have an argument/message
        //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/require-tothrow-message.md
        'jest/require-tothrow-message': 'error',
        //  Use .toContain when checking Array.includes
        //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-to-contain.md
        'jest/prefer-to-contain': 'error',
        //  Prefer that you just return a promise instead of calling done()
        //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-test-callback.md
        'jest/no-test-callback': 'error',
        //  .spyOn doesn't mess with the original implementation
        //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-spy-on.md
        'jest/prefer-spy-on': 'error',
        //  Disallow .toBeTruthy()/.toBeFalsy()
        //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-truthy-falsy.md
        'jest/no-truthy-falsy': 'error',
    },
};
