import type { Extensions } from '@tiptap/core'
import { Extension } from '@tiptap/core'
import type { SubscriptExtensionOptions as TiptapSubscriptOptions } from '@tiptap/extension-subscript'
import { Subscript as TiptapSubscript } from '@tiptap/extension-subscript'
import type { SuperscriptExtensionOptions as TiptapSuperscriptOptions } from '@tiptap/extension-superscript'
import { Superscript as TiptapSuperscript } from '@tiptap/extension-superscript'

import ActionButton from './components/ActionButton.vue'

import type { ButtonView, ButtonViewReturn, GeneralOptions } from '@/type'

export interface SubAndSuperScriptOptions extends GeneralOptions {
  subscript: Partial<TiptapSubscriptOptions> | false
  superscript: Partial<TiptapSuperscriptOptions> | false
  button: ButtonView<SubAndSuperScriptOptions>
}

export const SubAndSuperScript = /* @__PURE__*/ Extension.create<SubAndSuperScriptOptions>({
  name: 'subAndSuperScript',

  addOptions() {
    return {
      ...this.parent?.(),
      button: ({ editor, extension, t }) => {
        const subscript = extension.options.subscript
        const superscript = extension.options.superscript

        const subBtn: ButtonViewReturn = {
          component: ActionButton,
          componentProps: {
            action: () => editor.commands.toggleSubscript(),
            isActive: () => editor.isActive('subscript') || false,
            icon: 'subscript',
            tooltip: t('editor.subscript.tooltip')
          }
        }

        const superBtn: ButtonViewReturn = {
          component: ActionButton,
          componentProps: {
            action: () => editor.commands.toggleSuperscript(),
            isActive: () => editor.isActive('superscript') || false,
            icon: 'superscript',
            tooltip: t('editor.superscript.tooltip')
          }
        }

        const items: ButtonViewReturn[] = []

        if (subscript !== false) items.push(subBtn)
        if (superscript !== false) items.push(superBtn)

        return items
      }
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
  }
})
