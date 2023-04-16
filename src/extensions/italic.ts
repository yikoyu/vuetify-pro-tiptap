import Italic, { ItalicOptions as TiptapItalicOptions } from '@tiptap/extension-italic'
import ActionButton from './components/ActionButton.vue'
import type { ButtonView, GeneralOptions } from '@/type'

export interface ItalicOptions extends TiptapItalicOptions, GeneralOptions {
  button: ButtonView
}

export default Italic.extend<ItalicOptions>({
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
