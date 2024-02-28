# Enforce ASCII (`ascii-x/ascii`)

🔧 This rule is automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix).

<!-- end auto-generated rule header -->

Some programmers may want to limit the source code to only use basic ASCII characters. This rule can also be useful by creating escape sequences to replace the other characters. This rule is inspired by VSCode's "Non Basic ASCII" setting.

## Rule Details

Basic ASCII characters are defined as: characters between U+0020 and U+007E, the tab character, line feed, and carriage return. Invalid characters are those that are not basic ASCII characters.

Invalid characters in comments are removed, and invalid characters in strings or template literals are replaced with escape sequences.

Characters between U+0000 and U+00FF are escaped using `\xNN`, between U+0100 and U+FFFF use `\uNNNN`, U+10000 and above use `\u{NNNNN}`


Examples of **incorrect** code for this rule:

```js
/** foo 🅱ar */
console.log("¡Hello World!🏳️‍🌈");
let a = 2; // 🦊Answer
console.log(`🔢1+1=${a}`);
```

Examples of **correct** code for this rule:

```js
/** foo ar */
console.log("\xA1Hello World!\u{1F3F3}\uFE0F\u200D\u{1F308}");
const a = 2; // Answer
console.log(`\u{1F522}1+1=${a}`);
```

## When Not To Use It

If code comments are written in a language other than English.

## Further Reading

* [Unicode chart that shows U+0020 to U+007E](https://unicode.org/charts/PDF/U0000.pdf#page=2)
