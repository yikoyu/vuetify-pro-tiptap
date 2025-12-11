import type { Extensions } from '@tiptap/core'
import type { SubscriptExtensionOptions as TiptapSubscriptOptions } from '@tiptap/extension-subscript'
import type { SuperscriptExtensionOptions as TiptapSuperscriptOptions } from '@tiptap/extension-superscript'
import type { GeneralOptions } from '@/type'
import { Extension } from '@tiptap/core'
import { Subscript as TiptapSubscript } from '@tiptap/extension-subscript'

import { Superscript as TiptapSuperscript } from '@tiptap/extension-superscript'

import { SubscriptActionButton } from './components/ActionButton'

/**
 * Represents the interface for subscript and superscript options, extending GeneralOptions.
 */
export interface SubAndSuperScriptOptions extends GeneralOptions<SubAndSuperScriptOptions> {
  /**
   * subscript options or false, indicating whether subscript is enabled
   *
   * @default undefined
   */
  subscript?: Partial<TiptapSubscriptOptions> | false
  /**
   * superscript options or false, indicating whether superscript is enabled
   *
   * @default undefined
   */
  superscript?: Partial<TiptapSuperscriptOptions> | false
}

export const SubAndSuperScript = /* @__PURE__ */ Extension.create<SubAndSuperScriptOptions>({
  name: 'subAndSuperScript',

  addOptions() {
    return {
      ...this.parent?.(),
      button: ({ editor, extension, t }) => ({
        component: SubscriptActionButton,
        componentProps: {
          editor,
          extension,
          t,
        },
      }),
    }
  },

  addExtensions() {
    const extensions: Extensions = []

    if (this.options.subscript !== false) {
      extensions.push(TiptapSubscript.configure(this.options.subscript))
    }

    if (this.options.superscript !== false) {
      extensions.push(TiptapSuperscript.configure(this.options.superscript))
    }

    return extensions
  },
})
