import type { GeneralOptions } from '@/type'
import type { ItalicOptions as TiptapItalicOptions } from '@tiptap/extension-italic'

import { Italic as TiptapItalic } from '@tiptap/extension-italic'

import ActionButton from './components/ActionButton.vue'

export interface ItalicOptions extends TiptapItalicOptions, GeneralOptions<ItalicOptions> {}

export const Italic = /* @__PURE__*/ TiptapItalic.extend<ItalicOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      button: ({ editor, t }) => ({
        component: ActionButton,
        componentProps: {
          action: () => editor.chain().focus().toggleItalic().run(),
          isActive: () => editor.isActive('italic') || false,
          disabled: !editor.can().toggleItalic(),
          icon: 'italic',
          tooltip: t('editor.italic.tooltip')
        }
      })
    }
  }
})
