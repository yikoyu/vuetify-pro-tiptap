import type { GeneralOptions } from '@/type'
import type { CodeOptions as TiptapCodeOptions } from '@tiptap/extension-code'

import { Code as TiptapCode } from '@tiptap/extension-code'

import { CodeActionButton } from './components/ActionButton'

export interface CodeOptions extends TiptapCodeOptions, GeneralOptions<CodeOptions> {}

export const CodeBlock = /* @__PURE__*/ TiptapCodeBlock.extend<CodeBlockOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      languageClassPrefix: 'language-',
      exitOnTripleEnter: true,
      defaultLanguage: null,
      exitOnArrowDown: true,
      HTMLAttributes: {},
      button: ({ editor, t }) => ({
        component: CodeBlockActionButton,
        componentProps: {
          editor,
          t
        }
      })
    }
  }
})
