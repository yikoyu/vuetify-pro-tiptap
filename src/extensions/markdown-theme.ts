import { Extension } from '@tiptap/core'

import type { Item } from './components/ActionMenuButton.vue'
import ActionMenuButton from './components/ActionMenuButton.vue'

import type { MarkdownThemeProps } from '@/constants/define'
import { DEFAULT_MARKDOWN_THEME_LIST } from '@/constants/define'
import { useContext } from '@/hooks'
import type { GeneralOptions } from '@/type'

/**
 * Represents the interface for Markdown theme options, extending GeneralOptions.
 */
export interface MarkdownThemeOptions extends GeneralOptions<MarkdownThemeOptions> {
  /**
   * List of available Markdown theme properties
   *
   * @default DEFAULT_MARKDOWN_THEME_LIST
   */
  markdownThemes: MarkdownThemeProps[]
}

export const MarkdownTheme = /* @__PURE__*/ Extension.create<MarkdownThemeOptions>({
  name: 'markdownTheme',

  addOptions() {
    return {
      ...this.parent?.(),
      markdownThemes: DEFAULT_MARKDOWN_THEME_LIST,
      button: ({ editor, extension, t }) => {
        const { state } = useContext()

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
