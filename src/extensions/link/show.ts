import { createApp } from 'vue-demi'
import type { Editor } from '@tiptap/vue-2'

import { getVuetifyInstance } from '@/utils/vuetify-instance'
import LinkDialog from './LinkDialog.vue'

export function show(editor: Editor) {
  const { href } = editor.getAttributes('link')

  const instance = createApp({
    ...LinkDialog,
    vuetify: getVuetifyInstance(),
    propsData: {
      editor,
      value: href,
      show: true
    }
  })

  instance.mount()
}
