import { Editor } from '@tiptap/core';
export declare function clamp(val: number, min: number, max: number): number;
export declare const isNumber: (value: unknown) => value is number;
export declare const isString: (value: unknown) => value is string;
export declare const isBoolean: (value: unknown) => value is boolean;
export declare const isFunction: (value: unknown) => value is Function;
export declare const getCssUnitWithDefault: (value?: string | number, defaultUnit?: string) => string | number | undefined;
/**
 * Checks if the editor has a specific extension method with the given name.
 *
 * @param {Editor} editor - An instance of the editor.
 * @param {string} name - The name of the extension method.
 * @returns {boolean} - Returns true if the specified extension method is present, otherwise returns false.
 */
export declare function hasExtension(editor: Editor, name: string): boolean;
export { differenceBy, isEqual, throttle } from 'lodash-unified';
