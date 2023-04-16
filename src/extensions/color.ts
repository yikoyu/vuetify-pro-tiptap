import { Color, ColorOptions as TiptapColorOptions } from '@tiptap/extension-color'
import TextStyle from '@tiptap/extension-text-style'
import ColorActionButton from './components/ColorActionButton.vue'
import type { ButtonView, GeneralOptions } from '@/type'

export interface ColorOptions extends TiptapColorOptions, GeneralOptions {
  button: ButtonView
}

export default Color.extend<ColorOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      button: ({ editor, t }) => ({
        component: ColorActionButton,
        componentProps: {
          action: (color?: unknown) => {
            if (typeof color === 'string') editor.commands.setColor(color)
          },
          isActive: () => editor.isActive('textStyle') || false,
          icon: 'color',
          tooltip: t('editor.color.tooltip')
        }
      })
    }
  },

  addExtensions() {
    return [TextStyle]
  }
})
