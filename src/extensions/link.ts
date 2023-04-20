import { Link } from '@tiptap/extension-link'
import LinkActionButton from './components/LinkActionButton.vue'
import type { LinkOptions as TiptapLinkOptions } from '@tiptap/extension-link'
import type { ButtonView, GeneralOptions } from '@/type'

export interface LinkOptions extends TiptapLinkOptions, GeneralOptions {
  button: ButtonView
}

export default Link.extend<LinkOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      openOnClick: true,
      button: ({ editor, t }) => ({
        component: LinkActionButton,
        componentProps: {
          isActive: () => editor.isActive('link') || false,
          icon: 'link',
          tooltip: t('editor.link.tooltip')
        }
      })
    }
  }
})
