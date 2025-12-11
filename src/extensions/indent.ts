import type { GeneralOptions } from '@/type'

import { Extension } from '@tiptap/core'

import { IndentActionButton } from './components/ActionButton'

export interface IndentOptions extends GeneralOptions<IndentOptions> {}

export const Indent = /* @__PURE__ */ Extension.create<IndentOptions>({
  name: 'indent',
  addOptions() {
    return {
      divider: false,
      spacer: false,
      button: ({ editor, t }) => ({
        component: IndentActionButton,
        componentProps: {
          editor,
          t,
        },
      }),
    }
  },
})
