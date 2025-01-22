import { GeneralOptions } from '../type';
import { CodeBlockOptions as TiptapCodeBlockOptions } from '@tiptap/extension-code-block';
export interface CodeBlockOptions extends TiptapCodeBlockOptions, GeneralOptions<CodeBlockOptions> {
}
export declare const CodeBlock: import('@tiptap/core').Node<CodeBlockOptions, any>;
