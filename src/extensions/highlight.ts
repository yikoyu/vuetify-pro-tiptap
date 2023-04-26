import { Highlight as TiptapHighlight } from '@tiptap/extension-highlight'
import HighlightActionButton from './components/HighlightActionButton.vue'
import type { HighlightOptions as TiptapHighlightOptions } from '@tiptap/extension-highlight'
import type { ButtonView, GeneralOptions } from '@/type'

export interface HighlightOptions extends TiptapHighlightOptions, GeneralOptions {
  button: ButtonView
}

export const Highlight = /* @__PURE__*/ TiptapHighlight.extend<HighlightOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      multicolor: true,
      button: ({ editor, t }) => ({
        component: HighlightActionButton,
        componentProps: {
          action: (color?: unknown) => {
            if (typeof color === 'string') editor.commands.setHighlight({ color })
          },
          isActive: () => editor.isActive('highlight') || false,
          icon: 'highlight',
          tooltip: t('editor.highlight.tooltip')
        }
      })
    }
  }
})
