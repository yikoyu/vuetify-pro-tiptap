import type { Editor } from '@tiptap/vue-3'
import { createApp } from 'vue'

import { getVuetifyInstance } from '@/utils/vuetify-instance'
import LinkDialog from './LinkDialog.vue'

export function show(editor: Editor) {
  const { href } = editor.getAttributes('link')

  const root = document.createElement('div')

  const instance = createApp(LinkDialog, {
    editor,
    value: href,
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
