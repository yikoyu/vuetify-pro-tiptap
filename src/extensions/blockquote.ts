import type { GeneralOptions } from '@/type'
import type { BlockquoteOptions as TiptapBlockquoteOptions } from '@tiptap/extension-blockquote'

import { Blockquote as TiptapBlockquote } from '@tiptap/extension-blockquote'

import { ActionButton } from './components/ActionButton'

export interface BlockquoteOptions extends TiptapBlockquoteOptions, GeneralOptions<BlockquoteOptions> {}

export const Blockquote = /* @__PURE__*/ TiptapBlockquote.extend<BlockquoteOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      HTMLAttributes: {
        class: 'blockquote'
      },
      button: ({ editor, t }) => ({
        component: ActionButton,
        componentProps: {
          editor,
          action: () => editor.chain().focus().toggleBlockquote().run(),
          isActive: () => editor.isActive('blockquote') || false,
          disabled: !editor.can().toggleBlockquote(),
          icon: 'blockquote',
          tooltip: t('editor.blockquote.tooltip')
        }
      })
    }
  }
})
