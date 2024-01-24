import type { FontFamilyOptions as TiptapFontFamilyOptions } from '@tiptap/extension-font-family'
import { FontFamily as TiptapFontFamily } from '@tiptap/extension-font-family'

import type { Item } from './components/ActionMenuButton.vue'
import ActionMenuButton from './components/ActionMenuButton.vue'

import type { FontFamilyProps } from '@/constants/define'
import { DEFAULT_FONT_FAMILY_LIST, DEFAULT_FONT_FAMILY_VALUE } from '@/constants/define'
import type { GeneralOptions } from '@/type'

/**
 * Represents the interface for font family options, extending TiptapFontFamilyOptions and GeneralOptions.
 */
export interface FontFamilyOptions extends TiptapFontFamilyOptions, GeneralOptions<FontFamilyOptions> {
  /**
   * List of available font family properties
   *
   * @default DEFAULT_FONT_FAMILY_LIST
   */
  fontFamilies: FontFamilyProps[]
}

export const FontFamily = /* @__PURE__*/ TiptapFontFamily.extend<FontFamilyOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      fontFamilies: DEFAULT_FONT_FAMILY_LIST,
      button: ({ editor, extension, t }) => {
        const fontFamilies = (extension.options?.fontFamilies as FontFamilyProps[]) || []

        const items: Item[] = fontFamilies.map(k => ({
          title: t(k.title),
          isActive: () => {
            const { fontFamily } = editor.getAttributes('textStyle')
            const isDefault = k.value === DEFAULT_FONT_FAMILY_VALUE
            const notFontFamily = fontFamily === undefined
            if (isDefault && notFontFamily) {
              return true
            }

            return editor.isActive({ fontFamily: k.value }) || false
          },
          action: () => {
            if (k.value === DEFAULT_FONT_FAMILY_VALUE) {
              editor.commands.unsetFontFamily()
              return
            }

            editor.commands.setFontFamily(k.value)
          },
          disabled: !editor.can().setFontFamily(k.value),
          style: { fontFamily: k.value },
          divider: k.divider ?? false,
          default: k.default ?? false
        }))

        const disabled = items.filter(k => k.disabled).length === items.length

        return {
          component: ActionMenuButton,
          componentProps: {
            icon: 'fontFamily',
            tooltip: t('editor.fontFamily.tooltip'),
            disabled,
            items,
            maxHeight: 280
          }
        }
      }
    }
  }
})
