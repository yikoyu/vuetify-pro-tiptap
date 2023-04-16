import { Extensions } from '@tiptap/core'
import Heading, { HeadingOptions as TiptapHeadingOptions } from '@tiptap/extension-heading'
import Paragraph, { ParagraphOptions as TiptapParagraphOptions } from '@tiptap/extension-paragraph'
import ActionMenuButton, { type Item } from './components/ActionMenuButton.vue'
import type { ButtonView, GeneralOptions } from '@/type'

export interface HeadingOptions extends TiptapHeadingOptions, GeneralOptions {
  button: ButtonView<HeadingOptions>
  paragraph: TiptapParagraphOptions | false
}

export default Heading.extend<HeadingOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      levels: [1, 2, 3, 4, 5, 6],
      paragraph: {
        HTMLAttributes: {}
      },
      button: ({ editor, extension, t }) => {
        const levels = extension.options?.levels || []

        const items: Item[] = levels.map(level => ({
          action: () => editor.commands.toggleHeading({ level }),
          isActive: () => editor.isActive('heading', { level }) || false,
          icon: `h${level}`,
          title: t(`editor.heading.h${level}.tooltip`)
        }))

        if (extension.options.paragraph !== false) {
          items.unshift({
            action: () => editor.commands.setParagraph(),
            isActive: () => editor.isActive('paragraph') || false,
            icon: 'p',
            title: t('editor.paragraph.tooltip'),
            divider: true
          })
        }

        return {
          component: ActionMenuButton,
          componentProps: {
            icon: 'heading',
            tooltip: t('editor.heading.tooltip'),
            items
          }
        }
      }
    }
  },
  addExtensions() {
    const extensions: Extensions = []

    if (this.options.paragraph !== false) {
      extensions.push(Paragraph.configure(this.options.paragraph))
    }

    return extensions
  }
})
