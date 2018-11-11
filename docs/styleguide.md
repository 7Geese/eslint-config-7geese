# 7Geese JavaScript Style Guide

A guideline for writing JavaScript code at 7Geese.

## Table of Contents

1. [Types](#types)
2. [Variables & References](#variables--references)
<!--
// 7Geese
X. Directory Structure
X. Testing
X. Promises
X. React & JSX
X. Domain-specific rules (7G rules)

// From WalMart:
3. [Objects](#objects)
4. [Arrays](#arrays)
5. [Destructuring](#destructuring)
6. [Strings](#strings)
7. [Functions](#functions)
8. [Arrow Functions](#arrow-functions)
9. [Classes & Constructors](#classes--constructors)
10. [Modules](#modules)
11. [Iterators and Generators](#iterators-and-generators)
12. [Properties](#properties)
13. [Variables](#variables)
14. [Hoisting](#hoisting)
15. [Comparison Operators & Equality](#comparison-operators--equality)
16. [Blocks](#blocks)
17. [Control Statements](#control-statements)
18. [Comments](#comments)
19. [Whitespace](#whitespace)
20. [Commas](#commas)
21. [Semicolons](#semicolons)
22. [Type Casting & Coercion](#type-casting--coercion)
23. [Naming Conventions](#naming-conventions)
24. [Accessors](#accessors)
25. [Events](#events)
26. [jQuery](#jquery)
27. [ECMAScript 5 Compatibility](#ecmascript-5-compatibility)
28. [ECMAScript 6+ (ES 2015+) Styles](#ecmascript-6-es-2015-styles)
29. [Standard Library](#standard-library)
30. [Testing](#testing)
31. [Performance](#performance)
32. [Resources](#resources)
33. [In the Wild](#in-the-wild)
34. [Translation](#translation)
35. [The JavaScript Style Guide Guide](#the-javascript-style-guide-guide)
36. [Chat With Us About JavaScript](#chat-with-us-about-javascript)
37. [Contributors](#contributors)
38. [License](#license)
39. [Amendments](#amendments)
-->

## Types

<a name="types--primitives"></a><a name="1.1"></a>
- [1.1](#types--primitives) **Primitives**: When you access a primitive type you work directly on its value.
  + `string`
  + `number`
  + `boolean`
  + `null`
  + `undefined`

  ```js
  const first = 'Bruce';
  let last = first;

  last = 'Goose';

  console.log(first, last); // => Bruce, Goose
  ```
<a name="types--complex"></a><a name="1.2"></a>
- [1.2](#types--complex) **Complex**: When you access a complex type you work on a reference to its value.
  + `object`
  + `array`
  + `function`

  ```js
  const foo = [1, 2];
  const bar = foo;

  bar[0] = 9;

  console.log(foo[0], bar[0]); // => 9, 9
  ```
<a name="types--no-new-wrappers"></a><a name="1.3"></a>
- [1.3](#types--no-new-wrappers) Do not create primitive types using their constructors.

  > eslint: [`no-new-wrappers`](http://eslint.org/docs/rules/no-new-wrappers)
  >
  > defined in: [`rules/eslint/best-practices`](https://github.com/7Geese/eslint-config-7geese/blob/master/rules/eslint/best-practices/on.js)

  ```js
  // N'est pas:
  const booleanObject = new Boolean(true);
  const numberObject = new Number(9);
  const stringObject = new String('👌');

  // Instead do this:
  const boolean = true;
  const number = 9;
  const string = '👌';
  ```

  > Why?
  >
  > Wrapping primitives in their constructor creates an object, which can have unintended side effects when making comparisons.

<a name="types--no-octal"></a><a name="1.4"></a>
- [1.4](#types--no-octal) Do not use octals or octal escapes.

  > eslint: [`no-octal`](http://eslint.org/docs/rules/no-octal), [`no-octal-escape`](http://eslint.org/docs/rules/no-octal-escape)
  >
  > defined in: [`rules/eslint/best-practices`](https://github.com/7Geese/eslint-config-7geese/blob/master/rules/eslint/best-practices/on.js)

  ```js
  // N'est pas:
  const octal = 058;
  const escapedOctal = '\058';

  // Instead do this:
  const escapedHexadecimal = '\xA9';
  ```

  > Why?
  >
  > Octal is deprecated in ES5.

<a name="types--isnan"></a><a name="1.5"></a>
- [1.5](#types--isnan) Use `isNaN()` to check type `NaN`.

  > eslint: [`use-isnan`](http://eslint.org/docs/rules/use-isnan)
  >
  > defined in: [`rules/eslint/errors`](https://github.com/7Geese/eslint-config-7geese/blob/master/rules/eslint/errors/on.js)

  ```js
  // N'est pas:
  console.log(NaN === NaN); // false

    // Instead do this:
  console.log(isNaN(NaN)); // true
  ```

  > Why?
  >
  > `NaN` is equal to nothing, including itself. Use `isNaN` to check if a value is `NaN`.

<a name="types--typeof"></a><a name="1.6"></a>
- [1.6](#types--typeof) Only use valid strings for `typeof` expressions.

  > eslint: [`valid-typeof`](http://eslint.org/docs/rules/valid-typeof)
  >
  > defined in: [`rules/eslint/errors`](https://github.com/7Geese/eslint-config-7geese/blob/master/rules/eslint/errors/on.js)

  ```js
  // N'est pas:
  typeof foo === 'not a real type';

  // Instead do this:
  typeof foo === 'number';
  ```

  > Why?
  >
  > String comparisons to typeof can only evaluate as `true` if they are one of `'undefined'`, `'object'`, `'boolean'`, `'number'`, `'string'`, `'function'`, or `'symbol'`.
  > In addition, we enforce `requireStringLiterals`, meaning typeof expressions are only to be compared with string literals or other typeof expressions, disallowing comparisons to any other value.

[**☝️ Back to top**](https://github.com/7Geese/eslint-config-7geese/blob/master/docs/styleguide.md#table-of-contents)


## Variables & References

<a name="references--one-var"></a><a name="2.1"></a>
- [2.1](#references--one-var) Use only one variable declaration for each variable you wish to define.

  > eslint: [`one-var`](http://eslint.org/docs/rules/one-var)
  >
  > defined in: [`rules/eslint/style`](https://github.com/7Geese/eslint-config-7geese/blob/master/rules/eslint/style/on.js)

  ```js
  // N'est pas:
  const a, b;

  // Instead do this:
  const a;
  const b;
  ```

  > Why?
  >
  > 7Geese preference, one variable per line is more explicit. You can also step through each declaration with the debugger, instead of jumping through all of them at once.

<a name="references--prefer-const"></a><a name="2.2"></a>
- [2.2](#references--prefer-const) Use `const` for all of your references; do not use `var` and avoid using `let`.

  > eslint: [`prefer-const`](http://eslint.org/docs/rules/prefer-const)
  >
  > defined in: [`rules/eslint/es6`](https://github.com/7Geese/eslint-config-7geese/blob/master/rules/eslint/es6/on.js)

  ```js
  // N'est pas:
  var a = 1;
  let b = 2;

  let { first, last } = user; /*
    error:
    - 'first' is never reassigned, use 'const' instead.
    - 'last' is never reassigned, use 'const' instead.
  */


  // Instead do this:
  const a = 1;
  const b = 2;

  const { first, last } = user;
  ```

  > Why?
  >
  > This ensures that you can't reassign your references, which can lead to bugs and difficult to comprehend code.
  > Note that we have set the [`destructuring`](https://eslint.org/docs/rules/prefer-const#destructuring) argument to `'all'` for this rule.
  > Note that we have enabled the [`ignoreReadBeforeAssign`](https://eslint.org/docs/rules/prefer-const#ignorereadbeforeassign) argument for this rule.

<a name="references--no-var"></a><a name="2.3"></a>
- [2.3](#references--no-var) If you must reassign references, use `let` instead of `var`.

  > eslint: [`no-var`](http://eslint.org/docs/rules/no-var)
  >
  > defined in: [`rules/eslint/style`](https://github.com/7Geese/eslint-config-7geese/blob/master/rules/eslint/style/on.js)

  ```js
  // N'est pas:
  var count = 1;
  if (true) {
    count += 1;
  }

  // Instead do this:
  let count = 1;
  if (true) {
    count += 1;
  }
  ```

  > Why?
  >
  > `let` is block-scoped rather than function-scoped like `var`. Read more in this [blog post](https://hackernoon.com/why-you-shouldnt-use-var-anymore-f109a58b9b70)

<a name="references--block-scope"></a><a name="2.4"></a>
- [2.4](#references--block-scope) Note that both `let` and `const` are block-scoped.

  ```js
  // const and let only exist in the blocks they are defined in.
  {
    let a = 1;
    let b = 1;
  }
  console.log(a); // ReferenceError
  console.log(b); // ReferenceError
  ```

<a name="variables--no-undef"></a><a name="2.5"></a>
- [2.5](#variables--no-undef) Do not initialize a variable to `undefined`. No using undefined variables in JSX.

  > eslint:
  > - [`no-undef`](http://eslint.org/docs/rules/no-undef)
  > - [`no-undef-init`](http://eslint.org/docs/rules/no-undef-init)
  > - [`jsx-no-undef`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md)
  >
  > defined in:
  > - [`rules/eslint/variables`](https://github.com/7Geese/eslint-config-7geese/blob/master/rules/eslint/variables/on.js)
  > - [`rules/react`](https://github.com/7Geese/eslint-config-7geese/blob/master/rules/react/on.js)

  ```jsx
  // N'est pas:
  let notSureYet = undefined;

  // Instead do this:
  let notSureYet;


  // N'est pas:
  const MyComponent = () => (
      <Button>Click Me!</Button>
  );

  // Instead do this:
  import Button from '7g-components/button/button.jsx';

  const MyComponent = () => (
      <Button>Click Me!</Button>
  );
  ```

  > Why?
  >
  > Variables that aren't defined get hoisted to the global scope. Variables without a value at initialization are `undefined` by default.

<a name="variables--const-let-group"></a><a name="2.6"></a>
- [2.6](#variables--const-let-group) Group all your `const`s and then group all your `let`s. `const`s group should come first.

  ```js
  // N'est pas:
  let i;
  const questions = getQuestionSet();
  let keyResults;
  const isAdmin = true;
  let len;

  // Instead do this:
  const isAdmin = true;
  const questions = getQuestionSet();
  let i;
  let keyResults;
  let len;
  ```

  > Why?
  >
  > This is helpful when later on you might need to assign a variable depending on one of the previous assigned variables.

<a name="variables--define-where-used"></a><a name="2.7"></a>
- [2.7](#variables--define-where-used) Assign variables where you need them, but place them in a reasonable place.

  ```js
  // N'est pas:
  function checkName(hasName) {
    const name = getName(); // unnecessary function call

    if (hasName === 'test') {
      return false;
    }

    if (name === 'test') {
      this.setName('');
      return false;
    }

    return name;
  }

  // Instead do this:
  function checkName(hasName) {
    if (hasName === 'test') {
      return false;
    }

    const name = getName();

    if (name === 'test') {
      this.setName('');
      return false;
    }

    return name;
  }
  ```

  > Why?
  >
  > `let` and `const` are block scoped and not function scoped.

<a name="variables--no-chain-assignment"></a><a name="2.8"></a>
- [2.8](#variables--no-chain-assignment) Don't chain variable assignments.

  ```js
  // N'est pas:
  (function example() {
    // JavaScript interprets this as:
    // let a = ( b = ( c = 1 ) );
    // The let keyword only applies to variable a; variables b and c become global variables.
    let a = b = c = 1;
  }());

  console.log(a); // undefined
  console.log(b); // 1
  console.log(c); // 1

  // Instead do this:
  (function example() {
    let a = 1;
    let b = a;
    let c = a;
  }());

  console.log(a); // undefined
  console.log(b); // undefined
  console.log(c); // undefined

  // the same applies for `const`
  ```

  > Why?
  >
  > Chaining variable assignments creates implicit global variables.

<a name="variables--switch-blocks"></a><a name="2.9"></a>
- [2.9](#variables--switch-blocks) Use braces to create blocks in `case` and `default` clauses that contain lexical declarations (e.g. `let`, `const`, `function`, and `class`).

  > eslint: [`no-case-declarations`](http://eslint.org/docs/rules/no-case-declarations.html)
  >
  > defined in: [`rules/eslint/best-practices`](https://github.com/7Geese/eslint-config-7geese/blob/master/rules/eslint/es6/on.js)

  ```js
  // N'est pas:
  switch (foo) {
    case 1:
      let x = 1;
      break;
    case 2:
      const y = 2;
      break;
    case 3:
      function f() {}
      break;
  }

  // Instead do this:
  switch (foo) {
    case 1: {
      let x = 1;
      break;
    }
    case 2: {
      const y = 2;
      break;
    }
    case 3: {
      function f() {}
      break;
    }
  }
  ```

  > Why?
  >
  > Lexical declarations are visible in the entire `switch` block but only get initialized when assigned, which only happens when its `case` is reached. This causes problems when multiple `case` clauses attempt to define the same thing. A better strategy is to avoid using switch if you need to declare variables conditionally.

<a name="variables--no-native-reassign"></a><a name="2.10"></a>
- [2.10](#variables--no-native-reassign) Do not reassign native variables.

  > eslint: [`no-native-reassign`](http://eslint.org/docs/rules/no-native-reassign)
  >
  > defined in: [`rules/eslint/best-practices`](https://github.com/7Geese/eslint-config-7geese/blob/master/rules/eslint/es6/on.js)

  ```js
  // N'est pas:
  window = {};
  undefined = 1;
  ```

  > Why?
  >
  > There are several variables like `window` that are defined by the environment and should not be changed.

<a name="variables--no-redeclare"></a><a name="2.11"></a>
- [2.11](#variables--no-redeclare) Do not declare the same variable more than once in the same scope.

  > eslint: [`no-redeclare`](http://eslint.org/docs/rules/no-redeclare)
  >
  > defined in: [`rules/eslint/best-practices`](https://github.com/7Geese/eslint-config-7geese/blob/master/rules/eslint/es6/on.js)

  ```js
  // N'est pas:
  let first = 'Bruce';
  let first = 'Wendy';

  // Instead do this:
  let first = 'Bruce';
  first = 'Wendy';
  ```

  > Why?
  >
  > Multiple declarations of the same variable can lead to confusion.

<a name="variables--unused"></a><a name="2.12"></a>
- [2.12](#variables--unused) Don't leave variables unused.

  > eslint: [`no-unused-vars`](http://eslint.org/docs/rules/no-unused-vars)
  >
  > defined in: [`rules/eslint/variables`](https://github.com/7Geese/eslint-config-7geese/blob/master/rules/eslint/variables/on.js)

  ```js
  // N'est pas:
  const x = "unused";
  /* end of script */
  ```

  > Why?
  >
  > Unused variables are extra unnecessary clutter.

<a name="variables--unused-expressions"></a><a name="2.13"></a>
- [2.13](#variables--unused-expresions) Do not leave expressions unused.

  > eslint: [`no-unused-expressions`](https://eslint.org/docs/rules/no-unused-expressions)
  >
  > defined in: [`rules/eslint/best-practices`](https://github.com/7Geese/eslint-config-7geese/blob/master/rules/eslint/es6/on.js)

  ```js
  // N'est pas:
  n + 1;
  0;
  'string';
  ```

  > Why?
  >
  > Unused expressions have no effect on the program.

<a name="variables--operator-shorthand"></a><a name="2.14"></a>
- [2.14](#variables--operator-shorthand) Use operator shorthand whenever possible.

  > eslint: [`operator-assignment`](http://eslint.org/docs/rules/operator-assignment)
  >
  > defined in: [`rules/eslint/style`](https://github.com/7Geese/eslint-config-7geese/blob/master/rules/eslint/style/on.js)

  Use       | Instead of
  ----------|------------
  x += y    | x = x + y
  x -= y    | x = x - y
  x *= y    | x = x * y
  x /= y    | x = x / y
  x %= y    | x = x % y

  > Why?
  >
  > Operator assignment shorthand is more concise.

<a name="variables--labels"></a><a name="2.15"></a>
- [2.15](#variables--labels) Do not use a label with the same name as a variable in scope.

  > eslint: [`no-label-var`](http://eslint.org/docs/rules/no-label-var)
  >
  > defined in: [`rules/eslint/variables`](https://github.com/7Geese/eslint-config-7geese/blob/master/rules/eslint/variables/on.js)

  ```js
  // N'est pas:
  const first = 0;

  while (true) {
    first:
      while (true) {
        break first;
      }
  }
  ```

  > Why?
  >
  > Labels with the same name as a variable can be confused.

<a name="variables--no-shadow"></a><a name="2.16"></a>
- [2.16](#variables--no-shadow) Do not name a variable the same as a variable in the outer scope.

  > eslint: [`no-shadow`](http://eslint.org/docs/rules/no-shadow)
  >
  > defined in: [`rules/eslint/variables`](https://github.com/7Geese/eslint-config-7geese/blob/master/rules/eslint/variables/on.js)

  ```js
  // N'est pas:
  let a = 3;
  function() {
    let a = 4;
  }
  ```

  > Why?
  >
  > This can be confusing and the variable in the outer scope is no longer accessible from the inner scope.

<a name="variables--no-const-assign"></a><a name="2.17"></a>
- [2.17](http://eslint.org/docs/rules/no-const-assign)

  > eslint: [`no-const-assign`](http://eslint.org/docs/rules/no-const-assign)
  >
  > defined in: [`rules/eslint/best-practices`](https://github.com/7Geese/eslint-config-7geese/blob/master/rules/eslint/es6/on.js)

  ```js
  // N'est pas:
  const doNotChange = 'not changing';
  doNotChange = 'trying to change';
  ```

  > Why?
  >
  > Changing a `const` assignment will result in a runtime error.

[**☝️ Back to top**](https://github.com/7Geese/eslint-config-7geese/blob/master/docs/styleguide.md#table-of-contents)
