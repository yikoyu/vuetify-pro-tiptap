import { CharacterCountOptions } from '@tiptap/extension-character-count';
import { DropcursorOptions } from '@tiptap/extension-dropcursor';
import { FocusOptions } from '@tiptap/extension-focus';
import { HardBreakOptions } from '@tiptap/extension-hard-break';
import { ListItemOptions } from '@tiptap/extension-list-item';
import { ParagraphOptions } from '@tiptap/extension-paragraph';
import { PlaceholderOptions } from '@tiptap/extension-placeholder';
import { TextStyleOptions } from '@tiptap/extension-text-style';
import { BubbleOptions } from './components/bubble';
import { Extension } from '@tiptap/core';
/**
 * Represents the interface for options in the base toolkit.
 */
export interface BaseKitOptions {
    /**
     * Whether to enable the document option.
     * - `undefined` (default): Enable with default settings.
     * - `false`: Disable.
     *
     * @default undefined
     */
    document?: false;
    /**
     * Whether to enable the text option.
     * - `undefined` (default): Enable with default settings.
     * - `false`: Disable.
     *
     * @default undefined
     */
    text?: false;
    /**
     * Whether to enable the Gapcursor.
     * - `undefined` (default): Enable with default settings.
     * - `false`: Disable.
     *
     * @default undefined
     */
    gapcursor?: false;
    /**
     * Dropcursor options or `false` to disable.
     * - `undefined` (default): Enable with default settings.
     * - `false`: Disable.
     * - `Partial<DropcursorOptions>`: Enable with custom options.
     *
     * @default undefined
     */
    dropcursor?: Partial<DropcursorOptions> | false;
    /**
     * Character count options or `false` to disable.
     * - `undefined` (default): Enable with default settings.
     * - `false`: Disable.
     * - `Partial<CharacterCountOptions>`: Enable with custom options.
     *
     * @default undefined
     */
    characterCount?: Partial<CharacterCountOptions> | false;
    /**
     * HardBreak options or `false` to disable.
     * - `undefined` (default): Enable with default settings.
     * - `false`: Disable.
     * - `Partial<HardBreakOptions>`: Enable with custom options.
     *
     * @default undefined
     */
    hardBreak?: Partial<HardBreakOptions> | false;
    /**
     * Placeholder options or `false` to disable.
     * - `undefined` (default): Enable with default settings.
     * - `false`: Disable.
     * - `Partial<PlaceholderOptions>`: Enable with custom options.
     *
     * @default undefined
     */
    placeholder?: Partial<PlaceholderOptions> | false;
    /**
     * Paragraph options or `false` to disable.
     * - `undefined` (default): Enable with default settings.
     * - `false`: Disable.
     * - `Partial<ParagraphOptions>`: Enable with custom options.
     *
     * @default undefined
     */
    paragraph?: Partial<ParagraphOptions> | false;
    /**
     * Focus options or `false` to disable.
     * - `undefined` (default): Enable with default settings.
     * - `false`: Disable.
     * - `Partial<FocusOptions>`: Enable with custom options.
     *
     * @default undefined
     */
    focus?: Partial<FocusOptions> | false;
    /**
     * ListItem options or `false` to disable.
     * - `undefined` (default): Enable with default settings.
     * - `false`: Disable.
     * - `Partial<ListItemOptions>`: Enable with custom options.
     *
     * @default undefined
     */
    listItem?: Partial<ListItemOptions> | false;
    /**
     * Text Style options or `false` to disable.
     * - `undefined` (default): Enable with default settings.
     * - `false`: Disable.
     * - `Partial<TextStyleOptions>`: Enable with custom options.
     *
     * @default undefined
     */
    textStyle?: Partial<TextStyleOptions> | false;
    /**
     * Bubble options, taking `BubbleOptions<BaseKitOptions>` as parameters, indicating whether to enable the bubble functionality
     */
    bubble: Partial<BubbleOptions<BaseKitOptions>>;
}
export declare const BaseKit: Extension<BaseKitOptions, any>;
