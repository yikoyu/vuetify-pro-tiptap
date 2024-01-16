import { Extension } from '@tiptap/core'

import type { Item } from './components/ActionMenuButton.vue'
import ActionMenuButton from './components/ActionMenuButton.vue'

import type { MarkdownThemeProps } from '@/constants/define'
import { DEFAULT_MARKDOWN_THEME_LIST } from '@/constants/define'
import { useTiptapStore } from '@/hooks'
import type { ButtonView, GeneralOptions } from '@/type'

export interface MarkdownThemeOptions extends GeneralOptions {
  button: ButtonView<MarkdownThemeOptions>
  markdownThemes: MarkdownThemeProps[]
}

export const MarkdownTheme = /* @__PURE__*/ Extension.create<MarkdownThemeOptions>({
  name: 'markdownTheme',

  addOptions() {
    return {
      ...this.parent?.(),
      markdownThemes: DEFAULT_MARKDOWN_THEME_LIST,
      button: ({ editor, extension, t }) => {
        const { state } = useTiptapStore()!

        const markdownThemes =
          ([...DEFAULT_MARKDOWN_THEME_LIST, ...extension.options.markdownThemes] as MarkdownThemeProps[]) || []

        const items: Item[] = markdownThemes.map(k => ({
          title: t(k.title),
          isActive: () => {
            return state.defaultMarkdownTheme === k.value
          },
          action: () => {
            state.defaultMarkdownTheme = k.value
          },
          divider: k.divider ?? false,
          default: k.default ?? false
        }))

        return {
          component: ActionMenuButton,
          componentProps: {
            icon: 'markdownTheme',
            tooltip: t('editor.markdownTheme.tooltip'),
            items
          }
        }
      }
    }
  }
})
