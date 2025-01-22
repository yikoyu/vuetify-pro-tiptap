import { AnyExtension } from '@tiptap/core';
/**
 * Interface representing an tiptap editor instance.
 */
interface Instance {
    /**
     * List of extensions
     *
     * @default []
     */
    extensions: AnyExtension[];
    /**
     * Default language setting
     *
     * @default DEFAULT_LANG_VALUE
     */
    defaultLang?: string;
    /**
     * Default Markdown theme setting
     *
     * @default DEFAULT_MARKDOWN_THEME_VALUE
     */
    defaultMarkdownTheme?: string;
    /**
     * Whether it is in fullscreen mode
     *
     * @default false
     */
    isFullscreen: boolean;
    /** Text color */
    color?: string;
    /** Highlight color */
    highlight?: string;
}
export declare const useProvideTiptapStore: () => {
    state: Instance;
    isFullscreen: import('vue').ComputedRef<boolean>;
    toggleFullscreen: () => void;
}, useTiptapStore: () => {
    state: Instance;
    isFullscreen: import('vue').ComputedRef<boolean>;
    toggleFullscreen: () => void;
} | undefined;
export {};
