export interface GridSize {
    rows: number;
    cols: number;
}
export interface CreateTablePayload extends GridSize {
    withHeaderRow: boolean;
}
declare const _default: import('vue').DefineComponent<{}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "create-table": (payload: CreateTablePayload) => void;
}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{
    "onCreate-table"?: ((payload: CreateTablePayload) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
