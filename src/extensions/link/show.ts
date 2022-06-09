import Vue from 'vue'
import type { Editor } from '@tiptap/vue-2'

import { getVuetifyInstance } from '@/utils/vuetify-instance'
import LinkDialog from './LinkDialog.vue'

export function show(editor: Editor) {
  const { href } = editor.getAttributes('link')

  const LinkDialogComponent = Vue.extend(LinkDialog)
  const instance = new LinkDialogComponent({
    vuetify: getVuetifyInstance(),
    propsData: {
      editor,
      value: href,
      show: true
    }
  })

  instance.$mount()
  document.querySelector('body')?.appendChild(instance.$el)
}
