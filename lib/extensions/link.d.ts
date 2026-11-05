import { LinkOptions as TiptapLinkOptions } from '@tiptap/extension-link';
import { HrefRules } from '../hooks/use-href-rules';
import { GeneralOptions } from '../type';
/**
 * Represents the interface for link options, extending TiptapLinkOptions and GeneralOptions.
 */
export interface LinkOptions extends TiptapLinkOptions, GeneralOptions<LinkOptions> {
    /** Component for the link dialog */
    dialogComponent: any;
    /** Validation rules for the link dialog, see `HrefRules` */
    hrefRules: HrefRules;
    /** HTML attributes that should be allowed on link elements */
    allowedAttributes?: string[];
}
export declare const Link: import('@tiptap/core').Mark<LinkOptions, any>;
