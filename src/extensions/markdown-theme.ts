import type { MarkdownThemeProps } from '@/constants/define'

import type { GeneralOptions } from '@/type'

import { Extension } from '@tiptap/core'
import { DEFAULT_MARKDOWN_THEME_LIST } from '@/constants/define'
import { MarkdownThemeActionMenuButton } from './components/ActionMenuButton'

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

export const MarkdownTheme = /* @__PURE__ */ Extension.create<MarkdownThemeOptions>({
  name: 'markdownTheme',

  addOptions() {
    return {
      ...this.parent?.(),
      markdownThemes: DEFAULT_MARKDOWN_THEME_LIST,
      button: ({ editor, extension, t }) => {
        return {
          component: MarkdownThemeActionMenuButton,
          componentProps: {
            editor,
            extension,
            t,
          },
        }
      },
    }
  },
})
