import { GeneralOptions } from '../type';
import { Extension } from '@tiptap/core';
/**
 * Represents the interface for fullscreen options, extending GeneralOptions.
 */
export interface FullscreenOptions extends GeneralOptions<FullscreenOptions> {
    /**
     * Indicates whether to use window fullscreen mode
     *
     * @default false
     */
    useWindow: boolean;
}
export declare const Fullscreen: Extension<FullscreenOptions, any>;
