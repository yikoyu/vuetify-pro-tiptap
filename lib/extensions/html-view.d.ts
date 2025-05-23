import { GeneralOptions } from '../type';
import { Extension } from '@tiptap/core';
export interface HtmlViewOptions extends GeneralOptions<HtmlViewOptions> {
    /** Global HTML attributes that can be inherited by other extensions */
    allowedAttributes?: string[];
}
export declare const HtmlView: Extension<HtmlViewOptions, any>;
