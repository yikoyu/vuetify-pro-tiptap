import type { GeneralOptions } from '@/type'
import type { BoldOptions as TiptapImageOptions } from '@tiptap/extension-bold'

import { Bold as TiptapBold } from '@tiptap/extension-bold'

import ActionButton from './components/ActionButton.vue'

export interface BoldOptions extends TiptapImageOptions, GeneralOptions<BoldOptions> {}

export const Bold = /* @__PURE__*/ TiptapBold.extend<BoldOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      button: ({ editor, t }) => ({
        component: ActionButton,
        componentProps: {
          action: () => editor.chain().focus().toggleBold().run(),
          isActive: () => editor.isActive('bold') || false,
          disabled: !editor.can().toggleBold(),
          icon: 'bold',
          tooltip: t('editor.bold.tooltip')
        }
      })
    }
  }
})
