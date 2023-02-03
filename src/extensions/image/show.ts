import { createApp } from 'vue-demi'
import type { Editor } from '@tiptap/vue-2'
import type { NodeSelection } from '@tiptap/pm/state'

import { getVuetifyInstance } from '@/utils/vuetify-instance'
import ImageDialog from './ImageDialog.vue'
import type { ImageAttrsOptions } from './types'

export function show(editor: Editor) {
  const { upload, imageTabs, hiddenTabs } = editor.storage['image'] || {}

  const value: ImageAttrsOptions = {}
  const selection = editor?.view.state.selection as NodeSelection | null
  if (selection?.node?.attrs) {
    const attrs = selection.node.attrs as ImageAttrsOptions
    value.src = attrs.src || undefined
    value.alt = attrs.alt || undefined
    value.title = attrs.title || undefined
    value.lockAspectRatio = attrs.lockAspectRatio ?? true
    value.width = attrs.width || undefined
    value.height = attrs.height || undefined
    value.display = attrs.display || undefined
  } else {
    value.lockAspectRatio = true
  }

  const instance = createApp({
    ...ImageDialog,
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

  instance.mount()
}
