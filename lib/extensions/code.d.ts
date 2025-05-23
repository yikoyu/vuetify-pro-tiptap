import { GeneralOptions } from '../type';
import { CodeOptions as TiptapCodeOptions } from '@tiptap/extension-code';
export interface CodeOptions extends TiptapCodeOptions, GeneralOptions<CodeOptions> {
    /** HTML attributes that should be allowed on code elements */
    allowedAttributes?: string[];
}
export declare const Code: import('@tiptap/core').Mark<CodeOptions, any>;
