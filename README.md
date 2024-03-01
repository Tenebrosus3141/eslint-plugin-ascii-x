# ASCII fiXer (`eslint-plugin-ascii-x`)

[![NPM Version](https://img.shields.io/npm/v/eslint-plugin-ascii-x?logo=npm&logoColor=white&color=CB3837
)](https://www.npmjs.com/package/eslint-plugin-ascii-x) [![ESLint Version](https://img.shields.io/npm/dependency-version/eslint-plugin-ascii-x/peer/eslint?logo=eslint&logoColor=white&color=4B32C3)](https://www.npmjs.com/package/eslint) [![Node Current](https://img.shields.io/node/v/eslint-plugin-ascii-x?logo=node.js&logoColor=white&color=339933)](https://nodejs.org/)


ESLint plugin to delete or escape non-ASCII characters, using autofixes

## Example using rule (`ascii-x/ascii`)

Example of **original** code:

```js
/** foo 🅱ar */
console.log("¡Hello World!🏳️‍🌈");
let a = 2; // 🦊Answer
console.log(`🔢1+1=${a}`);
```

Example of **corrected** code:

```js
/** foo ar */
console.log("\xA1Hello World!\u{1F3F3}\uFE0F\u200D\u{1F308}");
const a = 2; // Answer
console.log(`\u{1F522}1+1=${a}`);
```


## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-ascii-x`:

```sh
npm install eslint-plugin-ascii-x --save-dev
```

## Usage

Add `ascii-x` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "ascii-x"
    ]
}
```


Then configure the rule.

```json
{
    "rules": {
        "ascii-x/ascii": "error"
    }
}
```


## Rules

<!-- begin auto-generated rules list -->

🔧 Automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/user-guide/command-line-interface#--fix).

| Name                         | Description   | 🔧 |
| :--------------------------- | :------------ | :- |
| [ascii](https://github.com/Tenebrosus3141/eslint-plugin-ascii-x/blob/master/docs/rules/ascii.md) | Enforce ASCII | 🔧 |

<!-- end auto-generated rules list -->

## Planned Features

* Separate rules for comments and strings
* Whitelist characters
* Suggest other replacements (e.g. left/right quotes)

## Acknowledgements

* Inspired by [eslint-plugin-only-ascii](https://www.npmjs.com/package/eslint-plugin-only-ascii), [eslint-plugin-ascii](https://www.npmjs.com/package/eslint-plugin-ascii), and [eslint-plugin-escape](https://www.npmjs.com/package/eslint-plugin-escape)

* Inspired by [VSCode](https://code.visualstudio.com/)'s "Non Basic ASCII" setting
