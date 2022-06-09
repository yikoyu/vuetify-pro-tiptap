import Vue from 'vue'
import type { Editor } from '@tiptap/vue-2'

import { getVuetifyInstance } from '@/utils/vuetify-instance'
import VideoDialog from './VideoDialog.vue'

export function show(editor: Editor) {
  const { src } = editor.getAttributes('iframe')

  const VideoDialogComponent = Vue.extend(VideoDialog)
  const instance = new VideoDialogComponent({
    vuetify: getVuetifyInstance(),
    propsData: {
      editor,
      value: src,
      show: true
    }
  })

  instance.$mount()
  document.querySelector('body')?.appendChild(instance.$el)
}
