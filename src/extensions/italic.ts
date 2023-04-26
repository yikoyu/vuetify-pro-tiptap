import { Italic as TiptapItalic } from '@tiptap/extension-italic'
import ActionButton from './components/ActionButton.vue'
import type { ItalicOptions as TiptapItalicOptions } from '@tiptap/extension-italic'
import type { ButtonView, GeneralOptions } from '@/type'

export interface ItalicOptions extends TiptapItalicOptions, GeneralOptions {
  button: ButtonView
}

export const Italic = /* @__PURE__*/ TiptapItalic.extend<ItalicOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      button: ({ editor, t }) => ({
        component: ActionButton,
        componentProps: {
          action: () => editor.commands.toggleItalic(),
          isActive: () => editor.isActive('italic') || false,
          icon: 'italic',
          tooltip: t('editor.italic.tooltip')
        }
      })
    }
  }
})
