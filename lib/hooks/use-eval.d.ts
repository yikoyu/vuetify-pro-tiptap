import { ComputedRef } from 'vue';
export declare function useEval(type: string[], props: {
    hrefRules: string;
}): {
    evalHrefRules: [] | ComputedRef<any>;
};
