import Code, { CodeOptions as TiptapCodeOptions } from '@tiptap/extension-code'
import ActionButton from './components/ActionButton.vue'
import type { ButtonView, GeneralOptions } from '@/type'

export interface CodeOptions extends TiptapCodeOptions, GeneralOptions {
  button: ButtonView
}

export default Code.extend<CodeOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      button: ({ editor, t }) => ({
        component: ActionButton,
        componentProps: {
          action: () => editor.commands.toggleCode(),
          isActive: () => editor.isActive('code') || false,
          icon: 'code',
          tooltip: t('editor.code.tooltip')
        }
      })
    }
  }
})
