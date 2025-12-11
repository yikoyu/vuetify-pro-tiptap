import type { GeneralOptions } from '@/type'

import { Extension } from '@tiptap/core'

import { DEFAULT_FONT_SIZE_LIST } from '@/constants/define'
import { getCssUnitWithDefault } from '@/utils/utils'
import { FontSizeActionMenuButton } from './components/ActionMenuButton'

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

export const FontSize = /* @__PURE__ */ Extension.create<FontSizeOptions>({
  name: 'fontSize',

  addOptions() {
    return {
      ...this.parent?.(),
      types: ['textStyle'],
      fontSizes: [...DEFAULT_FONT_SIZE_LIST],
      button: ({ editor, extension, t }) => {
        return {
          component: FontSizeActionMenuButton,
          componentProps: {
            editor,
            extension,
            t,
          },
        }
      },
    }
  },

  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          fontSize: {
            default: null,
            parseHTML: (element) => {
              const fontSize = element.style.fontSize || ''
              // 匹配带单位的字体大小值
              const match = fontSize.match(/^(\d+(\.\d+)?)(px|em|rem|%)?$/)
              if (match) {
                return match[0]
              }
              return ''
            },
            renderHTML: (attributes) => {
              if (!attributes.fontSize) {
                return {}
              }

              return {
                style: `font-size: ${getCssUnitWithDefault(attributes.fontSize)}`,
              }
            },
          },
        },
      },
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
          },
    }
  },
})
