import type { GeneralOptions } from '@/type'
import type { StrikeOptions as TiptapStrikeOptions } from '@tiptap/extension-strike'

import { Strike as TiptapStrike } from '@tiptap/extension-strike'

import { ActionButton } from './components/ActionButton'

export interface StrikeOptions extends TiptapStrikeOptions, GeneralOptions<StrikeOptions> {}

export const Strike = /* @__PURE__*/ TiptapStrike.extend<StrikeOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      button: ({ editor, t }) => ({
        component: ActionButton,
        componentProps: {
          editor,
          action: () => editor.chain().focus().toggleStrike().run(),
          isActive: () => editor.isActive('strike') || false,
          disabled: !editor.can().toggleStrike(),
          icon: 'strike',
          tooltip: t('editor.strike.tooltip')
        }
      })
    }
  }
})
