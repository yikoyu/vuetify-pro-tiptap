import type { LinkOptions as TiptapLinkOptions } from '@tiptap/extension-link'
import type { EditorView } from '@tiptap/pm/view'
import type { GeneralOptions } from '@/type'
import { getMarkRange } from '@tiptap/core'
import { Link as TiptapLink } from '@tiptap/extension-link'

import { Plugin, TextSelection } from '@tiptap/pm/state'
import { LinkActionButton } from './components/ActionButton'

import LinkDialog from './components/link/LinkDialog.vue'

/**
 * Represents the interface for link options, extending TiptapLinkOptions and GeneralOptions.
 */
export interface LinkOptions extends TiptapLinkOptions, GeneralOptions<LinkOptions> {
  /** Component for the link dialog */
  dialogComponent: any
}

export const Link = /* @__PURE__ */ TiptapLink.extend<LinkOptions>({
  addOptions() {
    return {
      ...this.parent?.() as TiptapLinkOptions,
      openOnClick: false,
      dialogComponent: () => LinkDialog,
      button: ({ editor, extension, t }) => {
        const { dialogComponent } = extension.options

        return {
          component: LinkActionButton,
          componentProps: {
            editor,
            t,
          },
          componentSlots: {
            dialog: dialogComponent(),
          },
        }
      },
    }
  },

  addProseMirrorPlugins() {
    return [
      ...(this.parent?.() || []),
      new Plugin({
        props: {
          handleClick(view: EditorView, pos: number) {
            const { schema, doc, tr } = view.state

            const range = getMarkRange(doc.resolve(pos), schema.marks.link)

            if (!range)
              return false

            const $start = doc.resolve(range.from)
            const $end = doc.resolve(range.to)

            const transaction = tr.setSelection(new TextSelection($start, $end))

            view.dispatch(transaction)
            return true
          },
        },
      }),
    ]
  },
})
