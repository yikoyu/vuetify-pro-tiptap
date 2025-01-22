import { GeneralOptions } from '../type';
import { LinkOptions as TiptapLinkOptions } from '@tiptap/extension-link';
/**
 * Represents the interface for link options, extending TiptapLinkOptions and GeneralOptions.
 */
export interface LinkOptions extends TiptapLinkOptions, GeneralOptions<LinkOptions> {
    /** Component for the link dialog */
    dialogComponent: any;
    hrefRules: string;
}
export declare const Link: import('@tiptap/core').Mark<LinkOptions, any>;
