import { AnyExtension, Editor } from '@tiptap/vue-3';
import { VuetifyTiptapOnChange } from '../type';
interface Props {
    modelValue?: string | object;
    markdownTheme?: string | false;
    output?: 'html' | 'json' | 'text';
    dark?: boolean;
    dense?: boolean;
    outlined?: boolean;
    flat?: boolean;
    disabled?: boolean;
    label?: string;
    hideToolbar?: boolean;
    disableToolbar?: boolean;
    hideBubble?: boolean;
    removeDefaultWrapper?: boolean;
    maxWidth?: string | number;
    minHeight?: string | number;
    maxHeight?: string | number;
    extensions?: AnyExtension[];
    editorClass?: string | string[] | Record<string, any>;
    errorMessages: string | string[] | null;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        editor?(_: {
            editor: Editor;
            props: {
                class: string;
                'data-testid': string;
            };
        }): any;
        bottom?(_: {
            editor: Editor;
        }): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    modelValue: string;
    markdownTheme: undefined;
    output: string;
    dark: undefined;
    dense: boolean;
    outlined: boolean;
    flat: boolean;
    disabled: boolean;
    label: undefined;
    hideToolbar: boolean;
    disableToolbar: boolean;
    hideBubble: boolean;
    removeDefaultWrapper: boolean;
    maxWidth: undefined;
    minHeight: undefined;
    maxHeight: undefined;
    errorMessages: () => never[];
    extensions: () => never[];
    editorClass: undefined;
}>>, {
    editor: Editor;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    enter: () => void;
    change: (value: VuetifyTiptapOnChange) => void;
    "update:modelValue": (value: string | object | undefined) => void;
    "update:markdownTheme": (value: string) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    modelValue: string;
    markdownTheme: undefined;
    output: string;
    dark: undefined;
    dense: boolean;
    outlined: boolean;
    flat: boolean;
    disabled: boolean;
    label: undefined;
    hideToolbar: boolean;
    disableToolbar: boolean;
    hideBubble: boolean;
    removeDefaultWrapper: boolean;
    maxWidth: undefined;
    minHeight: undefined;
    maxHeight: undefined;
    errorMessages: () => never[];
    extensions: () => never[];
    editorClass: undefined;
}>>> & Readonly<{
    onChange?: ((value: VuetifyTiptapOnChange) => any) | undefined;
    onEnter?: (() => any) | undefined;
    "onUpdate:modelValue"?: ((value: string | object | undefined) => any) | undefined;
    "onUpdate:markdownTheme"?: ((value: string) => any) | undefined;
}>, {
    markdownTheme: string | false;
    extensions: AnyExtension[];
    flat: boolean;
    disabled: boolean;
    maxHeight: string | number;
    maxWidth: string | number;
    minHeight: string | number;
    outlined: boolean;
    modelValue: string | object;
    label: string;
    output: "html" | "json" | "text";
    dark: boolean;
    dense: boolean;
    hideToolbar: boolean;
    disableToolbar: boolean;
    hideBubble: boolean;
    removeDefaultWrapper: boolean;
    editorClass: string | string[] | Record<string, any>;
    errorMessages: string | string[] | null;
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
