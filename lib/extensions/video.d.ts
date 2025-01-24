import { GeneralOptions } from '../type';
import { Node } from '@tiptap/core';
/**
 * Represents the interface for video options, extending GeneralOptions.
 */
export interface VideoOptions extends GeneralOptions<VideoOptions> {
    /**
     * Indicates whether fullscreen play is allowed
     *
     * @default true
     */
    allowFullscreen: boolean;
    /**
     * Indicates whether to display the frameborder
     *
     * @default false
     */
    frameborder: boolean;
    /**
     * Width of the video, can be a number or string
     *
     * @default VIDEO_SIZE['size-medium']
     */
    width: number | string;
    /** HTML attributes object for passing additional attributes */
    HTMLAttributes: {
        [key: string]: any;
    };
    /** Component for the video dialog */
    dialogComponent: any;
}
/**
 * Represents the type for setting video options
 */
type SetVideoOptions = {
    /** The source URL of the video */
    src: string;
    /** The width of the video */
    width: string | number;
};
declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        video: {
            /**
             * Add an video
             */
            setVideo: (options: Partial<SetVideoOptions>) => ReturnType;
            /**
             * Update an video
             */
            updateVideo: (options: Partial<SetVideoOptions>) => ReturnType;
        };
    }
}
export declare const Video: Node<VideoOptions, any>;
export {};
