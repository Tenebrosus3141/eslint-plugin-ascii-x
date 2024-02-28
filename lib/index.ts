import type { ESLint, Rule } from "eslint";

import ascii from "./rules/ascii.js";


export default {
    rules: {
        ascii,
    },
} satisfies ESLint.Plugin & { rules: Record<string, Rule.RuleModule> };
