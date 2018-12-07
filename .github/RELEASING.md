## Releasing

This is a guide to release

### How to release

First, make sure that you are:

1. Logged into `npm` in your shell (`npm login`).
2. Have 2fa setup on your NPM account.
3. Checked into `master` with no local changes/commits.

Now this:

```
npm run release
```

Don't use `yarn run`, as it does not handle NPM's 2fa.

This kicks off the [`np`](https://www.npmjs.com/package/np) program. It runs a series of checks, including:

- Checking for outdated packages (will only let you release if all dependencies are on latest version)
- Checking if any of the plugins we use have new rules which we do not have listed (via [`eslint-find-rules`](https://www.npmjs.com/package/eslint-find-rules))
- Lints the `.js` files in this codebase, based on the local config.

You will be prompted for what version you want to bump to, and eventually you will need to enter your NPM one-time password.

### Versioning

When releasing, `np` will ask you about what version you would like to bump to.

**Major versions**

Only for new plugins being added or removed, or for a major breaking change.

**Minor versions**

Bumps plugins/dependencies which add new features or rules.

**Patch versions**

Minor typos or documentation fixes. Could also include package upgrades, as long as they are minor/bugfix type updates.
