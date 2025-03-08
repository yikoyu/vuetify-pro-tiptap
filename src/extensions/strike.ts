import type { GeneralOptions } from '@/type'
import type { StrikeOptions as TiptapStrikeOptions } from '@tiptap/extension-strike'

import { Strike as TiptapStrike } from '@tiptap/extension-strike'

import { StrikeActionButton } from './components/ActionButton'

export interface StrikeOptions extends TiptapStrikeOptions, GeneralOptions<StrikeOptions> {}

export const Strike = /* @__PURE__*/ TiptapStrike.extend<StrikeOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      button: ({ editor, t }) => ({
        component: StrikeActionButton,
        componentProps: {
          editor,
          t
        }
      })
    }
  }
})
