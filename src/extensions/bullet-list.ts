import type { BulletListOptions as TiptapBulletListOptions } from '@tiptap/extension-bullet-list'
import { BulletList as TiptapBulletList } from '@tiptap/extension-bullet-list'

import ActionButton from './components/ActionButton.vue'

import type { GeneralOptions } from '@/type'

export interface BulletListOptions extends TiptapBulletListOptions, GeneralOptions<BulletListOptions> {}

export const BulletList = /* @__PURE__*/ TiptapBulletList.extend<BulletListOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      button: ({ editor, t }) => ({
        component: ActionButton,
        componentProps: {
          action: () => editor.commands.toggleBulletList(),
          isActive: () => editor.isActive('bulletList') || false,
          disabled: !editor.can().toggleBulletList(),
          icon: 'bulletList',
          tooltip: t('editor.bulletlist.tooltip')
        }
      })
    }
  }
})
