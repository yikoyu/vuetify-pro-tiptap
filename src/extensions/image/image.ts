import Image from '@tiptap/extension-image'
import type { ImageOptions as ImageNativeOptions } from '@tiptap/extension-image'
import ImageView from './Image.vue'
import { VueNodeViewRenderer } from '@tiptap/vue-2'
import type { ImageTab, ImageTabKey, ImageAttrsOptions } from './types'

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

interface SetImageAttrsOptions extends ImageAttrsOptions {
  src: string
}

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    imageResize: {
      /**
       * Add an image
       */
      setImage: (options: SetImageAttrsOptions) => ReturnType
    }
  }
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
      lockAspectRatio: {
        default: true
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
          const display = element.getAttribute('data-display')
          return display || 'inline'
        }
      }
    }
  },
  addNodeView() {
    return VueNodeViewRenderer(ImageView as any)
  }
})
