import type { GeneralOptions } from '@/type'
import type { BoldOptions as TiptapImageOptions } from '@tiptap/extension-bold'

import { Bold as TiptapBold } from '@tiptap/extension-bold'

import { BoldActionButton } from './components/ActionButton'

export interface BoldOptions extends TiptapImageOptions, GeneralOptions<BoldOptions> {}

export const Bold = /* @__PURE__*/ TiptapBold.extend<BoldOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      HTMLAttributes: {},
      button: ({ editor, t }) => ({
        component: BoldActionButton,
        componentProps: {
          editor,
          t
        }
      })
    }
  }
})
