import type { BoldOptions as TiptapBoldOptions } from '@tiptap/extension-bold'
import type { GeneralOptions } from '@/type'

import { Bold as TiptapBold } from '@tiptap/extension-bold'

import { BoldActionButton } from './components/ActionButton'

export interface BoldOptions extends TiptapBoldOptions, GeneralOptions<BoldOptions> {}

export const Bold = /* @__PURE__ */ TiptapBold.extend<BoldOptions>({
  addOptions() {
    return {
      ...this.parent?.() as TiptapBoldOptions,
      button: ({ editor, t }) => ({
        component: BoldActionButton,
        componentProps: {
          editor,
          t,
        },
      }),
    }
  },
})
