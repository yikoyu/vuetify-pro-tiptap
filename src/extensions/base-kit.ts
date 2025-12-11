// StarterKit
import type { AnyExtension } from '@tiptap/core'
import type { HardBreakOptions } from '@tiptap/extension-hard-break'
import type { ListItemOptions } from '@tiptap/extension-list'
import type { ParagraphOptions } from '@tiptap/extension-paragraph'
import type { TextStyleOptions } from '@tiptap/extension-text-style'
import type { CharacterCountOptions, DropcursorOptions, FocusOptions, PlaceholderOptions } from '@tiptap/extensions'
import type { BubbleOptions } from './components/bubble'

import { Extension } from '@tiptap/core'
import { Document } from '@tiptap/extension-document'
import { HardBreak } from '@tiptap/extension-hard-break'
import { ListItem } from '@tiptap/extension-list'
import { Paragraph } from '@tiptap/extension-paragraph'
import { Text } from '@tiptap/extension-text'
import { TextStyle } from '@tiptap/extension-text-style'
import { CharacterCount, Dropcursor, Focus, Gapcursor, Placeholder } from '@tiptap/extensions'

import { NODE_TYPE_MENU } from '@/constants/define'
import { defaultBubbleList, generateBubbleTypeMenu } from './components/bubble'

/**
 * Represents the interface for options in the base toolkit.
 */
export interface BaseKitOptions {
  /**
   * Whether to enable the document option.
   * - `undefined` (default): Enable with default settings.
   * - `false`: Disable.
   *
   * @default undefined
   */
  document?: false

  /**
   * Whether to enable the text option.
   * - `undefined` (default): Enable with default settings.
   * - `false`: Disable.
   *
   * @default undefined
   */
  text?: false

  /**
   * Whether to enable the Gapcursor.
   * - `undefined` (default): Enable with default settings.
   * - `false`: Disable.
   *
   * @default undefined
   */
  gapcursor?: false

  /**
   * Dropcursor options or `false` to disable.
   * - `undefined` (default): Enable with default settings.
   * - `false`: Disable.
   * - `Partial<DropcursorOptions>`: Enable with custom options.
   *
   * @default undefined
   */
  dropcursor?: Partial<DropcursorOptions> | false

  /**
   * Character count options or `false` to disable.
   * - `undefined` (default): Enable with default settings.
   * - `false`: Disable.
   * - `Partial<CharacterCountOptions>`: Enable with custom options.
   *
   * @default undefined
   */
  characterCount?: Partial<CharacterCountOptions> | false

  /**
   * HardBreak options or `false` to disable.
   * - `undefined` (default): Enable with default settings.
   * - `false`: Disable.
   * - `Partial<HardBreakOptions>`: Enable with custom options.
   *
   * @default undefined
   */
  hardBreak?: Partial<HardBreakOptions> | false

  /**
   * Placeholder options or `false` to disable.
   * - `undefined` (default): Enable with default settings.
   * - `false`: Disable.
   * - `Partial<PlaceholderOptions>`: Enable with custom options.
   *
   * @default undefined
   */
  placeholder?: Partial<PlaceholderOptions> | false

  /**
   * Paragraph options or `false` to disable.
   * - `undefined` (default): Enable with default settings.
   * - `false`: Disable.
   * - `Partial<ParagraphOptions>`: Enable with custom options.
   *
   * @default undefined
   */
  paragraph?: Partial<ParagraphOptions> | false

  /**
   * Focus options or `false` to disable.
   * - `undefined` (default): Enable with default settings.
   * - `false`: Disable.
   * - `Partial<FocusOptions>`: Enable with custom options.
   *
   * @default undefined
   */
  focus?: Partial<FocusOptions> | false

  /**
   * ListItem options or `false` to disable.
   * - `undefined` (default): Enable with default settings.
   * - `false`: Disable.
   * - `Partial<ListItemOptions>`: Enable with custom options.
   *
   * @default undefined
   */
  listItem?: Partial<ListItemOptions> | false

  /**
   * Text Style options or `false` to disable.
   * - `undefined` (default): Enable with default settings.
   * - `false`: Disable.
   * - `Partial<TextStyleOptions>`: Enable with custom options.
   *
   * @default undefined
   */
  textStyle?: Partial<TextStyleOptions> | false

  /**
   * Bubble options, taking `BubbleOptions<BaseKitOptions>` as parameters, indicating whether to enable the bubble functionality
   */
  bubble: Partial<BubbleOptions<BaseKitOptions>>
}

export const BaseKit = /* @__PURE__ */ Extension.create<BaseKitOptions>({
  name: 'base-kit',

  addOptions() {
    return {
      ...this.parent?.(),
      bubble: {
        list: NODE_TYPE_MENU,
        defaultBubbleList,
        button: ({ editor, extension, t }) => {
          const { list = {}, defaultBubbleList } = extension.options?.bubble ?? {}
          const defaultList = defaultBubbleList?.(editor) ?? []
          return generateBubbleTypeMenu(list, defaultList, { editor, extension, t })
        },
      },
    }
  },

  addExtensions() {
    const extensions: AnyExtension[] = []

    if (this.options.placeholder !== false) {
      extensions.push(
        Placeholder.configure({
          placeholder: '',
          ...this.options.placeholder,
        }),
      )
    }

    if (this.options.focus !== false) {
      extensions.push(
        Focus.configure({
          className: 'focus',
          ...this.options.focus,
        }),
      )
    }

    if (this.options.document !== false) {
      extensions.push(Document.configure())
    }

    if (this.options.text !== false) {
      extensions.push(Text.configure())
    }

    if (this.options.gapcursor !== false) {
      extensions.push(Gapcursor.configure())
    }

    if (this.options.dropcursor !== false) {
      extensions.push(Dropcursor.configure(this.options.dropcursor))
    }

    if (this.options.characterCount !== false) {
      extensions.push(CharacterCount.configure(this.options.characterCount))
    }

    if (this.options.paragraph !== false) {
      extensions.push(Paragraph.configure(this.options.paragraph))
    }

    if (this.options.hardBreak !== false) {
      extensions.push(HardBreak.configure(this.options.hardBreak))
    }

    if (this.options.listItem !== false) {
      extensions.push(ListItem.configure(this.options.listItem))
    }

    if (this.options.textStyle !== false) {
      extensions.push(TextStyle.configure(this.options.textStyle))
    }

    return extensions
  },
})
