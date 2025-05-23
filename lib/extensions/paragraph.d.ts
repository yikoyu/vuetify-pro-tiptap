import { GeneralOptions } from '../type';
import { ParagraphOptions as TiptapParagraphOptions } from '@tiptap/extension-paragraph';
export interface ParagraphOptions extends TiptapParagraphOptions, GeneralOptions<ParagraphOptions> {
    /** HTML attributes that should be allowed on paragraph elements */
    allowedAttributes?: string[];
}
export declare const Paragraph: import('@tiptap/core').Node<ParagraphOptions, any>;
