import type { NodeSelection } from '@tiptap/pm/state'
import type { Editor } from '@tiptap/vue-3'
import { createApp } from 'vue'

import { getVuetifyInstance } from '@/utils/vuetify-instance'
import ImageDialog from './ImageDialog.vue'
import type { ImageAttrsOptions } from './types'

export function show(editor: Editor) {
  const extensionImage = editor.extensionManager.extensions.find(k => k.name === 'image')
  const { upload, imageTabs, hiddenTabs } = extensionImage?.options || {}

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

  const root = document.createElement('div')

  const instance = createApp(ImageDialog, {
    editor,
    value,
    show: true,
    upload,
    imageTabs,
    hiddenTabs,
    destroy: () => {
      instance.unmount()
      root && document.body.removeChild(root)
    }
  })

  instance.use(getVuetifyInstance())

  document.body.appendChild(root)
  instance.mount(root)
}
