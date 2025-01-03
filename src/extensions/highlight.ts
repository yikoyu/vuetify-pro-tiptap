import type { GeneralOptions } from '@/type'
import type { HighlightOptions as TiptapHighlightOptions } from '@tiptap/extension-highlight'

import { Highlight as TiptapHighlight } from '@tiptap/extension-highlight'

import HighlightActionButton from './components/HighlightActionButton.vue'

export interface HighlightOptions extends TiptapHighlightOptions, GeneralOptions<HighlightOptions> {}

export const Highlight = /* @__PURE__*/ TiptapHighlight.extend<HighlightOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      multicolor: true,
      button: ({ editor, t }) => ({
        component: HighlightActionButton,
        componentProps: {
          action: (color?: unknown) => {
            if (typeof color === 'string') editor.chain().focus().setHighlight({ color }).run()
          },
          isActive: () => editor.isActive('highlight') || false,
          disabled: !editor.can().setHighlight(),
          icon: 'highlight',
          tooltip: t('editor.highlight.tooltip')
        }
      })
    }
  }
})
