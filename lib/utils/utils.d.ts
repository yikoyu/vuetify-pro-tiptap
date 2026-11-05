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
/**
 * Resolves an href taken from the document into one that is safe to open, or
 * null if it is not.
 *
 * A link mark's href is document content, so whoever authored the document
 * chose it -- not necessarily the person who clicks it. window.open on a
 * javascript: href runs that script, so the scheme has to be checked before
 * navigating.
 *
 * The check parses rather than pattern-matches, because the URL parser strips
 * tab, LF and CR before reading the scheme: "java\tscript:alert(1)" is a
 * javascript: URL to the browser while a prefix test on the raw string sees
 * something else entirely. For the same reason this returns the parsed href,
 * so callers navigate to exactly what was validated.
 */
export declare function safeLinkHref(href: string): string | null;
export { differenceBy, isEqual, throttle } from 'lodash-unified';
