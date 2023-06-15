import { Extension } from '@tiptap/core'

import FullscreenActionButton from './components/FullscreenActionButton.vue'

import type { ButtonView, GeneralOptions } from '@/type'

export interface FullscreenOptions extends GeneralOptions {
  button: ButtonView
}

export const Fullscreen = /* @__PURE__*/ Extension.create<FullscreenOptions>({
  name: 'fullscreen',
  addOptions() {
    return {
      ...this.parent?.(),
      button: ({ editor, t }) => ({
        component: FullscreenActionButton,
        componentProps: {}
      })
    }
  }
})
