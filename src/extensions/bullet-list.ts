import type { GeneralOptions } from '@/type'
import type { BulletListOptions as TiptapBulletListOptions } from '@tiptap/extension-bullet-list'

import { BulletList as TiptapBulletList } from '@tiptap/extension-bullet-list'

import { BulletListActionButton } from './components/ActionButton'

export interface BulletListOptions extends TiptapBulletListOptions, GeneralOptions<BulletListOptions> {}

export const BulletList = /* @__PURE__*/ TiptapBulletList.extend<BulletListOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      itemTypeName: 'listItem',
      keepMarks: false,
      HTMLAttributes: {},
      keepAttributes: false,
      button: ({ editor, t }) => ({
        component: BulletListActionButton,
        componentProps: {
          editor,
          t
        }
      })
    }
  }
})
