import Vue from 'vue'
import type { Editor } from '@tiptap/vue-2'
import type { NodeSelection } from 'prosemirror-state'

import { getVuetifyInstance } from '@/utils/vuetify-instance'
import ImageDialog from './ImageDialog.vue'

export function show(editor: Editor) {
  const { upload, imageTabs, hiddenTabs } = editor.storage['image'] || {}

  const value: { src?: string; alt?: string } = {}
  const selection = editor?.view.state.selection as NodeSelection | null
  if (selection?.node?.attrs) {
    value.src = selection.node.attrs.src
    value.alt = selection.node.attrs.alt
  }

  const ImageDialogComponent = Vue.extend(ImageDialog)
  const instance = new ImageDialogComponent({
    vuetify: getVuetifyInstance(),
    propsData: {
      editor,
      value,
      show: true,
      upload,
      imageTabs,
      hiddenTabs
    }
  })

  instance.$mount()
  document.querySelector('body')?.appendChild(instance.$el)
}
