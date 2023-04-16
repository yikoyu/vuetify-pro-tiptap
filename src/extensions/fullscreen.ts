import { Extension } from '@tiptap/core'
import FullscreenActionButton from './components/FullscreenActionButton.vue'
import type { ButtonView, GeneralOptions } from '@/type'

export interface FullscreenOptions extends GeneralOptions {
  button: ButtonView
}

export default Extension.create<FullscreenOptions>({
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
