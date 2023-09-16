import { Extension } from '@tiptap/core'

import FullscreenActionButton from './components/FullscreenActionButton.vue'

import type { ButtonView, GeneralOptions } from '@/type'

export interface FullscreenOptions extends GeneralOptions {
  button: ButtonView<FullscreenOptions>
  useWindow: boolean
}

export const Fullscreen = /* @__PURE__*/ Extension.create<FullscreenOptions>({
  name: 'fullscreen',
  addOptions() {
    return {
      ...this.parent?.(),
      useWindow: false,
      button: ({ editor, extension, t }) => ({
        component: FullscreenActionButton,
        componentProps: {
          useWindow: extension.options.useWindow ?? false
        }
      })
    }
  }
})
