import type { TextAlignOptions as TiptapTextAlignOptions } from '@tiptap/extension-text-align'
import { TextAlign as TiptapTextAlign } from '@tiptap/extension-text-align'

import type { Item } from './components/ActionMenuButton.vue'
import ActionMenuButton from './components/ActionMenuButton.vue'

import type { GeneralOptions } from '@/type'

/** Represents the type for text alignments */
type Alignments = 'left' | 'center' | 'right' | 'justify'

/**
 * Represents the interface for text align options, extending TiptapTextAlignOptions and GeneralOptions.
 */
export interface TextAlignOptions extends TiptapTextAlignOptions, GeneralOptions<TextAlignOptions> {
  /**
   * List of available alignment options
   *
   * @default ['left', 'center', 'right', 'justify']
   */
  alignments: Alignments[]
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
          action: () => editor.commands.setTextAlign(k),
          disabled: !editor.can().setTextAlign(k)
        }))

        const disabled = items.filter(k => k.disabled).length === items.length

        return {
          component: ActionMenuButton,
          componentProps: {
            icon: 'center',
            tooltip: t('editor.textalign.tooltip'),
            disabled,
            items
          }
        }
      }
    }
  }
})
