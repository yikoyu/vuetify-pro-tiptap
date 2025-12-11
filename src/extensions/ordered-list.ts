import type { OrderedListOptions as TiptapOrderedListOptions } from '@tiptap/extension-list'
import type { GeneralOptions } from '@/type'

import { OrderedList as TiptapOrderedList } from '@tiptap/extension-list'

import { OrderedListActionButton } from './components/ActionButton'

export interface OrderedListOptions extends TiptapOrderedListOptions, GeneralOptions<OrderedListOptions> {}

export const OrderedList = /* @__PURE__ */ TiptapOrderedList.extend<OrderedListOptions>({
  addOptions() {
    return {
      ...this.parent?.() as TiptapOrderedListOptions,
      button: ({ editor, t }) => ({
        component: OrderedListActionButton,
        componentProps: {
          editor,
          t,
        },
      }),
    }
  },
})
