import { GeneralOptions } from '../type';
import { OrderedListOptions as TiptapOrderedListOptions } from '@tiptap/extension-ordered-list';
export interface OrderedListOptions extends TiptapOrderedListOptions, GeneralOptions<OrderedListOptions> {
    /** HTML attributes that should be allowed on ordered list elements */
    allowedAttributes?: string[];
}
export declare const OrderedList: import('@tiptap/core').Node<OrderedListOptions, any>;
