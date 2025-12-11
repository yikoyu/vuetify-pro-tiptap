import type { GeneralOptions } from '@/type'

import { Extension } from '@tiptap/core'

import { FullscreenActionButton } from './components/ActionButton'

/**
 * Represents the interface for fullscreen options, extending GeneralOptions.
 */
export interface FullscreenOptions extends GeneralOptions<FullscreenOptions> {
  /**
   * Indicates whether to use window fullscreen mode
   *
   * @default false
   */
  useWindow: boolean
}

export const Fullscreen = /* @__PURE__ */ Extension.create<FullscreenOptions>({
  name: 'fullscreen',
  addOptions() {
    return {
      ...this.parent?.(),
      useWindow: false,
      button: ({ editor, extension, t }) => ({
        component: FullscreenActionButton,
        componentProps: {
          editor,
          t,
          useWindow: extension.options.useWindow ?? false,
        },
      }),
    }
  },
})
