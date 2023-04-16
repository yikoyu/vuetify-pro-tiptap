import { Bold, BoldOptions as TiptapImageOptions } from '@tiptap/extension-bold'
import ActionButton from './components/ActionButton.vue'
import type { ButtonView, GeneralOptions } from '@/type'

export interface BoldOptions extends TiptapImageOptions, GeneralOptions {
  button: ButtonView
}

export default Bold.extend<BoldOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      button: ({ editor, t }) => ({
        component: ActionButton,
        componentProps: {
          action: () => editor.commands.toggleBold(),
          isActive: () => editor.isActive('bold') || false,
          icon: 'bold',
          tooltip: t('editor.bold.tooltip')
        }
      })
    }
  }
})
