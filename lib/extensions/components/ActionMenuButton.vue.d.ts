import { ButtonViewReturnComponentProps } from '../../type';
import { Editor } from '@tiptap/vue-3';
import { StyleValue } from 'vue';
import { IconsOptions } from '../../constants/icons';
export interface Item {
    title: string;
    icon?: keyof IconsOptions;
    isActive: NonNullable<ButtonViewReturnComponentProps['isActive']>;
    action?: ButtonViewReturnComponentProps['action'];
    style?: StyleValue;
    disabled?: boolean;
    divider?: boolean;
    default?: boolean;
}
interface Props {
    editor: Editor;
    disabled?: boolean;
    color?: string;
    maxHeight?: string | number;
    icon?: keyof IconsOptions;
    tooltip?: string;
    items?: Item[];
}
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    disabled: boolean;
    color: undefined;
    maxHeight: undefined;
    icon: undefined;
    tooltip: string;
    items: () => never[];
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    disabled: boolean;
    color: undefined;
    maxHeight: undefined;
    icon: undefined;
    tooltip: string;
    items: () => never[];
}>>> & Readonly<{}>, {
    color: string;
    icon: keyof IconsOptions;
    tooltip: string;
    disabled: boolean;
    maxHeight: string | number;
    items: Item[];
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
