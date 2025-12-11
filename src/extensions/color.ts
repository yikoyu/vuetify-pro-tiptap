import type { ColorOptions as TiptapColorOptions } from '@tiptap/extension-color'
import type { GeneralOptions } from '@/type'

import { Color as TiptapColor } from '@tiptap/extension-color'

import { ColorActionButton } from './components/ActionButton'

export interface ColorOptions extends TiptapColorOptions, GeneralOptions<ColorOptions> {}

export const Color = /* @__PURE__ */ TiptapColor.extend<ColorOptions>({
  addOptions() {
    return {
      ...this.parent?.() as TiptapColorOptions,
      button: ({ editor, t }) => ({
        component: ColorActionButton,
        componentProps: {
          editor,
          t,
        },
      }),
    }
  },
})
