import { createApp } from 'vue-demi'
import type { Editor } from '@tiptap/vue-2'

import { getVuetifyInstance } from '@/utils/vuetify-instance'
import VideoDialog from './VideoDialog.vue'

export function show(editor: Editor) {
  const { src } = editor.getAttributes('iframe')

  const instance = createApp({
    ...VideoDialog,
    vuetify: getVuetifyInstance(),
    propsData: {
      editor,
      value: src,
      show: true
    }
  })

  instance.mount()
}
