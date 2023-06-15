import type { ButtonView, GeneralOptions } from 'vuetify-pro-tiptap'
import { Extension } from '@tiptap/core'

import PreviewActionButton from '../components/PreviewActionButton.vue'

export interface PreviewOptions extends GeneralOptions {
  button: ButtonView
}

export default Extension.create<PreviewOptions>({
  name: 'preview',
  addOptions() {
    return {
      divider: false,
      spacer: false,
      button: () => ({
        component: PreviewActionButton,
        componentProps: {}
      })
    }
  }
})
