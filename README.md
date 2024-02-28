# eslint-plugin-ascii-x

**ASCII** fi**X**er

ESLint plugin to delete or escape non-ASCII characters, using autofixes

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
