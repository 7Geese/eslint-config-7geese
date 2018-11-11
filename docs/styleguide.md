# 7Geese JavaScript Style Guide

A guideline for writing JavaScript code at 7Geese.

As a team we've

## Table of Contents

1. [Types](#types)
<!--


// 7Geese
X. Directory Structure
X. Testing
X. Promises
X. React & JSX
X. Domain-specific rules (7G rules)



// From WalMart:
2. [References](#references)
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
  // bad
  typeof foo === 'not a real type';

  // good
  typeof foo === 'number';
  ```

  > Why?
  >
  > String comparisons to typeof can only evaluate as `true` if they are one of `'undefined'`, `'object'`, `'boolean'`, `'number'`, `'string'`, `'function'`, or `'symbol'`.
  > In addition, we enforce `requireStringLiterals`, meaning typeof expressions are only to be compared with string literals or other typeof expressions, disallowing comparisons to any other value.

[**☝️ Back to top**](https://github.com/7Geese/eslint-config-7geese/blob/master/docs/styleguide.md#table-of-contents)
