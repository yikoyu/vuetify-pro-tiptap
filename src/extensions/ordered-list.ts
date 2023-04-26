import { OrderedList as TiptapOrderedList } from '@tiptap/extension-ordered-list'
import ActionButton from './components/ActionButton.vue'
import type { OrderedListOptions as TiptapOrderedListOptions } from '@tiptap/extension-ordered-list'
import type { ButtonView, GeneralOptions } from '@/type'

export interface OrderedListOptions extends TiptapOrderedListOptions, GeneralOptions {
  button: ButtonView
}

export const OrderedList = /* @__PURE__*/ TiptapOrderedList.extend<OrderedListOptions>({
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
  }
})
