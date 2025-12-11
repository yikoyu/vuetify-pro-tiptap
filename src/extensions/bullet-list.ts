import type { BulletListOptions as TiptapBulletListOptions } from '@tiptap/extension-list'
import type { GeneralOptions } from '@/type'

import { BulletList as TiptapBulletList } from '@tiptap/extension-list'

import { BulletListActionButton } from './components/ActionButton'

export interface BulletListOptions extends TiptapBulletListOptions, GeneralOptions<BulletListOptions> {}

export const BulletList = /* @__PURE__ */ TiptapBulletList.extend<BulletListOptions>({
  addOptions() {
    return {
      ...this.parent?.() as TiptapBulletListOptions,
      button: ({ editor, t }) => ({
        component: BulletListActionButton,
        componentProps: {
          editor,
          t,
        },
      }),
    }
  },
})
