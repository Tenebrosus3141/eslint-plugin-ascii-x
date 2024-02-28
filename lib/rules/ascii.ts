import { notStrictEqual as assertNotStrictEqual } from "node:assert";

import type { AST, Rule } from "eslint";
import type { BaseNodeWithoutComments, Comment } from "estree";


export const enum Messages {
    NON_ASCII = "nonAscii",
}

export default {
    meta: {
        type: "problem",
        docs: {
            description: "Enforce ASCII",
            url: "https://github.com/Tenebrosus3141/eslint-plugin-ascii-x/blob/master/docs/rules/ascii.md",
        },
        fixable: "code",
        schema: [],
        messages: {
            [Messages.NON_ASCII]: "Non-ASCII sequence '{{ text }}'",
        },
    },
    create(context) {
        return {
            "Program"(node) {
                function getInvalidSequences(token: AST.Token | Comment): IterableIterator<Required<RegExpMatchArray>> {
                    const regex = /[^\x09\x0A\x0D\x20-\x7E]+/g;
                    return token.value.matchAll(regex) as IterableIterator<Required<RegExpMatchArray>>;
                }

                function formatCodePoint(codePoint: string): string {
                    const value = codePoint.codePointAt(0);
                    assertNotStrictEqual(value, undefined);
                    if (value <= 0x0_00_FF)
                        return `\\x${value.toString(16).padStart(2, "0").toUpperCase()}`;
                    else if (value <= 0x0_FF_FF)
                        return `\\u${value.toString(16).padStart(4, "0").toUpperCase()}`;
                    else
                        return `\\u{${value.toString(16).toUpperCase()}}`;
                }

                function formatCodePoints(codePoints: string): string {
                    return [...codePoints].map(formatCodePoint).join("");
                }

                for (const token of context.sourceCode.getTokens(node, { includeComments: true }) as ((AST.Token | Comment) & { [K in keyof BaseNodeWithoutComments]-?: NonNullable<BaseNodeWithoutComments[K]> })[]) {
                    for (const match of getInvalidSequences(token)) {
                        const tokenOffset = ["Line", "Block"].includes(token.type) ? 2 : 0; // In a comment, token.value does not include the initial // or /*
                        const line = [...token.value.substring(0, match.index).matchAll(/\n/g)].length; // Count number of newline characters before match
                        const lastNewLine = token.value.lastIndexOf("\n", match.index); // Index of last newline character before match
                        let column = line !== 0 ? 0 : token.loc.start.column + tokenOffset; // If on a new line, start from column 0, else start from column of token
                        column += token.value.slice(line !== 0 ? lastNewLine + 1 : 0, match.index).length; // Calculate distance from start of new line
                        context.report({
                            messageId: Messages.NON_ASCII,
                            data: { text: formatCodePoints(match[0]) },
                            loc: {
                                start: { line: token.loc.start.line + line, column: column },
                                end: { line: token.loc.start.line + line, column: column + match[0].length },
                            },
                            fix(fixer) {
                                if (["String", "Template"].includes(token.type))
                                    return fixer.replaceTextRange([token.range[0] + match.index, token.range[0] + match.index + match[0].length], formatCodePoints(match[0]));
                                return fixer.replaceTextRange([token.range[0] + tokenOffset + match.index, token.range[0] + tokenOffset + match.index + match[0].length], "");
                            },
                        });
                    }
                }
            },
        };
    },
} satisfies Rule.RuleModule as Rule.RuleModule;
