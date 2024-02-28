import terser from "@rollup/plugin-terser";
import { nodeExternals } from "rollup-plugin-node-externals";
import ts from "rollup-plugin-ts";


/** @type {import('rollup').RollupOptions} */
export default {
    input: "./lib/index.ts",
    output: {
        dir: "./dist",
        format: "cjs",
    },
    plugins: [
        nodeExternals(),
        ts({
            tsconfig: "./lib/tsconfig.json",
        }),
        terser({
        }),
    ],
};
