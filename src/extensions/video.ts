import { Node } from '@tiptap/core'
import VideoActionButton from './components/VideoActionButton.vue'
import type { ButtonView, GeneralOptions } from '@/type'

export interface VideoOptions extends GeneralOptions {
  allowFullscreen: boolean
  frameborder: boolean
  HTMLAttributes: {
    [key: string]: any
  }
  button: ButtonView<VideoOptions>
}

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    video: {
      /**
       * Add an video
       */
      setVideo: (options: { src: string }) => ReturnType
    }
  }
}

function linkConvert(src: string) {
  // Convert youtube links
  src = src.replace('https://youtu.be/', 'https://www.youtube.com/watch?v=').replace('watch?v=', 'embed/')

  // Convert vimeo links
  src = src.replace('https://vimeo.com/', 'https://player.vimeo.com/video/')

  // Convert bilibili links
  const isBilibiliLink = /^https?:\/\/www.bilibili.com\/video\/.*/i.test(src)
  if (isBilibiliLink) {
    src = src.replace(/\?.*$/i, '').replace('https://www.bilibili.com/video/', 'https://player.bilibili.com/player.html?bvid=')
  }

  // Convert google drive links
  if (src.includes('drive.google.com')) {
    src = src.replace('/view', '/preview')
  }

  return src
}

export default Node.create<VideoOptions>({
  name: 'video',

  group: 'block',

  atom: true,

  addAttributes() {
    return {
      src: {
        default: null,
        renderHTML: ({ src }) => ({
          src: src ? linkConvert(src) : null
        })
      },
      width: {
        default: '100%'
      },
      height: {
        default: '100%'
      },
      frameborder: {
        default: this.options.frameborder ? 1 : 0,
        parseHTML: () => (this.options.frameborder ? 1 : 0)
      },
      allowfullscreen: {
        default: this.options.allowFullscreen,
        parseHTML: () => this.options.allowFullscreen
      }
    }
  },

  parseHTML() {
    return [
      {
        tag: 'iframe'
      }
    ]
  },

  renderHTML({ HTMLAttributes }) {
    const responsiveStyle = 'position: relative;overflow: hidden;display: flex;flex: 1;max-width: 640px;'
    const responsiveSizesStyle = `flex: 1;padding-bottom: ${(9 / 16) * 100}%;`

    const iframeDOM = ['iframe', HTMLAttributes]
    const sizesDOM = ['div', { style: responsiveSizesStyle }]
    const responsiveDOM = ['div', { style: responsiveStyle }, sizesDOM, iframeDOM]
    return ['div', this.options.HTMLAttributes, responsiveDOM]
  },

  addCommands() {
    return {
      setVideo:
        (options: { src: string }) =>
        ({ tr, dispatch }) => {
          const { selection } = tr
          const node = this.type.create(options)

          if (dispatch) {
            tr.replaceRangeWith(selection.from, selection.to, node)
          }

          return true
        }
    }
  },

  addOptions() {
    return {
      divider: false,
      spacer: false,
      allowFullscreen: true,
      frameborder: false,
      HTMLAttributes: {
        class: 'iframe-wrapper',
        style: 'display: flex;justify-content: center;'
      },
      button: ({ editor, t }) => ({
        component: VideoActionButton,
        componentProps: {
          isActive: () => editor.isActive('video') || false,
          icon: 'video',
          tooltip: t('editor.video.tooltip')
        }
      })
    }
  }
})
