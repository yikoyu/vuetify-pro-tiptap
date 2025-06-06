import type { HistoryOptions as TiptapHistoryOptions } from '@tiptap/extension-history'
import type { GeneralOptions } from '@/type'

import { History as TiptapHistory } from '@tiptap/extension-history'

import { HistoryActionButton } from './components/ActionButton'

export interface HistoryOptions extends TiptapHistoryOptions, GeneralOptions<HistoryOptions> {}

export const History = /* @__PURE__*/ TiptapHistory.extend<HistoryOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      depth: 10,
      button: ({ editor, t }) => ({
        component: HistoryActionButton,
        componentProps: {
          editor,
          t
        }
      })
    }
  }
})
