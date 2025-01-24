import { GeneralOptions } from '../type';
import { OrderedListOptions as TiptapOrderedListOptions } from '@tiptap/extension-ordered-list';
export interface OrderedListOptions extends TiptapOrderedListOptions, GeneralOptions<OrderedListOptions> {
}
export declare const OrderedList: import('@tiptap/core').Node<OrderedListOptions, any>;
