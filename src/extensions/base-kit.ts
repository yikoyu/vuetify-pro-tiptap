// StarterKit
import { Extension } from '@tiptap/core'
import type { AnyExtension } from '@tiptap/core'
import Document from '@tiptap/extension-document'
import Dropcursor, { DropcursorOptions } from '@tiptap/extension-dropcursor'
import Gapcursor from '@tiptap/extension-gapcursor'
import CharacterCount, { CharacterCountOptions } from '@tiptap/extension-character-count'
import Paragraph, { ParagraphOptions } from '@tiptap/extension-paragraph'
import HardBreak, { HardBreakOptions } from '@tiptap/extension-hard-break'

import Text from '@tiptap/extension-text'

// Extensions
import Placeholder, { PlaceholderOptions } from '@tiptap/extension-placeholder'
import Focus, { FocusOptions } from '@tiptap/extension-focus'

import { NODE_TYPE_MENU, defaultBubbleList, generateBubbleTypeMenu } from './components/bubble'
import type { BubbleOptions } from './components/bubble'

export interface BaseKitOptions {
  document: false
  dropcursor: Partial<DropcursorOptions> | false
  gapcursor: false
  characterCount: Partial<CharacterCountOptions> | false
  hardBreak: Partial<HardBreakOptions> | false
  text: any
  placeholder: Partial<PlaceholderOptions> | false
  paragraph: Partial<ParagraphOptions> | false
  focus: Partial<FocusOptions> | false
  bubble: Partial<BubbleOptions<BaseKitOptions>>
}

export default Extension.create<BaseKitOptions>({
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
        }
      }
    }
  },

  addExtensions() {
    const extensions: AnyExtension[] = []

    if (this.options.placeholder !== false) {
      extensions.push(
        Placeholder.configure({
          placeholder: '',
          ...this.options.placeholder
        })
      )
    }

    if (this.options.focus !== false) {
      extensions.push(
        Focus.configure({
          className: 'focus',
          ...this.options.focus
        })
      )
    }

    if (this.options.document !== false) {
      extensions.push(Document.configure(this.options.document))
    }

    if (this.options.dropcursor !== false) {
      extensions.push(Dropcursor.configure(this.options.dropcursor))
    }

    if (this.options.gapcursor !== false) {
      extensions.push(Gapcursor.configure(this.options.gapcursor))
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

    if (this.options.text !== false) {
      extensions.push(Text.configure(this.options.text))
    }

    return extensions
  }
})
