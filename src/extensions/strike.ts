import Strike, { StrikeOptions as TiptapStrikeOptions } from '@tiptap/extension-strike'
import ActionButton from './components/ActionButton.vue'
import type { ButtonView, GeneralOptions } from '@/type'

export interface StrikeOptions extends TiptapStrikeOptions, GeneralOptions {
  button: ButtonView
}

export default Strike.extend<StrikeOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      button: ({ editor, t }) => ({
        component: ActionButton,
        componentProps: {
          action: () => editor.commands.toggleStrike(),
          isActive: () => editor.isActive('strike') || false,
          icon: 'strike',
          tooltip: t('editor.strike.tooltip')
        }
      })
    }
  }
})
