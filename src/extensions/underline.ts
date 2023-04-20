import { Underline } from '@tiptap/extension-underline'
import ActionButton from './components/ActionButton.vue'
import type { UnderlineOptions as TiptapUnderlineOptions } from '@tiptap/extension-underline'
import type { ButtonView, GeneralOptions } from '@/type'

export interface UnderlineOptions extends TiptapUnderlineOptions, GeneralOptions {
  button: ButtonView
}

export default Underline.extend<UnderlineOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      button: ({ editor, t }) => ({
        component: ActionButton,
        componentProps: {
          action: () => editor.commands.toggleUnderline(),
          isActive: () => editor.isActive('underline') || false,
          icon: 'underline',
          tooltip: t('editor.underline.tooltip')
        }
      })
    }
  }
})
