import type { ImageOptions as TiptapImageOptions } from '@tiptap/extension-image'
import Image from '@tiptap/extension-image'
import { VueNodeViewRenderer } from '@tiptap/vue-3'
import ImageView from './components/image/Image.vue'
import ImageActionButton from './components/ImageActionButton.vue'
import type { ImageAttrsOptions, ImageTab, ImageTabKey } from './components/image/types'
import type { ButtonView, GeneralOptions } from '@/type'

type Upload = (file: File) => Promise<string>
export interface ImageOptions extends TiptapImageOptions, GeneralOptions {
  upload?: Upload
  imageTabs: ImageTab[]
  hiddenTabs: ImageTabKey[]
  button: ButtonView<ImageOptions>
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

export default Image.extend<ImageOptions>({
  addAttributes() {
    return {
      ...this.parent?.(),
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
    return VueNodeViewRenderer(ImageView)
  },
  addOptions() {
    return {
      ...this.parent?.(),
      upload: undefined,
      imageTabs: [],
      hiddenTabs: [],
      inline: true,
      button: ({ editor, extension, t }) => {
        const { upload, imageTabs, hiddenTabs } = extension.options

        return {
          component: ImageActionButton,
          componentProps: {
            editor,
            upload,
            imageTabs,
            hiddenTabs,
            isActive: () => editor.isActive('image') || false,
            icon: 'image',
            tooltip: t('editor.image.tooltip')
          }
        }
      }
    }
  }
})
