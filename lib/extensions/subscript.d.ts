import { GeneralOptions } from '../type';
import { SubscriptExtensionOptions as TiptapSubscriptOptions } from '@tiptap/extension-subscript';
import { SuperscriptExtensionOptions as TiptapSuperscriptOptions } from '@tiptap/extension-superscript';
import { Extension } from '@tiptap/core';
/**
 * Represents the interface for subscript and superscript options, extending GeneralOptions.
 */
export interface SubAndSuperScriptOptions extends GeneralOptions<SubAndSuperScriptOptions> {
    /**
     * subscript options or false, indicating whether subscript is enabled
     *
     * @default true
     */
    subscript: Partial<TiptapSubscriptOptions> | false;
    /**
     * superscript options or false, indicating whether superscript is enabled
     *
     * @default true
     */
    superscript: Partial<TiptapSuperscriptOptions> | false;
}
export declare const SubAndSuperScript: Extension<SubAndSuperScriptOptions, any>;
