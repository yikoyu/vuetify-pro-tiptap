import type { ColorOptions as TiptapColorOptions } from '@tiptap/extension-color'
import { Color as TiptapColor } from '@tiptap/extension-color'

import ColorActionButton from './components/ColorActionButton.vue'

import type { GeneralOptions } from '@/type'

export interface ColorOptions extends TiptapColorOptions, GeneralOptions<ColorOptions> {}

export const Color = /* @__PURE__*/ TiptapColor.extend<ColorOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      button: ({ editor, t }) => ({
        component: ColorActionButton,
        componentProps: {
          action: (color?: unknown) => {
            if (typeof color === 'string') editor.commands.setColor(color)
          },
          isActive: () => {
            const { color } = editor.getAttributes('textStyle')

            if (!color) return false
            return editor.isActive({ color }) || false
          },
          disabled: !editor.can().setColor(''),
          icon: 'color',
          tooltip: t('editor.color.tooltip')
        }
      })
    }
  }
})
