### eslint-config-7geese

An `eslint` config to enforce JavaScript coding style at [7Geese](https://7geese.com/).

<!--
_Coming soon_

You can read more about our coding style [over here](https://github.com/7Geese/eslint-config-7geese/blob/master/docs/styleguide.md).
-->

Inspired heavily by [AirBnB](https://github.com/airbnb/javascript), [Walmart](https://github.com/walmartlabs/eslint-config-walmart) and [Formidable](https://github.com/FormidableLabs/eslint-config-formidable).


### Installation

Install `eslint`, `eslint-config-7geese`, and all the required peerDependencies for the config with one of the following commands:

If using npm 5+, use this shortcut

```
npx install-peerdeps --dev eslint-config-7geese
```

If using npm < 5, Linux/OSX users can run

```
(
    export PKG=eslint-config-7geese;
    npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs yarn add --save-dev "$PKG@latest"
)
```

Which produces and runs a command like:

```
  npm install --save-dev eslint-config-7geese eslint@^#.#.# eslint-plugin-import@^#.#.# eslint-plugin-filenames@^#.#.# eslint-plugin-react@^#.#.#

```


### Usage

Add this config under the `"extends"` part of your `.eslintrc` file:

```
{
    "extends": "7geese"
}
```
