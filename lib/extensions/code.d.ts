import { GeneralOptions } from '../type';
import { CodeOptions as TiptapCodeOptions } from '@tiptap/extension-code';
export interface CodeOptions extends TiptapCodeOptions, GeneralOptions<CodeOptions> {
}
export declare const Code: import('@tiptap/core').Mark<CodeOptions, any>;
