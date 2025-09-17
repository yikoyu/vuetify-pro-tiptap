import type { GeneralOptions } from '@/type'
import type { HighlightOptions as TiptapHighlightOptions } from '@tiptap/extension-highlight'

import { Highlight as TiptapHighlight } from '@tiptap/extension-highlight'

import { HighlightActionButton } from './components/ActionButton'

export interface HighlightOptions extends TiptapHighlightOptions, GeneralOptions<HighlightOptions> {}

export const Highlight = /* @__PURE__*/ TiptapHighlight.extend<HighlightOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      multicolor: true,
      HTMLAttributes: {},
      button: ({ editor, t }) => ({
        component: HighlightActionButton,
        componentProps: {
          editor,
          t
        }
      })
    }
  }
})
