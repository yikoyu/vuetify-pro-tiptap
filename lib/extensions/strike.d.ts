import { GeneralOptions } from '../type';
import { StrikeOptions as TiptapStrikeOptions } from '@tiptap/extension-strike';
export interface StrikeOptions extends TiptapStrikeOptions, GeneralOptions<StrikeOptions> {
    /** HTML attributes that should be allowed on strike elements */
    allowedAttributes?: string[];
}
export declare const Strike: import('@tiptap/core').Mark<StrikeOptions, any>;
