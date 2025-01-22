import { GeneralOptions } from '../type';
import { HeadingOptions as TiptapHeadingOptions } from '@tiptap/extension-heading';
export interface HeadingOptions extends TiptapHeadingOptions, GeneralOptions<HeadingOptions> {
}
export declare const Heading: import('@tiptap/core').Node<HeadingOptions, any>;
