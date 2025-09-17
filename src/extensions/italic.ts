import type { GeneralOptions } from '@/type'
import type { ItalicOptions as TiptapItalicOptions } from '@tiptap/extension-italic'

import { Italic as TiptapItalic } from '@tiptap/extension-italic'

import { ItalicActionButton } from './components/ActionButton'

export interface ItalicOptions extends TiptapItalicOptions, GeneralOptions<ItalicOptions> {}

export const Italic = /* @__PURE__*/ TiptapItalic.extend<ItalicOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      HTMLAttributes: {},
      button: ({ editor, t }) => ({
        component: ItalicActionButton,
        componentProps: {
          editor,
          t
        }
      })
    }
  }
})
