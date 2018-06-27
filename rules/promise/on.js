module.exports = {
    plugins: ['promise'],
    rules: {
        //  https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/always-return.md
        'promise/always-return': 2,
        //  https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-return-wrap.md
        'promise/no-return-wrap': 2,
        //  https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/param-names.md
        'promise/param-names': 0,
        //  https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/catch-or-return.md
        'promise/catch-or-return': 2,
        //  https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-native.md
        'promise/no-native': 0,
        //  https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-nesting.md
        'promise/no-nesting': 1,
        //  https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-promise-in-callback.md
        'promise/no-promise-in-callback': 0,
        //  https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-callback-in-promise.md
        'promise/no-callback-in-promise': 0,
        //  https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/avoid-new.md
        'promise/avoid-new': 1,
        //  https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-new-statics.md
        'promise/no-new-statics': 2,
        //  https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-return-in-finally.md
        'promise/no-return-in-finally': 1,
        //  https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/valid-params.md
        'promise/valid-params': 2,
        //  https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/prefer-await-to-then.md
        'promise/prefer-await-to-then': 0,
        //  https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/prefer-await-to-callbacks.md
        'promise/prefer-await-to-callbacks': 0,
    }
};
