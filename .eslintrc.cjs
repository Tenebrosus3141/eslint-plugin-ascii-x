"use strict";

const stylistic = require("@stylistic/eslint-plugin");


const stylisticCustomized = stylistic.configs.customize({
    flat: false,
    indent: 4,
    quotes: "double",
    semi: true,
    arrowParens: false,
    braceStyle: "1tbs",
    blockSpacing: true,
    quoteProps: "as-needed",
    commaDangle: "always-multiline",
});

/** @type {import("eslint").Linter.Config} */
module.exports = {
    root: true,
    env: {
        node: true,
    },
    plugins: [
        "self",
        "@typescript-eslint",
        "@stylistic",
        "import",
        "n",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        project: ["./tsconfig-configs.json", "./lib/tsconfig.json", "./tests/tsconfig.json"],
        tsconfigRootDir: __dirname,
    },
    settings: {
        "node": {
            version: "21.0.0",
        },
        "import/resolver": {
            typescript: true,
            node: true,
        },
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/strict-type-checked",
        "plugin:eslint-plugin/recommended",
        "plugin:import/recommended",
        "plugin:import/typescript",
        "plugin:n/recommended",
    ],
    rules: {
        "self/ascii": "error",

        "curly": ["error", "multi-or-nest", "consistent"],
        "eqeqeq": ["error", "always", { ["null"]: "ignore" }],
        "no-control-regex": "off",
        "no-lonely-if": "warn",
        "no-var": "error",
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": ["warn", { allow: ["err", "resolve", "reject"] }],
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": "error",
        "prefer-const": "warn",
        "yoda": "warn",

        ...stylisticCustomized.rules,
        "@stylistic/no-multiple-empty-lines": ["error", { max: 2, maxBOF: 0, maxEOF: 0 }],
        "@stylistic/space-before-function-paren": ["error", { anonymous: "never", asyncArrow: "always", named: "never" }],

        // "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-confusing-void-expression": "off",

        "import/first": "error",
        "import/newline-after-import": ["error", { count: 2 }],
        "import/order": ["error", {
            groups: ["builtin", "external", ["internal", "parent", "index", "sibling"], "object"],
            ["newlines-between"]: "always",
            alphabetize: { order: "asc", caseInsensitive: true },
        }],

        "n/prefer-node-protocol": "error",
        "n/no-path-concat": "error",
        "n/no-missing-import": ["error", {
            allowModules: [
                "estree", // Disable reporting estree as not found
            ],
        }],
        "n/no-sync": ["error", { allowAtRootLevel: true }],
        "n/no-unpublished-import": ["error", { // https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unpublished-import.md#ignoretypeimport
            ignoreTypeImport: true,
        }],
        "n/prefer-promises/dns": "error",
        "n/prefer-promises/fs": "error",
    },
    overrides: [
        {
            files: [".eslintrc.cjs"],
            settings: {
                // eslint-disable-next-line @stylistic/quote-props
                "n": {
                    allowModules: [
                        "@stylistic/eslint-plugin",
                    ],
                },
            },
            rules: {
                "@stylistic/quote-props": ["warn", "consistent-as-needed"],
                "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
            },
        },
        {
            files: ["rollup.config.mjs"],
            settings: {
                // eslint-disable-next-line @stylistic/quote-props
                "n": {
                    allowModules: [
                        "rollup-plugin-ts",
                        "rollup-plugin-node-externals",
                        "@rollup/plugin-terser",
                    ],
                },
            },
        },
        {
            files: ["*.cjs"],
            rules: { "@typescript-eslint/no-var-requires": "off" },
        },
        {
            files: ["./tests/**/*.spec.ts"],
            env: { jest: true },
        },
        {
            files: ["./tests/**/*.sample.js"],
            rules: {
                // "self/ascii": "off",
            },
        },
    ],
    ignorePatterns: [
        "/build",
        "/dist",
        "/tests/**/*.sample.js",
    ],
};
