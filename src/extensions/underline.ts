import type { GeneralOptions } from '@/type'
import type { UnderlineOptions as TiptapUnderlineOptions } from '@tiptap/extension-underline'

import { Underline as TiptapUnderline } from '@tiptap/extension-underline'

import ActionButton from './components/ActionButton.vue'

export interface UnderlineOptions extends TiptapUnderlineOptions, GeneralOptions<UnderlineOptions> {}

export const Underline = /* @__PURE__*/ TiptapUnderline.extend<UnderlineOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      button: ({ editor, t }) => ({
        component: ActionButton,
        componentProps: {
          action: () => editor.chain().focus().toggleUnderline().run(),
          isActive: () => editor.isActive('underline') || false,
          disabled: !editor.can().toggleUnderline(),
          icon: 'underline',
          tooltip: t('editor.underline.tooltip')
        }
      })
    }
  }
})
