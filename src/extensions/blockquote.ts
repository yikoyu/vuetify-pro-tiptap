import { Blockquote as TiptapBlockquote } from '@tiptap/extension-blockquote'
import ActionButton from './components/ActionButton.vue'
import type { BlockquoteOptions as TiptapBlockquoteOptions } from '@tiptap/extension-blockquote'
import type { ButtonView, GeneralOptions } from '@/type'

export interface BlockquoteOptions extends TiptapBlockquoteOptions, GeneralOptions {
  button: ButtonView
}

export const Blockquote = TiptapBlockquote.extend<BlockquoteOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      HTMLAttributes: {
        class: 'blockquote'
      },
      button: ({ editor, t }) => ({
        component: ActionButton,
        componentProps: {
          action: () => editor.commands.toggleBlockquote(),
          isActive: () => editor.isActive('blockquote') || false,
          icon: 'blockquote',
          tooltip: t('editor.blockquote.tooltip')
        }
      })
    }
  }
})
