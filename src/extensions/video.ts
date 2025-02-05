import type { GeneralOptions } from '@/type'

import { VIDEO_SIZE } from '@/constants/define'
import { getCssUnitWithDefault } from '@/utils/utils'
import { Node  } from '@tiptap/core'
import { VueNodeViewRenderer } from '@tiptap/vue-3'
import VideoDialog from './components/video/VideoDialog.vue'
import VideoNodeView from './components/video/VideoNodeView.vue'
import VideoActionButton from './components/VideoActionButton.vue'

/**
 * Represents the interface for video options, extending GeneralOptions.
 */
export interface VideoOptions extends GeneralOptions<VideoOptions> {
  hrefRules?: string
  /**
   * Indicates whether fullscreen play is allowed
   *
   * @default true
   */
  allowFullscreen: boolean
  /**
   * Indicates whether to display the frameborder
   *
   * @default false
   */
  frameborder: boolean
  /**
   * Width of the video, can be a number or string
   *
   * @default VIDEO_SIZE['size-medium']
   */
  width: number | string
  /** HTML attributes object for passing additional attributes */
  HTMLAttributes: {
    [key: string]: any
  }
  /** Component for the video dialog */
  dialogComponent: any
}

/**
 * Represents the type for setting video options
 */
type SetVideoOptions = {
  /** The source URL of the video */
  src: string
  /** The width of the video */
  width: string | number
}

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

function linkConvert(src: string | number) {
  src = String(src)
  // Convert youtube links
  src = src.replace('https://youtu.be/', 'https://www.youtube.com/watch?v=').replace('watch?v=', 'embed/')

  // Convert vimeo links
  src = src.replace('https://vimeo.com/', 'https://player.vimeo.com/video/')

  // Convert bilibili links
  const isBilibiliLink = /^https?:\/\/www\.bilibili\.com\/video\/.*/i.test(src)
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
          width: getCssUnitWithDefault(width)
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

    return ['div', { 'data-video': '' }, [
      'iframe',
      {
        ...HTMLAttributes,
        width: '100%',
        height: '100%'
      }
    ]]
  },

  addNodeView() {
    return VueNodeViewRenderer(VideoNodeView)
  },

  addCommands() {
    return {
      setVideo:
        options =>
          ({ commands }) => {
            console.log('Inserting video with options:', options)  // 调试日志
          return commands.insertContent({
            type: this.name,
            attrs: options
          })
        },

      updateVideo:
        options =>
          ({ commands }) => {
            console.log('Updating video with options:', options)  // 调试日志
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
      hrefRules: '[value => !/^http:\\/\\//.test(value) || "URL should not start with http://"]',
      HTMLAttributes: {
        class: 'iframe-wrapper',
        style: 'display: flex;justify-content: center;'
      },
      dialogComponent: () => VideoDialog,
      button: ({ editor, extension, t }) => {
        const { dialogComponent, hrefRules } = extension.options

        return {
          component: VideoActionButton,
          componentProps: {
            hrefRules,
            isActive: () => editor.isActive('video') || false,
            icon: 'video',
            tooltip: t('editor.video.tooltip')
          },
          componentSlots: {
            dialog: dialogComponent()
          },
          disabled: !editor.can().setVideo({})
        }
      }
    }
  }
})
