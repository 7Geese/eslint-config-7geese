<div align="center">
  <a href="https://eslint.org/">
    <img width="150" height="150" src="https://eslint.org/assets/img/logo.svg">
  </a>
  <a href="https://7geese.com">
    <img width="150" height="150" vspace="" hspace="25" src="https://user-images.githubusercontent.com/4298089/29260121-a9256298-807c-11e7-95c2-74d5c9841874.png">
  </a>
  <h1>eslint-config-7geese</h1>
  <p style="font-style: italic;">ESLint config to enforce JavaScript coding style at <a href="https://github.com/7Geese">7Geese</a>.</p>
</div>


<!--
_Coming soon_

You can read more about our coding style [over here](https://github.com/7Geese/eslint-config-7geese/blob/master/docs/styleguide.md).
-->


### Installation

First install `eslint` and the config as `devDependencies`, using either `yarn` or `npm`:

```
yarn add -D eslint eslint-config-7geese

npm install -D eslint eslint-config-7geese
```

Next, you'll need to install any plugins you wish to use. In most cases, you'll want them all, so you can install them all with (this example using `yarn`):

```
yarn add -D \
    eslint-plugin-7g \
    eslint-plugin-compat \
    eslint-plugin-filenames \
    eslint-plugin-import \
    eslint-plugin-jest \
    eslint-plugin-jsx-a11y \
    eslint-plugin-promise \
    eslint-plugin-react \
    eslint-plugin-react-hooks
```



### Usage

Add this config under the `"extends"` part of your `.eslintrc` file:

```
{
    "extends": "7geese"
}
```

If there are plugins or rules which you do not want to use, you'll have to opt-in/out of the specific rulesets which you want to use:
By extending the specific subpackage you want

```
{
    "extends": [
        "7geese/rules/eslint/best-practices",
        "7geese/rules/eslint/errors",
        "7geese/rules/react",
    ]
}
```

For more details about how shareable configs work, [see the ESLint documentation](https://eslint.org/docs/developer-guide/shareable-configs).

### Inspiration

Inspired heavily by [AirBnB](https://github.com/airbnb/javascript), [Walmart](https://github.com/walmartlabs/eslint-config-walmart) and [Formidable](https://github.com/FormidableLabs/eslint-config-formidable) ESLint configs.


### See also

Check out [our ESLint plugin](https://github.com/7Geese/eslint-plugin-7g), with some rules for writing JavaScript code at 7Geese.
