import { Node } from '@tiptap/core'

import VideoActionButton from './components/VideoActionButton.vue'

import { VIDEO_SIZE } from '@/constants/define'
import type { ButtonView, GeneralOptions } from '@/type'
import { getUnitWithPxAsDefault } from '@/utils/utils'

export interface VideoOptions extends GeneralOptions {
  allowFullscreen: boolean
  frameborder: boolean
  width: number | string
  HTMLAttributes: {
    [key: string]: any
  }
  button: ButtonView<VideoOptions>
}

type SetVideoOptions = { src: string; width: string | number }

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    video: {
      /**
       * Add an video
       */
      setVideo: (options: Partial<SetVideoOptions>) => ReturnType
      /**
       * Update an video
       */
      updateVideo: (options: Partial<SetVideoOptions>) => ReturnType
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
    src = src
      .replace(/\?.*$/i, '')
      .replace('https://www.bilibili.com/video/', 'https://player.bilibili.com/player.html?bvid=')
  }

  // Convert google drive links
  if (src.includes('drive.google.com')) {
    src = src.replace('/view', '/preview')
  }

  return src
}

export const Video = /* @__PURE__*/ Node.create<VideoOptions>({
  name: 'video',

  group: 'block',

  atom: true,

  draggable: true,

  addAttributes() {
    return {
      src: {
        default: null,
        renderHTML: ({ src }) => ({
          src: src ? linkConvert(src) : null
        })
      },
      width: {
        default: this.options.width,
        renderHTML: ({ width }) => ({
          width: getUnitWithPxAsDefault(width)
        })
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
        tag: 'div[data-video] iframe'
      }
    ]
  },

  renderHTML({ HTMLAttributes }) {
    const { width = '100%' } = HTMLAttributes ?? {}

    const iframeHTMLAttributes = {
      ...HTMLAttributes,
      width: '100%',
      height: '100%'
    }

    const responsiveStyle = `position: relative;overflow: hidden;display: flex;flex: 1;max-width: ${width};`
    const responsiveSizesStyle = `flex: 1;padding-bottom: ${(9 / 16) * 100}%;`

    const iframeDOM = ['iframe', iframeHTMLAttributes]
    const sizesDOM = ['div', { style: responsiveSizesStyle }]
    const responsiveDOM = ['div', { style: responsiveStyle }, sizesDOM, iframeDOM]

    const divAttrs = {
      ...this.options.HTMLAttributes,
      'data-video': ''
    }

    return ['div', divAttrs, responsiveDOM]
  },

  addCommands() {
    return {
      setVideo:
        options =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            attrs: options
          })
        },

      updateVideo:
        options =>
        ({ commands }) => {
          return commands.updateAttributes(this.name, options)
        }
    }
  },

  addOptions() {
    return {
      divider: false,
      spacer: false,
      allowFullscreen: true,
      frameborder: false,
      width: VIDEO_SIZE['size-medium'],
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
