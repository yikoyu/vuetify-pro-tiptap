import type { GeneralOptions } from '@/type'
import type { OrderedListOptions as TiptapOrderedListOptions } from '@tiptap/extension-ordered-list'

import { OrderedList as TiptapOrderedList } from '@tiptap/extension-ordered-list'

import { OrderedListActionButton } from './components/ActionButton'

export interface OrderedListOptions extends TiptapOrderedListOptions, GeneralOptions<OrderedListOptions> {}

export const OrderedList = /* @__PURE__*/ TiptapOrderedList.extend<OrderedListOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
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
