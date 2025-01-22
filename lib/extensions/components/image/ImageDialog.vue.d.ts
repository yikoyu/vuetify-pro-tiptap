import { Editor } from '@tiptap/vue-3';
import { ImageAttrsOptions, ImageTab, ImageTabKey } from './types';
interface Props {
    value?: ImageAttrsOptions;
    editor: Editor;
    upload?: (file: File) => Promise<string>;
    imageTabs?: ImageTab[];
    hiddenTabs?: ImageTabKey[];
    destroy?: () => void;
}
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    value: () => {};
    upload: undefined;
    imageTabs: () => never[];
    hiddenTabs: () => never[];
    destroy: undefined;
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    value: () => {};
    upload: undefined;
    imageTabs: () => never[];
    hiddenTabs: () => never[];
    destroy: undefined;
}>>> & Readonly<{}>, {
    upload: (file: File) => Promise<string>;
    value: ImageAttrsOptions;
    imageTabs: ImageTab[];
    hiddenTabs: ImageTabKey[];
    destroy: () => void;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
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
type __VLS_PrettifyLocal<T> = {
    [K in keyof T]: T[K];
} & {};
