import { unref, computed, ShallowRef, Ref } from 'vue'
import type { Editor } from '@tiptap/vue-3'
import { useLocale } from '@/locales'
import * as icons from './icons'
import { setSvg, mdiFullscreenExit } from './icons'
import type { IconsOptions } from './icons'

import { show as showImage } from '@/extensions/image/show'
import { show as showLink } from '@/extensions/link/show'
import { show as showVideo } from '@/extensions/video/show'

export type ToolbarType = keyof IconsOptions | '|' | 'divider' | '>' | 'spacer' | `#${string}`

interface Context {
  editor: ShallowRef<Editor | undefined>
  isFullscreen: Ref<boolean>
  toolbar: ToolbarType[]
}

export interface Definitions {
  title?: string
  icon?: string
  type: ToolbarType | 'slot'
  slot?: string
  action?(value?: unknown): void
  isActive?(): boolean
}

export function useMakeToolbarDefinitions({ editor, isFullscreen, toolbar }: Context) {
  const { t } = useLocale()

  const definitions = computed<Record<ToolbarType, Definitions>>(() => ({
    // Special items
    '|': { type: 'divider' },
    divider: { type: 'divider' },
    '>': { type: 'spacer' },
    spacer: { type: 'spacer' },
    // Standard buttons
    bold: {
      title: unref(t)('editor.bold.tooltip'),
      icon: icons.get('bold'),
      type: 'bold',
      action: () => unref(editor)?.chain().focus().toggleBold().run(),
      isActive: () => unref(editor)?.isActive('bold') || false
    },
    italic: {
      title: unref(t)('editor.italic.tooltip'),
      icon: icons.get('italic'),
      type: 'italic',
      action: () => unref(editor)?.chain().focus().toggleItalic().run(),
      isActive: () => unref(editor)?.isActive('italic') || false
    },
    underline: {
      title: unref(t)('editor.underline.tooltip'),
      icon: icons.get('underline'),
      type: 'underline',
      action: () => unref(editor)?.chain().focus().toggleUnderline().run(),
      isActive: () => unref(editor)?.isActive('underline') || false
    },
    strike: {
      title: unref(t)('editor.strike.tooltip'),
      icon: icons.get('strike'),
      type: 'strike',
      action: () => unref(editor)?.chain().focus().toggleStrike().run(),
      isActive: () => unref(editor)?.isActive('strike') || false
    },
    color: {
      title: unref(t)('editor.color.tooltip'),
      icon: icons.get('color'),
      type: 'color',
      action: (color: string) => unref(editor)?.chain().focus().setColor(color).run(),
      isActive: () => unref(editor)?.isActive('textStyle') || false
    },
    highlight: {
      // 需优化，选择颜色
      title: unref(t)('editor.highlight.tooltip'),
      icon: icons.get('highlight'),
      type: 'highlight',
      action: (color: string) => unref(editor)?.chain().focus().setHighlight({ color }).run(),
      isActive: () => unref(editor)?.isActive('highlight') || false
    },
    h1: {
      title: unref(t)('editor.heading.h1.tooltip'),
      icon: icons.get('h1'),
      type: 'h1',
      action: () => unref(editor)?.chain().focus().toggleHeading({ level: 1 }).run(),
      isActive: () => unref(editor)?.isActive('heading', { level: 1 }) || false
    },
    h2: {
      title: unref(t)('editor.heading.h2.tooltip'),
      icon: icons.get('h2'),
      type: 'h2',
      action: () => unref(editor)?.chain().focus().toggleHeading({ level: 2 }).run(),
      isActive: () => unref(editor)?.isActive('heading', { level: 2 }) || false
    },
    h3: {
      title: unref(t)('editor.heading.h3.tooltip'),
      icon: icons.get('h3'),
      type: 'h3',
      action: () => unref(editor)?.chain().focus().toggleHeading({ level: 3 }).run(),
      isActive: () => unref(editor)?.isActive('heading', { level: 3 }) || false
    },
    h4: {
      title: unref(t)('editor.heading.h4.tooltip'),
      icon: icons.get('h4'),
      type: 'h4',
      action: () => unref(editor)?.chain().focus().toggleHeading({ level: 4 }).run(),
      isActive: () => unref(editor)?.isActive('heading', { level: 4 }) || false
    },
    h5: {
      title: unref(t)('editor.heading.h5.tooltip'),
      icon: icons.get('h5'),
      type: 'h5',
      action: () => unref(editor)?.chain().focus().toggleHeading({ level: 5 }).run(),
      isActive: () => unref(editor)?.isActive('heading', { level: 5 }) || false
    },
    h6: {
      title: unref(t)('editor.heading.h6.tooltip'),
      icon: icons.get('h6'),
      type: 'h6',
      action: () => unref(editor)?.chain().focus().toggleHeading({ level: 6 }).run(),
      isActive: () => unref(editor)?.isActive('heading', { level: 6 }) || false
    },
    p: {
      title: unref(t)('editor.paragraph.tooltip'),
      icon: icons.get('p'),
      type: 'p',
      action: () => unref(editor)?.chain().focus().setParagraph().run(),
      isActive: () => unref(editor)?.isActive('paragraph') || false
    },
    left: {
      title: unref(t)('editor.left.tooltip'),
      icon: icons.get('left'),
      type: 'left',
      action: () => unref(editor)?.chain().focus().setTextAlign('left').run(),
      isActive: () => unref(editor)?.isActive({ textAlign: 'left' }) || false
    },
    center: {
      title: unref(t)('editor.center.tooltip'),
      icon: icons.get('center'),
      type: 'center',
      action: () => unref(editor)?.chain().focus().setTextAlign('center').run(),
      isActive: () => unref(editor)?.isActive({ textAlign: 'center' }) || false
    },
    right: {
      title: unref(t)('editor.right.tooltip'),
      icon: icons.get('right'),
      type: 'right',
      action: () => unref(editor)?.chain().focus().setTextAlign('right').run(),
      isActive: () => unref(editor)?.isActive({ textAlign: 'right' }) || false
    },
    justify: {
      title: unref(t)('editor.justify.tooltip'),
      icon: icons.get('justify'),
      type: 'justify',
      action: () => unref(editor)?.chain().focus().setTextAlign('justify').run(),
      isActive: () => unref(editor)?.isActive({ textAlign: 'justify' }) || false
    },
    bulletList: {
      title: unref(t)('editor.bulletlist.tooltip'),
      icon: icons.get('bulletList'),
      type: 'bulletList',
      action: () => unref(editor)?.chain().focus().toggleBulletList().run(),
      isActive: () => unref(editor)?.isActive('bulletList') || false
    },
    orderedList: {
      title: unref(t)('editor.orderedlist.tooltip'),
      icon: icons.get('orderedList'),
      type: 'orderedList',
      action: () => unref(editor)?.chain().focus().toggleOrderedList().run(),
      isActive: () => unref(editor)?.isActive('orderedList') || false
    },
    taskList: {
      title: unref(t)('editor.tasklist.tooltip'),
      icon: icons.get('taskList'),
      type: 'taskList',
      action: () => unref(editor)?.chain().focus().toggleTaskList().run(),
      isActive: () => unref(editor)?.isActive('taskList') || false
    },
    indent: {
      title: unref(t)('editor.indent.tooltip'),
      icon: icons.get('indent'),
      type: 'indent',
      action: () => unref(editor)?.chain().sinkListItem('listItem').run()
    },
    outdent: {
      title: unref(t)('editor.outdent.tooltip'),
      icon: icons.get('outdent'),
      type: 'outdent',
      action: () => unref(editor)?.chain().liftListItem('listItem').run()
    },
    link: {
      title: unref(t)('editor.link.tooltip'),
      icon: icons.get('link'),
      type: 'link',
      action: () => {
        if (editor.value) showLink(editor.value)
      },
      isActive: () => unref(editor)?.isActive('link') || false
    },
    image: {
      title: unref(t)('editor.image.tooltip'),
      icon: icons.get('image'),
      type: 'image',
      action: () => {
        if (editor.value) showImage(editor.value)
      },
      isActive: () => unref(editor)?.isActive('image') || false
    },
    video: {
      title: unref(t)('editor.video.tooltip'),
      icon: icons.get('video'),
      type: 'video',
      action: () => {
        if (editor.value) showVideo(editor.value)
      },
      isActive: () => unref(editor)?.isActive('iframe') || false
    },
    table: {
      title: unref(t)('editor.table.tooltip'),
      icon: icons.get('table'),
      type: 'table',
      action: () => {},
      isActive: () => unref(editor)?.isActive('table') || false
    },
    blockquote: {
      title: unref(t)('editor.blockquote.tooltip'),
      icon: icons.get('blockquote'),
      type: 'blockquote',
      action: () => unref(editor)?.chain().focus().toggleBlockquote().run(),
      isActive: () => unref(editor)?.isActive('blockquote') || false
    },
    rule: {
      // 无底边框
      title: unref(t)('editor.horizontalrule.tooltip'),
      icon: icons.get('rule'),
      type: 'rule',
      action: () => unref(editor)?.chain().focus().setHorizontalRule().run()
    },
    code: {
      // 样式错误，样式为 code
      title: unref(t)('editor.code.tooltip'),
      icon: icons.get('code'),
      type: 'code',
      action: () => unref(editor)?.chain().focus().toggleCode().run(),
      isActive: () => unref(editor)?.isActive('code') || false
    },
    codeBlock: {
      title: unref(t)('editor.codeblock.tooltip'),
      icon: icons.get('codeBlock'),
      type: 'codeBlock',
      action: () => unref(editor)?.chain().focus().toggleCodeBlock().run(),
      isActive: () => unref(editor)?.isActive('codeBlock') || false
    },
    clear: {
      title: unref(t)('editor.clear.tooltip'),
      icon: icons.get('clear'),
      type: 'clear',
      action: () => unref(editor)?.chain().focus().clearNodes().unsetAllMarks().run()
    },
    undo: {
      title: unref(t)('editor.undo.tooltip'),
      icon: icons.get('undo'),
      type: 'undo',
      action: () => unref(editor)?.chain().undo().run()
    },
    redo: {
      title: unref(t)('editor.redo.tooltip'),
      icon: icons.get('redo'),
      type: 'redo',
      action: () => unref(editor)?.chain().redo().run()
    },
    fullscreen: {
      title: unref(isFullscreen) ? unref(t)('editor.fullscreen.tooltip.exit') : unref(t)('editor.fullscreen.tooltip.fullscreen'),
      icon: unref(isFullscreen) ? setSvg(mdiFullscreenExit) : icons.get('fullscreen'),
      type: 'fullscreen',
      action: () => {
        isFullscreen.value = !unref(isFullscreen)

        if (unref(isFullscreen)) {
          document.documentElement.classList.add('overflow-y-hidden')
        } else {
          document.documentElement.classList.remove('overflow-y-hidden')
        }

        return unref(isFullscreen)
      }
    }
  }))

  const items = computed(() => {
    if (!unref(editor)) return []
    const toolbarItems: Definitions[] = []

    for (const i of toolbar) {
      const item = unref(definitions)[i]
      if (item) {
        toolbarItems.push(item)
      } else if (i[0] === '#') {
        toolbarItems.push({ type: 'slot', slot: i.substring(1) })
      }
    }

    return toolbarItems
  })

  return {
    items
  }
}
