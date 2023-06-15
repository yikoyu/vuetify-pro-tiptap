import type { TextAlignOptions as TiptapTextAlignOptions } from '@tiptap/extension-text-align'
import { TextAlign as TiptapTextAlign } from '@tiptap/extension-text-align'

import type { Item } from './components/ActionMenuButton.vue'
import ActionMenuButton from './components/ActionMenuButton.vue'

import type { ButtonView, GeneralOptions } from '@/type'

type Alignments = 'left' | 'center' | 'right' | 'justify'

export interface TextAlignOptions extends TiptapTextAlignOptions, GeneralOptions {
  button: ButtonView<TextAlignOptions>
  alignments: Alignments[]
  options: TextAlignOptions
}

export const TextAlign = /* @__PURE__*/ TiptapTextAlign.extend<TextAlignOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      types: ['heading', 'paragraph', 'image'],
      button: ({ editor, extension, t }) => {
        const alignments = (extension.options?.alignments as Alignments[]) || []

        const items: Item[] = alignments.map(k => ({
          title: t(`editor.textalign.${k}.tooltip`),
          icon: k,
          isActive: () => editor.isActive({ textAlign: k }) || false,
          action: () => editor.commands.setTextAlign(k)
        }))

        return {
          component: ActionMenuButton,
          componentProps: {
            icon: 'center',
            tooltip: t('editor.textalign.tooltip'),
            items
          }
        }
      }
    }
  }
})
