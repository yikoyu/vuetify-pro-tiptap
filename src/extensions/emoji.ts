import { Extension } from '@tiptap/core'
import EmojiActionPicker from './components/EmojiActionPicker.vue'
import type { ButtonView, GeneralOptions } from '@/type'

export interface EmojiOptions extends GeneralOptions {
  button: ButtonView<EmojiOptions>
  [key: string]: any
}

export const Emoji = /* @__PURE__*/ Extension.create<EmojiOptions>({
  name: 'emoji',

  priority: 1000,

  addOptions() {
    return {
      ...this.parent?.(),
      button: ({ editor, extension, t }) => {
        const { button, divider, spacer, ...options } = extension.options || {}

        return {
          component: EmojiActionPicker,
          componentProps: {
            icon: 'emoji',
            tooltip: t('editor.emoji.tooltip'),
            action: (emoji?: unknown) => {
              if (typeof emoji === 'string') {
                editor.commands.insertContent(emoji)
              }
            },
            emojiOptions: options
          }
        }
      }
    }
  }
})
