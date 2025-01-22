interface Props {
    modelValue?: string;
    nudgeLeft?: string | number;
    nudgeTop?: string | number;
    more?: boolean;
}
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    modelValue: string;
    nudgeLeft: number;
    nudgeTop: number;
    more: boolean;
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (color: string) => void;
    change: (color: string) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    modelValue: string;
    nudgeLeft: number;
    nudgeTop: number;
    more: boolean;
}>>> & Readonly<{
    onChange?: ((color: string) => any) | undefined;
    "onUpdate:modelValue"?: ((color: string) => any) | undefined;
}>, {
    modelValue: string;
    nudgeLeft: string | number;
    nudgeTop: string | number;
    more: boolean;
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
