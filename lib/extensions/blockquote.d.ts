import { GeneralOptions } from '../type';
import { BlockquoteOptions as TiptapBlockquoteOptions } from '@tiptap/extension-blockquote';
export interface BlockquoteOptions extends TiptapBlockquoteOptions, GeneralOptions<BlockquoteOptions> {
    /** HTML attributes that should be allowed on blockquote elements */
    allowedAttributes?: string[];
}
export declare const Blockquote: import('@tiptap/core').Node<BlockquoteOptions, any>;
