import type { BlockquoteOptions as TiptapBlockquoteOptions } from '@tiptap/extension-blockquote'
import type { GeneralOptions } from '@/type'

import { Blockquote as TiptapBlockquote } from '@tiptap/extension-blockquote'

import { BlockquoteActionButton } from './components/ActionButton'

export interface BlockquoteOptions extends TiptapBlockquoteOptions, GeneralOptions<BlockquoteOptions> {}

export const Blockquote = /* @__PURE__ */ TiptapBlockquote.extend<BlockquoteOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      HTMLAttributes: {
        class: 'blockquote',
      },
      button: ({ editor, t }) => ({
        component: BlockquoteActionButton,
        componentProps: {
          editor,
          t,
        },
      }),
    }
  },
})
