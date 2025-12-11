import type { GeneralOptions } from '@/type'

import { Node } from '@tiptap/core'

import { ClearActionButton } from './components/ActionButton'

export interface ClearOptions extends GeneralOptions<ClearOptions> {}

export const Clear = /* @__PURE__ */ Node.create<ClearOptions>({
  name: 'clear',
  addOptions() {
    return {
      ...this.parent?.(),
      button: ({ editor, t }) => ({
        component: ClearActionButton,
        componentProps: {
          editor,
          t,
        },
      }),
    }
  },
})
