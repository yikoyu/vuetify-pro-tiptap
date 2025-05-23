import { GeneralOptions } from '../type';
import { BoldOptions as TiptapImageOptions } from '@tiptap/extension-bold';
export interface BoldOptions extends TiptapImageOptions, GeneralOptions<BoldOptions> {
    /** HTML attributes that should be allowed on bold elements */
    allowedAttributes?: string[];
}
export declare const Bold: import('@tiptap/core').Mark<BoldOptions, any>;
