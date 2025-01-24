import { GeneralOptions } from '../type';
import { StrikeOptions as TiptapStrikeOptions } from '@tiptap/extension-strike';
export interface StrikeOptions extends TiptapStrikeOptions, GeneralOptions<StrikeOptions> {
}
export declare const Strike: import('@tiptap/core').Mark<StrikeOptions, any>;
