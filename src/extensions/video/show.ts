import type { Editor } from '@tiptap/vue-3'
import { createApp } from 'vue'

import { getVuetifyInstance } from '@/utils/vuetify-instance'
import VideoDialog from './VideoDialog.vue'

export function show(editor: Editor) {
  const { src } = editor.getAttributes('iframe')

  const root = document.createElement('div')

  const instance = createApp(VideoDialog, {
    editor,
    value: src,
    show: true,
    destroy: () => {
      instance.unmount()
      root && document.body.removeChild(root)
    }
  })

  instance.use(getVuetifyInstance())

  document.body.appendChild(root)
  instance.mount(root)
}
