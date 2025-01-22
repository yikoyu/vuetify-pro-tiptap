import { ComputedRef } from 'vue';
export declare function useMarkdownTheme(value: ComputedRef<string | false | undefined>, hooks?: (value: string) => void): {
    markdownThemeStyle: ComputedRef<{
        [x: string]: boolean;
    }>;
};
