import { AnyExtension, JSONContent } from '@tiptap/core';
import { IWhiteList } from 'xss';
interface Props {
    value?: string | JSONContent;
    dark?: boolean;
    dense?: boolean;
    markdownTheme?: string | false;
    xssOptions?: IWhiteList;
    /**
     * Allowed iframe `src` values: a string matches as a URL prefix, a RegExp is tested against the src.
     * Iframes whose src does not match are rendered without src. Not set means no restriction.
     */
    iframeSrcWhitelist?: Array<string | RegExp>;
    extensions?: AnyExtension[];
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        before?(_: {}): any;
        after?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    value: string;
    dark: undefined;
    dense: boolean;
    markdownTheme: undefined;
    xssOptions: () => IWhiteList;
    iframeSrcWhitelist: undefined;
    extensions: () => never[];
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    value: string;
    dark: undefined;
    dense: boolean;
    markdownTheme: undefined;
    xssOptions: () => IWhiteList;
    iframeSrcWhitelist: undefined;
    extensions: () => never[];
}>>> & Readonly<{}>, {
    markdownTheme: string | false;
    extensions: AnyExtension[];
    value: string | JSONContent;
    dark: boolean;
    dense: boolean;
    xssOptions: IWhiteList;
    iframeSrcWhitelist: Array<string | RegExp>;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_PrettifyLocal<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToOption<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
type __VLS_PrettifyLocal<T> = {
    [K in keyof T]: T[K];
} & {};
