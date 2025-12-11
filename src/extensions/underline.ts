import type { UnderlineOptions as TiptapUnderlineOptions } from '@tiptap/extension-underline'
import type { GeneralOptions } from '@/type'

import { Underline as TiptapUnderline } from '@tiptap/extension-underline'

import { UnderlineActionButton } from './components/ActionButton'

export interface UnderlineOptions extends TiptapUnderlineOptions, GeneralOptions<UnderlineOptions> {}

export const Underline = /* @__PURE__ */ TiptapUnderline.extend<UnderlineOptions>({
  addOptions() {
    return {
      ...this.parent?.() as TiptapUnderlineOptions,
      button: ({ editor, t }) => ({
        component: UnderlineActionButton,
        componentProps: {
          editor,
          t,
        },
      }),
    }
  },
})
