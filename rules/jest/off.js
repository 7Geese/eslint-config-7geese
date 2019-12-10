module.exports = {
    rules: {
        //  Tests should use `it()` instead of `test()`
        //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/consistent-test-it.md
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
        //  Suggest using inline snapshots
        //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-inline-snapshots.md
        'jest/prefer-inline-snapshots': 'off',
        //  Ensure there is an expect call in each test block
        //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/expect-expect.md
        'jest/expect-expect': 'off',
        //  Jest wants your tests to be void and not return anything
        //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-test-return-statement.md
        'jest/no-test-return-statement': 'off',
        //  Strict equality is better to check for
        //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-strict-equal.md
        'jest/prefer-strict-equal': 'off',
        //  Don't use the deprecated/aliased version of Jest methods
        //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-alias-methods.md
        'jest/no-alias-methods': 'off',
        //  .toThrow should have an argument/message
        //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/require-tothrow-message.md
        'jest/require-to-throw-message': 'off',
        //  Use .toContain when checking Array.includes
        //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-to-contain.md
        'jest/prefer-to-contain': 'off',
        //  Prefer that you just return a promise instead of calling done()
        //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-test-callback.md
        'jest/no-test-callback': 'off',
        //  .spyOn doesn't mess with the original implementation
        //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-spy-on.md
        'jest/prefer-spy-on': 'off',
        //  Disallow .toBeTruthy()/.toBeFalsy()
        //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-truthy-falsy.md
        'jest/no-truthy-falsy': 'off',
        //  When test cases are empty, it is better to mark them as test.todo as it will be highlighted in the summary output.
        //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-todo.md
        'jest/prefer-todo': 'off',
        //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-called-with.md
        'jest/prefer-called-with': 'off',
        //  Disallow empty titles
        //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-empty-title.md
        'jest/no-empty-title': 'off',
        // Disallow duplicate hooks
        // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-duplicate-hooks.md
        'jest/no-duplicate-hooks': 'off',
        // Disallow no if statements in tests
        // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-if.md
        'jest/no-if': 'off',
        // Disallow no exports in test files
        // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-export.md
        'jest/no-export': 'off',
        // Warn using assertions in a catch block is suspect. Use expect().toThrow instead
        // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-try-expect.md
        'jest/no-try-expect': 'off',
        // Don't allow expects outside of a specific testcase
        // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-standalone-expect.md
        'jest/no-standalone-expect': 'off',
        // warn if using a funky syntax for expecting before await
        // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-expect-resolves.md
        'jest/no-expect-resolves': 'off',
        // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/require-top-level-describe.md
        'jest/require-top-level-describe': 'off',
        // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-commented-out-tests.md
        'jest/no-commented-out-tests': 'off',
        // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/valid-title.md
        'jest/valid-title': 'off',
        // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-hooks-on-top.md
        'jest/prefer-hooks-on-top': 'off',
        // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-mocks-import.md
        'jest/no-mocks-import': 'off',
    },
};
