/** A Vuetify validation rule: returns `true` when valid, otherwise an error message */
export type HrefRule = (value: string) => boolean | string;
/**
 * A serializable rule, so it can be passed as JSON (e.g. from the Go side).
 * The value is valid when it matches `pattern` (or does not match it, when `negate` is set).
 */
export interface HrefRuleDescriptor {
    pattern: string;
    flags?: string;
    negate?: boolean;
    message: string;
}
/**
 * Rules for validating hrefs in the link/video dialog. Accepts:
 * - an array of rule functions and/or rule descriptors
 * - a JSON string of rule descriptors
 * - (deprecated) the legacy JS string form, e.g. `[value => !/^http:\/\//.test(value) || "message"]`;
 *   only `value => [!]/regex/.test(value) || "message"` rules are understood, it is never evaluated
 */
export type HrefRules = string | Array<HrefRule | HrefRuleDescriptor>;
export declare function normalizeHrefRules(hrefRules: HrefRules | undefined): HrefRule[];
export declare function useHrefRules(props: {
    hrefRules?: HrefRules;
}): import('vue').ComputedRef<HrefRule[]>;
