import type { BoldOptions as TiptapImageOptions } from '@tiptap/extension-bold'
import type { GeneralOptions } from '@/type'

import { Bold as TiptapBold } from '@tiptap/extension-bold'

import { BoldActionButton } from './components/ActionButton'

export interface BoldOptions extends TiptapImageOptions, GeneralOptions<BoldOptions> {}

export const Bold = /* @__PURE__*/ TiptapBold.extend<BoldOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
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
