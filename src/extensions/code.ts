import type { CodeOptions as TiptapCodeOptions } from '@tiptap/extension-code'
import type { GeneralOptions } from '@/type'

import { Code as TiptapCode } from '@tiptap/extension-code'

import { CodeActionButton } from './components/ActionButton'

export interface CodeOptions extends TiptapCodeOptions, GeneralOptions<CodeOptions> {}

export const Code = /* @__PURE__ */ TiptapCode.extend<CodeOptions>({
  addOptions() {
    return {
      ...this.parent?.() as TiptapCodeOptions,
      button: ({ editor, t }) => ({
        component: CodeActionButton,
        componentProps: {
          editor,
          t,
        },
      }),
    }
  },
})
