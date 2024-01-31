import { Extension } from '@tiptap/core'

import type { Item } from './components/ActionMenuButton.vue'
import ActionMenuButton from './components/ActionMenuButton.vue'

import { DEFAULT_FONT_SIZE_LIST, DEFAULT_FONT_SIZE_VALUUE } from '@/constants/define'
import type { GeneralOptions } from '@/type'
import { getCssUnitWithDefault } from '@/utils/utils'

/**
 * Represents the interface for font size options, extending GeneralOptions.
 */
export interface FontSizeOptions extends GeneralOptions<FontSizeOptions> {
  types: string[]
  /**
   * List of available font size values
   *
   * @default DEFAULT_FONT_SIZE_LIST
   */
  fontSizes: number[]
}

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    fontSize: {
      /**
       * Set the font size
       */
      setFontSize: (fontSize: string) => ReturnType
      /**
       * Unset the font size
       */
      unsetFontSize: () => ReturnType
    }
  }
}

export const FontSize = /* @__PURE__*/ Extension.create<FontSizeOptions>({
  name: 'fontSize',

  addOptions() {
    return {
      ...this.parent?.(),
      types: ['textStyle'],
      fontSizes: [...DEFAULT_FONT_SIZE_LIST],
      button: ({ editor, extension, t }) => {
        const fontSizes = (extension.options?.fontSizes as FontSizeOptions['fontSizes']) || []

        const items: Item[] = [DEFAULT_FONT_SIZE_VALUUE, ...fontSizes].map(k => ({
          title: k === DEFAULT_FONT_SIZE_VALUUE ? t('editor.default') : String(k),
          isActive: () => {
            const { fontSize } = editor.getAttributes('textStyle')

            const isDefault = k === DEFAULT_FONT_SIZE_VALUUE
            const notFontSize = fontSize === undefined
            if (isDefault && notFontSize) {
              return true
            }

            return editor.isActive({ fontSize: String(k) }) || false
          },
          action: () => {
            if (k === DEFAULT_FONT_SIZE_VALUUE) {
              editor.commands.unsetFontSize()
              return
            }

            editor.commands.setFontSize(String(k))
          },
          disabled: !editor.can().setFontSize(String(k)),
          divider: k === DEFAULT_FONT_SIZE_VALUUE ?? false,
          default: k === DEFAULT_FONT_SIZE_VALUUE ?? false
        }))

        const disabled = items.filter(k => k.disabled).length === items.length

        return {
          component: ActionMenuButton,
          componentProps: {
            icon: 'fontSize',
            tooltip: t('editor.fontSize.tooltip'),
            disabled,
            items,
            maxHeight: 280
          }
        }
      }
    }
  },

  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          fontSize: {
            default: null,
            parseHTML: element => element.style.fontSize || '',
            renderHTML: attributes => {
              if (!attributes.fontSize) {
                return {}
              }

              return {
                style: `font-size: ${getCssUnitWithDefault(attributes.fontSize)}`
              }
            }
          }
        }
      }
    ]
  },

  addCommands() {
    return {
      setFontSize:
        fontSize =>
        ({ chain }) => {
          return chain().setMark('textStyle', { fontSize }).run()
        },
      unsetFontSize:
        () =>
        ({ chain }) => {
          return chain().setMark('textStyle', { fontSize: null }).removeEmptyTextStyle().run()
        }
    }
  }
})
