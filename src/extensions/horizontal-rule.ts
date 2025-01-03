import type { GeneralOptions } from '@/type'
import type { HorizontalRuleOptions as TiptapHorizontalRuleOptions } from '@tiptap/extension-horizontal-rule'

import { HorizontalRule as TiptapHorizontalRule } from '@tiptap/extension-horizontal-rule'

import ActionButton from './components/ActionButton.vue'

export interface HorizontalRuleOptions extends TiptapHorizontalRuleOptions, GeneralOptions<HorizontalRuleOptions> {}

export const HorizontalRule = /* @__PURE__*/ TiptapHorizontalRule.extend<HorizontalRuleOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      button: ({ editor, t }) => ({
        component: ActionButton,
        componentProps: {
          action: () => editor.chain().focus().setHorizontalRule().run(),
          disabled: !editor.can().setHorizontalRule(),
          icon: 'horizontalRule',
          tooltip: t('editor.horizontalrule.tooltip')
        }
      })
    }
  }
})
