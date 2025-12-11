import type { UndoRedoOptions } from '@tiptap/extensions'
import type { GeneralOptions } from '@/type'

import { UndoRedo } from '@tiptap/extensions'

import { HistoryActionButton } from './components/ActionButton'

export interface HistoryOptions extends UndoRedoOptions, GeneralOptions<HistoryOptions> {}

export const History = /* @__PURE__ */ UndoRedo.extend<HistoryOptions>({
  addOptions() {
    return {
      ...this.parent?.() as UndoRedoOptions,
      depth: 10,
      button: ({ editor, t }) => ({
        component: HistoryActionButton,
        componentProps: {
          editor,
          t,
        },
      }),
    }
  },
})
