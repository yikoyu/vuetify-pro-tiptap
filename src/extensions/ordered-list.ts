import { OrderedList } from '@tiptap/extension-ordered-list'
import { ListItem } from '@tiptap/extension-list-item'
import ActionButton from './components/ActionButton.vue'
import type { OrderedListOptions as TiptapOrderedListOptions } from '@tiptap/extension-ordered-list'
import type { ButtonView, GeneralOptions } from '@/type'

export interface OrderedListOptions extends TiptapOrderedListOptions, GeneralOptions {
  button: ButtonView
}

export default OrderedList.extend<OrderedListOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      button: ({ editor, t }) => ({
        component: ActionButton,
        componentProps: {
          action: () => editor.commands.toggleOrderedList(),
          isActive: () => editor.isActive('orderedList') || false,
          icon: 'orderedList',
          tooltip: t('editor.orderedlist.tooltip')
        }
      })
    }
  },

  addExtensions() {
    return [ListItem]
  }
})
