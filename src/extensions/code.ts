import type { GeneralOptions } from '@/type'
import type { CodeOptions as TiptapCodeOptions } from '@tiptap/extension-code'

import { Code as TiptapCode } from '@tiptap/extension-code'

import ActionButton from './components/ActionButton.vue'

export interface CodeOptions extends TiptapCodeOptions, GeneralOptions<CodeOptions> {}

export const Code = /* @__PURE__*/ TiptapCode.extend<CodeOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      button: ({ editor, t }) => ({
        component: ActionButton,
        componentProps: {
          action: () => editor.chain().focus().toggleCode().run(),
          isActive: () => editor.isActive('code') || false,
          disabled: !editor.can().toggleCode(),
          icon: 'code',
          tooltip: t('editor.code.tooltip')
        }
      })
    }
  }
})
