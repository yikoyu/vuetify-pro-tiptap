import { getMarkRange } from '@tiptap/core'
import type { LinkOptions as TiptapLinkOptions } from '@tiptap/extension-link'
import { Link as TiptapLink } from '@tiptap/extension-link'
import { Plugin, TextSelection } from '@tiptap/pm/state'
import type { EditorView } from '@tiptap/pm/view'

import LinkDialog from './components/link/LinkDialog.vue'
import LinkActionButton from './components/LinkActionButton.vue'

import type { GeneralOptions } from '@/type'

/**
 * Represents the interface for link options, extending TiptapLinkOptions and GeneralOptions.
 */
export interface LinkOptions extends TiptapLinkOptions, GeneralOptions<LinkOptions> {
  /** Component for the link dialog */
  dialogComponent: any
}

export const Link = /* @__PURE__*/ TiptapLink.extend<LinkOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      openOnClick: false,
      dialogComponent: () => LinkDialog,
      button: ({ editor, extension, t }) => {
        const { dialogComponent } = extension.options

        return {
          component: LinkActionButton,
          componentProps: {
            isActive: () => editor.isActive('link') || false,
            disabled: !editor.can().setLink({ href: '' }),
            icon: 'link',
            tooltip: t('editor.link.tooltip')
          },
          componentSlots: {
            dialog: dialogComponent()
          }
        }
      }
    }
  },

  addProseMirrorPlugins() {
    return [
      new Plugin({
        props: {
          handleClick(view: EditorView, pos: number) {
            const { schema, doc, tr } = view.state

            const range = getMarkRange(doc.resolve(pos), schema.marks.link)

            if (!range) return false

            const $start = doc.resolve(range.from)
            const $end = doc.resolve(range.to)

            const transaction = tr.setSelection(new TextSelection($start, $end))

            view.dispatch(transaction)
            return true
          }
        }
      })
    ]
  }
})
