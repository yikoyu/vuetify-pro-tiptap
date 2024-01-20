import type { LinkOptions as TiptapLinkOptions } from '@tiptap/extension-link'
import { Link as TiptapLink } from '@tiptap/extension-link'

import LinkDialog from './components/link/LinkDialog.vue'
import LinkActionButton from './components/LinkActionButton.vue'

import type { ButtonView, GeneralOptions } from '@/type'

export interface LinkOptions extends TiptapLinkOptions, GeneralOptions {
  button: ButtonView<LinkOptions>
  dialogComponent: any
}

export const Link = /* @__PURE__*/ TiptapLink.extend<LinkOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      openOnClick: true,
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
  }
})
