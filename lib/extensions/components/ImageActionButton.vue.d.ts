import { IconsOptions } from '../../constants/icons';
import { Editor } from '@tiptap/vue-3';
import { ImageTab, ImageTabKey } from './image/types';
import { ButtonViewReturnComponentProps } from '../../type';
interface Props {
    editor: Editor;
    upload?: (file: File) => Promise<string>;
    imageTabs?: ImageTab[];
    hiddenTabs?: ImageTabKey[];
    icon?: keyof IconsOptions;
    tooltip?: string;
    disabled?: boolean;
    color?: string;
    action?: ButtonViewReturnComponentProps['action'];
    isActive?: ButtonViewReturnComponentProps['isActive'];
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        dialog?(_: {
            props: {
                editor: Editor;
                value: {
                    src?: string | undefined;
                    alt?: string | undefined;
                    title?: string | undefined;
                    lockAspectRatio?: boolean | undefined;
                    width?: (number | string | null) | undefined;
                    height?: (number | string | null) | undefined;
                    display?: import('./image/types').Display | undefined;
                };
                imageTabs: ImageTab[];
                hiddenTabs: ImageTabKey[];
                upload: (file: File) => Promise<string>;
            };
        }): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    upload: undefined;
    imageTabs: () => never[];
    hiddenTabs: () => never[];
    icon: undefined;
    tooltip: undefined;
    disabled: boolean;
    color: undefined;
    action: undefined;
    isActive: undefined;
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    upload: undefined;
    imageTabs: () => never[];
    hiddenTabs: () => never[];
    icon: undefined;
    tooltip: undefined;
    disabled: boolean;
    color: undefined;
    action: undefined;
    isActive: undefined;
}>>> & Readonly<{}>, {
    color: string;
    action: (value?: unknown) => void;
    isActive: () => boolean;
    icon: keyof IconsOptions;
    tooltip: string;
    upload: (file: File) => Promise<string>;
    disabled: boolean;
    imageTabs: ImageTab[];
    hiddenTabs: ImageTabKey[];
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
