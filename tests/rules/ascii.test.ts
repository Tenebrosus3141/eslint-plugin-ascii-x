import fs from "node:fs";
import path from "node:path";

import { RuleTester } from "eslint";

import asciiRule, { Messages } from "../../lib/rules/ascii.ts";


(new RuleTester({ parserOptions: { ecmaVersion: 6 } })).run("ascii", asciiRule, {
    valid: [
        {
            name: "Control",
            code: fs.readFileSync(path.resolve("tests/samples/control.sample.js"), "utf-8"),
        },
    ],
    invalid: [
        {
            name: "1-digit Comment",
            code: `/** a\v b c */`,
            errors: Array(1).fill({ messageId: Messages.NON_ASCII }),
            output: `/** a b c */`,
        },
        {
            name: "1-digit String",
            code: `console.log("Hello\f World!");`,
            errors: Array(1).fill({ messageId: Messages.NON_ASCII }),
            output: `console.log("Hello\\x0C World!");`,
        },
        {
            name: "2-digit Comment",
            code: fs.readFileSync(path.resolve("tests/samples/rules/ascii/2-digit-comment.sample.js"), "utf-8"),
            errors: Array(1).fill({ messageId: Messages.NON_ASCII }),
            output: fs.readFileSync(path.resolve("tests/samples/rules/ascii/2-digit-comment-fixed.sample.js"), "utf-8"),
        },
        {
            name: "2-digit String",
            code: fs.readFileSync(path.resolve("tests/samples/rules/ascii/2-digit-string.sample.js"), "utf-8"),
            errors: Array(1).fill({ messageId: Messages.NON_ASCII }),
            output: fs.readFileSync(path.resolve("tests/samples/rules/ascii/2-digit-string-fixed.sample.js"), "utf-8"),
        },
        {
            name: "3-digit String",
            code: fs.readFileSync(path.resolve("tests/samples/rules/ascii/3-digit-string.sample.js"), "utf-8"),
            errors: Array(1).fill({ messageId: Messages.NON_ASCII }),
            output: fs.readFileSync(path.resolve("tests/samples/rules/ascii/3-digit-string-fixed.sample.js"), "utf-8"),
        },
        {
            name: "4-digit String",
            code: fs.readFileSync(path.resolve("tests/samples/rules/ascii/4-digit-string.sample.js"), "utf-8"),
            errors: Array(1).fill({ messageId: Messages.NON_ASCII }),
            output: fs.readFileSync(path.resolve("tests/samples/rules/ascii/4-digit-string-fixed.sample.js"), "utf-8"),
        },
        {
            name: "5-digit String",
            code: fs.readFileSync(path.resolve("tests/samples/rules/ascii/5-digit-string.sample.js"), "utf-8"),
            errors: Array(1).fill({ messageId: Messages.NON_ASCII }),
            output: fs.readFileSync(path.resolve("tests/samples/rules/ascii/5-digit-string-fixed.sample.js"), "utf-8"),
        },
        {
            name: "Multi-character String",
            code: fs.readFileSync(path.resolve("tests/samples/rules/ascii/multi-character-string.sample.js"), "utf-8"),
            errors: Array(3).fill({ messageId: Messages.NON_ASCII }),
            output: fs.readFileSync(path.resolve("tests/samples/rules/ascii/multi-character-string-fixed.sample.js"), "utf-8"),
        },
        {
            name: "Multi-character Comment",
            code: fs.readFileSync(path.resolve("tests/samples/rules/ascii/multi-character-comment.sample.js"), "utf-8"),
            errors: Array(3).fill({ messageId: Messages.NON_ASCII }),
            output: fs.readFileSync(path.resolve("tests/samples/rules/ascii/multi-character-comment-fixed.sample.js"), "utf-8"),
        },
        {
            name: "Multi-line String",
            code: fs.readFileSync(path.resolve("tests/samples/rules/ascii/multi-line-string.sample.js"), "utf-8"),
            errors: Array(3).fill({ messageId: Messages.NON_ASCII }),
            output: fs.readFileSync(path.resolve("tests/samples/rules/ascii/multi-line-string-fixed.sample.js"), "utf-8"),
        },
        {
            name: "Multi-line Comment",
            code: fs.readFileSync(path.resolve("tests/samples/rules/ascii/multi-line-comment.sample.js"), "utf-8"),
            errors: Array(1).fill({ messageId: Messages.NON_ASCII }),
            output: fs.readFileSync(path.resolve("tests/samples/rules/ascii/multi-line-comment-fixed.sample.js"), "utf-8"),
        },
        {
            name: "ZWJ Sequence String",
            code: fs.readFileSync(path.resolve("tests/samples/rules/ascii/zwj-string.sample.js"), "utf-8"),
            errors: Array(1).fill({ messageId: Messages.NON_ASCII }),
            output: fs.readFileSync(path.resolve("tests/samples/rules/ascii/zwj-string-fixed.sample.js"), "utf-8"),
        },
        {
            name: "Multi-ZWJ Sequence String",
            code: fs.readFileSync(path.resolve("tests/samples/rules/ascii/multi-zwj-string.sample.js"), "utf-8"),
            errors: Array(1).fill({ messageId: Messages.NON_ASCII }),
            output: fs.readFileSync(path.resolve("tests/samples/rules/ascii/multi-zwj-string-fixed.sample.js"), "utf-8"),
        },
        {
            name: "Emoji Modifier String",
            code: fs.readFileSync(path.resolve("tests/samples/rules/ascii/emoji-modifier-string.sample.js"), "utf-8"),
            errors: Array(1).fill({ messageId: Messages.NON_ASCII }),
            output: fs.readFileSync(path.resolve("tests/samples/rules/ascii/emoji-modifier-string-fixed.sample.js"), "utf-8"),
        },
        {
            name: "Flag String",
            code: fs.readFileSync(path.resolve("tests/samples/rules/ascii/flag-string.sample.js"), "utf-8"),
            errors: Array(1).fill({ messageId: Messages.NON_ASCII }),
            output: fs.readFileSync(path.resolve("tests/samples/rules/ascii/flag-string-fixed.sample.js"), "utf-8"),
        },
        {
            name: "Complex ZWJ Sequence String",
            code: fs.readFileSync(path.resolve("tests/samples/rules/ascii/complex-zwj-string.sample.js"), "utf-8"),
            errors: Array(4).fill({ messageId: Messages.NON_ASCII }),
            output: fs.readFileSync(path.resolve("tests/samples/rules/ascii/complex-zwj-string-fixed.sample.js"), "utf-8"),
        },
        {
            name: "Complex ZWJ Sequence Comment",
            code: fs.readFileSync(path.resolve("tests/samples/rules/ascii/complex-zwj-comment.sample.js"), "utf-8"),
            errors: Array(4).fill({ messageId: Messages.NON_ASCII }),
            output: fs.readFileSync(path.resolve("tests/samples/rules/ascii/complex-zwj-comment-fixed.sample.js"), "utf-8"),
        },
        {
            name: "Template Literal",
            code: fs.readFileSync(path.resolve("tests/samples/rules/ascii/template-string.sample.js"), "utf-8"),
            errors: Array(1).fill({ messageId: Messages.NON_ASCII }),
            output: fs.readFileSync(path.resolve("tests/samples/rules/ascii/template-string-fixed.sample.js"), "utf-8"),
        },
        {
            name: "Ultimate",
            code: fs.readFileSync(path.resolve("tests/samples/rules/ascii/ultimate.sample.js"), "utf-8"),
            errors: Array(14).fill({ messageId: Messages.NON_ASCII }),
            output: fs.readFileSync(path.resolve("tests/samples/rules/ascii/ultimate-fixed.sample.js"), "utf-8"),
        },
    ],
});
