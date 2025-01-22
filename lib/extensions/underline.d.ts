import { GeneralOptions } from '../type';
import { UnderlineOptions as TiptapUnderlineOptions } from '@tiptap/extension-underline';
export interface UnderlineOptions extends TiptapUnderlineOptions, GeneralOptions<UnderlineOptions> {
}
export declare const Underline: import('@tiptap/core').Mark<UnderlineOptions, any>;
