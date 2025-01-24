import { GeneralOptions } from '../type';
import { BulletListOptions as TiptapBulletListOptions } from '@tiptap/extension-bullet-list';
export interface BulletListOptions extends TiptapBulletListOptions, GeneralOptions<BulletListOptions> {
}
export declare const BulletList: import('@tiptap/core').Node<BulletListOptions, any>;
