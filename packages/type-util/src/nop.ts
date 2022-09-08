/**
 * This is used when you do not want to execute functions, etc., but only check type by TypeScript.
 *
 * For example, if you execute a state update that contains asynchronous processing inside,
 * you will see the following error when you run the test.
 * > Can't perform a React state update on an unmounted component.
 *
 * However, to ensure that such state update functions are properly typed, the actual function call syntax must be used for type checking.
 * Therefore, by using the function call syntax within the function definition, only type checking will be performed without executing the function.
 * By doing so, the function is not executed and the error log as shown above is not output.
 *
 * @example <caption>Compatible type</caption>
 * nop(() => updateStateAsynchronously(compatibleTypeVariable))
 *
 * @example <caption>Incompatible type</caption>
 * // @ts-expect-errors - If type check should be fail, use `@ts-expect-errors`.
 * nop(() => updateStateAsynchronously(incompatibleTypeVariable))
 *
 * @param _ Function containing the syntax you want to check for types using TypeScript
 */
export const nop = (_: Function) => {};
