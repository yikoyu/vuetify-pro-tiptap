import type { GeneralOptions } from '@/type'
import type { OrderedListOptions as TiptapOrderedListOptions } from '@tiptap/extension-ordered-list'

import { OrderedList as TiptapOrderedList } from '@tiptap/extension-ordered-list'

import ActionButton from './components/ActionButton.vue'

export interface OrderedListOptions extends TiptapOrderedListOptions, GeneralOptions<OrderedListOptions> {}

export const OrderedList = /* @__PURE__*/ TiptapOrderedList.extend<OrderedListOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      button: ({ editor, t }) => ({
        component: ActionButton,
        componentProps: {
          action: () => editor.chain().focus().toggleOrderedList().run(),
          isActive: () => editor.isActive('orderedList') || false,
          disabled: !editor.can().toggleOrderedList(),
          icon: 'orderedList',
          tooltip: t('editor.orderedlist.tooltip')
        }
      })
    }
  }
})
