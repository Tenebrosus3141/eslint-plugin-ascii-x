declare module "assert" {
    function notEqual<T>(actual: T, expected: null | undefined, message?: string | Error): asserts actual is NonNullable<T>;
    // Exclude null and undefined from union types, respectively
    function notStrictEqual<T>(actual: T, expected: null, message?: string | Error): asserts actual is Exclude<T, null>;
    function notStrictEqual<T>(actual: T, expected: undefined, message?: string | Error): asserts actual is Exclude<T, undefined>;
}
