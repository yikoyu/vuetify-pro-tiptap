import { MarkdownThemeProps } from '../constants/define';
import { GeneralOptions } from '../type';
import { Extension } from '@tiptap/core';
/**
 * Represents the interface for Markdown theme options, extending GeneralOptions.
 */
export interface MarkdownThemeOptions extends GeneralOptions<MarkdownThemeOptions> {
    /**
     * List of available Markdown theme properties
     *
     * @default DEFAULT_MARKDOWN_THEME_LIST
     */
    markdownThemes: MarkdownThemeProps[];
}
export declare const MarkdownTheme: Extension<MarkdownThemeOptions, any>;
