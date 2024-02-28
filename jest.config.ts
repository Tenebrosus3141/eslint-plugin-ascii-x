import type { JestConfigWithTsJest } from "ts-jest";


export default {
    preset: "ts-jest/presets/default-esm",
    testEnvironment: "node",
    transform: {
        [/^.+\.[tj]s?$/.source]: [
            "ts-jest",
            {
                tsconfig: "<rootDir>/tests/tsconfig.json",
            },
        ],
    },

    // silent: true,
    testMatch: ["<rootDir>/tests/**/*.(spec|test).[jt]s"],
} satisfies JestConfigWithTsJest;
