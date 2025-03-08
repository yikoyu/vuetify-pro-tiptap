import type { GeneralOptions } from '@/type'
import type { HorizontalRuleOptions as TiptapHorizontalRuleOptions } from '@tiptap/extension-horizontal-rule'

import { HorizontalRule as TiptapHorizontalRule } from '@tiptap/extension-horizontal-rule'

import { HorizontalRuleActionButton } from './components/ActionButton'

export interface HorizontalRuleOptions extends TiptapHorizontalRuleOptions, GeneralOptions<HorizontalRuleOptions> {}

export const HorizontalRule = /* @__PURE__*/ TiptapHorizontalRule.extend<HorizontalRuleOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      button: ({ editor, t }) => ({
        component: HorizontalRuleActionButton,
        componentProps: {
          editor,
          t
        }
      })
    }
  }
})
