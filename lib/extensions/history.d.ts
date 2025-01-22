import { GeneralOptions } from '../type';
import { HistoryOptions as TiptapHistoryOptions } from '@tiptap/extension-history';
export interface HistoryOptions extends TiptapHistoryOptions, GeneralOptions<HistoryOptions> {
}
export declare const History: import('@tiptap/core').Extension<HistoryOptions, any>;
