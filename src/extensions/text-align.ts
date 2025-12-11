import type { TextAlignOptions as TiptapTextAlignOptions } from '@tiptap/extension-text-align'
import type { GeneralOptions } from '@/type'

import { TextAlign as TiptapTextAlign } from '@tiptap/extension-text-align'

import { TextAlignActionMenuButton } from './components/ActionMenuButton'

/** Represents the type for text alignments */
export type Alignments = 'left' | 'center' | 'right' | 'justify'

/**
 * Represents the interface for text align options, extending TiptapTextAlignOptions and GeneralOptions.
 */
export interface TextAlignOptions extends TiptapTextAlignOptions, GeneralOptions<TextAlignOptions> {
  /**
   * List of available alignment options
   *
   * @default ['left', 'center', 'right', 'justify']
   */
  alignment?: Alignments[]
}

export const TextAlign = /* @__PURE__ */ TiptapTextAlign.extend<TextAlignOptions>({
  addOptions() {
    return {
      ...this.parent?.() as TiptapTextAlignOptions,
      types: ['heading', 'paragraph'],
      button: ({ editor, extension, t }) => {
        return {
          component: TextAlignActionMenuButton,
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
