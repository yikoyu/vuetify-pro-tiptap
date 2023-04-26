import { BulletList as TiptapBulletList } from '@tiptap/extension-bullet-list'
import ActionButton from './components/ActionButton.vue'
import type { BulletListOptions as TiptapBulletListOptions } from '@tiptap/extension-bullet-list'
import type { ButtonView, GeneralOptions } from '@/type'

export interface BulletListOptions extends TiptapBulletListOptions, GeneralOptions {
  button: ButtonView
}

export const BulletList = /* @__PURE__*/ TiptapBulletList.extend<BulletListOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      button: ({ editor, t }) => ({
        component: ActionButton,
        componentProps: {
          action: () => editor.commands.toggleBulletList(),
          isActive: () => editor.isActive('bulletList') || false,
          icon: 'bulletList',
          tooltip: t('editor.bulletlist.tooltip')
        }
      })
    }
  }
})
