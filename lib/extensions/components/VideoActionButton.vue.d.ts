import { IconsOptions } from '../../constants/icons';
import { Editor } from '@tiptap/vue-3';
import { ButtonViewReturnComponentProps } from '../../type';
interface Props {
    editor: Editor;
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
                value: string | undefined;
            };
        }): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    icon: undefined;
    tooltip: undefined;
    disabled: boolean;
    color: undefined;
    action: undefined;
    isActive: undefined;
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
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
    disabled: boolean;
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
