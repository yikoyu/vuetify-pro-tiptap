import type { HeadingOptions as TiptapHeadingOptions } from '@tiptap/extension-heading'
import type { GeneralOptions } from '@/type'
import { Heading as TiptapHeading } from '@tiptap/extension-heading'

import { HeadingActionMenuButton } from './components/ActionMenuButton'

export interface HeadingOptions extends TiptapHeadingOptions, GeneralOptions<HeadingOptions> {}

export const Heading = /* @__PURE__ */ TiptapHeading.extend<HeadingOptions>({
  addOptions() {
    return {
      ...this.parent?.() as TiptapHeadingOptions,
      levels: [1, 2, 3, 4, 5, 6],
      button: ({ editor, extension, t }) => {
        return {
          component: HeadingActionMenuButton,
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
