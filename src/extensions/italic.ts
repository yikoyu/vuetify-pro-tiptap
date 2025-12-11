import type { ItalicOptions as TiptapItalicOptions } from '@tiptap/extension-italic'
import type { GeneralOptions } from '@/type'

import { Italic as TiptapItalic } from '@tiptap/extension-italic'

import { ItalicActionButton } from './components/ActionButton'

export interface ItalicOptions extends TiptapItalicOptions, GeneralOptions<ItalicOptions> {}

export const Italic = /* @__PURE__ */ TiptapItalic.extend<ItalicOptions>({
  addOptions() {
    return {
      ...this.parent?.() as TiptapItalicOptions,
      button: ({ editor, t }) => ({
        component: ItalicActionButton,
        componentProps: {
          editor,
          t,
        },
      }),
    }
  },
})
