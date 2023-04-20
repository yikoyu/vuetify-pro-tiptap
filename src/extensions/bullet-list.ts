import { BulletList } from '@tiptap/extension-bullet-list'
import { ListItem } from '@tiptap/extension-list-item'
import ActionButton from './components/ActionButton.vue'
import type { BulletListOptions as TiptapBulletListOptions } from '@tiptap/extension-bullet-list'
import type { ButtonView, GeneralOptions } from '@/type'

export interface BulletListOptions extends TiptapBulletListOptions, GeneralOptions {
  button: ButtonView
}

export default BulletList.extend<BulletListOptions>({
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
  },

  addExtensions() {
    return [ListItem]
  }
})
