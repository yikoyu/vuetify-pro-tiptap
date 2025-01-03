import type { GeneralOptions } from '@/type'
import type { CodeBlockOptions as TiptapCodeBlockOptions } from '@tiptap/extension-code-block'

import { CodeBlock as TiptapCodeBlock } from '@tiptap/extension-code-block'

import ActionButton from './components/ActionButton.vue'

export interface CodeBlockOptions extends TiptapCodeBlockOptions, GeneralOptions<CodeBlockOptions> {}

export const CodeBlock = /* @__PURE__*/ TiptapCodeBlock.extend<CodeBlockOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      button: ({ editor, t }) => ({
        component: ActionButton,
        componentProps: {
          action: () => editor.chain().focus().toggleCodeBlock().run(),
          isActive: () => editor.isActive('codeBlock') || false,
          disabled: !editor.can().toggleCodeBlock(),
          icon: 'codeBlock',
          tooltip: t('editor.codeblock.tooltip')
        }
      })
    }
  }
})
