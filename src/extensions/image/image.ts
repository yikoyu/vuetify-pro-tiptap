import type { VueConstructor } from 'vue'
import Image, { type ImageOptions as ImageNativeOptions } from '@tiptap/extension-image'
import ImageView from './Image.vue'
import { VueNodeViewRenderer } from '@tiptap/vue-2'
import type { ImageTab, ImageTabKey } from './types'

type Upload = (file: File) => Promise<string>
export interface ImageOptions extends ImageNativeOptions {
  upload?: Upload
  imageTabs: ImageTab[]
  hiddenTabs: ImageTabKey[]
}

export interface ImageStorage {
  upload?: Upload
  imageTabs: ImageTab[]
  hiddenTabs: ImageTabKey[]
}

export default Image.extend<ImageOptions, ImageStorage>({
  addStorage() {
    return {
      upload: this.options.upload,
      imageTabs: this.options.imageTabs,
      hiddenTabs: this.options.hiddenTabs
    }
  },
  addAttributes() {
    return {
      src: {
        default: null
      },
      alt: {
        default: null
      },
      width: {
        default: '100%'
      },
      height: {
        default: null
      },
      display: {
        default: 'inline',
        renderHTML: ({ display }) => {
          if (!display) {
            return {}
          }

          return {
            'data-display': display
          }
        },
        parseHTML: element => {
          const display = element.style.float ? element.style.float.replace(/['"]+/g, '') : element.style.display.replace(/['"]+/g, '')
          return display
        }
      }
    }
  },
  addNodeView() {
    return VueNodeViewRenderer(ImageView as VueConstructor)
  }
})
