import type { OrderedListOptions as TiptapOrderedListOptions } from '@tiptap/extension-ordered-list'
import type { GeneralOptions } from '@/type'

import { OrderedList as TiptapOrderedList } from '@tiptap/extension-ordered-list'

import { OrderedListActionButton } from './components/ActionButton'

export interface OrderedListOptions extends TiptapOrderedListOptions, GeneralOptions<OrderedListOptions> {}

export const OrderedList = /* @__PURE__*/ TiptapOrderedList.extend<OrderedListOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      itemTypeName: 'listItem',
      HTMLAttributes: {},
      keepMarks: false,
      keepAttributes: false,
      button: ({ editor, t }) => ({
        component: OrderedListActionButton,
        componentProps: {
          editor,
          t
        }
      })
    }
  }
})
