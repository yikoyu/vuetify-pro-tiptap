import { GeneralOptions } from '../type';
import { Extension } from '@tiptap/core';
/**
 * Represents the interface for font size options, extending GeneralOptions.
 */
export interface FontSizeOptions extends GeneralOptions<FontSizeOptions> {
    types: string[];
    /**
     * List of available font size values
     *
     * @default DEFAULT_FONT_SIZE_LIST
     */
    fontSizes: number[];
}
declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        fontSize: {
            /**
             * Set the font size
             */
            setFontSize: (fontSize: string) => ReturnType;
            /**
             * Unset the font size
             */
            unsetFontSize: () => ReturnType;
        };
    }
}
export declare const FontSize: Extension<FontSizeOptions, any>;
