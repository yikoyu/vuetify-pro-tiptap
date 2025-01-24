import { GeneralOptions } from '../type';
import { ImageOptions as TiptapImageOptions } from '@tiptap/extension-image';
import { Display, ImageAttrsOptions, ImageTab, ImageTabKey } from './components/image/types';
/**
 * Represents the type for the upload function, which takes a File parameter and returns a Promise of type string.
 */
type Upload = (file: File) => Promise<string>;
/**
 * Represents the interface for image options, extending TiptapImageOptions and GeneralOptions.
 */
export interface ImageOptions extends TiptapImageOptions, GeneralOptions<ImageOptions> {
    /** Function for uploading images */
    upload?: Upload;
    /** image default width */
    width?: string | number;
    /** image default display */
    display: Display;
    /** List of image tabs */
    imageTabs: ImageTab[];
    /** List of hidden image tab keys */
    hiddenTabs: ImageTabKey[];
    /** Component for the image dialog */
    dialogComponent: any;
}
/**
 * Represents the interface for options to set image attributes, extending ImageAttrsOptions and including the src property.
 */
interface SetImageAttrsOptions extends ImageAttrsOptions {
    /** The source URL of the image. */
    src: string;
}
declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        imageResize: {
            /**
             * Add an image
             */
            setImage: (options: Partial<SetImageAttrsOptions>) => ReturnType;
            /**
             * Update an image
             */
            updateImage: (options: Partial<SetImageAttrsOptions>) => ReturnType;
        };
    }
}
export declare const Image: import('@tiptap/vue-3').Node<ImageOptions, any>;
export {};
