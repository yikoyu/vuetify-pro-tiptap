import { GeneralOptions } from '../type';
import { ItalicOptions as TiptapItalicOptions } from '@tiptap/extension-italic';
export interface ItalicOptions extends TiptapItalicOptions, GeneralOptions<ItalicOptions> {
    /** HTML attributes that should be allowed on italic elements */
    allowedAttributes?: string[];
}
export declare const Italic: import('@tiptap/core').Mark<ItalicOptions, any>;
