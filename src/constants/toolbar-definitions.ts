import { unref, computed, ShallowRef, Ref } from 'vue'
import type { Editor } from '@tiptap/vue-3'
import { useLocale } from '@/locales'
import type { IconsOptions, ToolbarIconsOptions } from './icons'

import { show as showImage } from '@/extensions/image/show'
import { show as showLink } from '@/extensions/link/show'
import { show as showVideo } from '@/extensions/video/show'

export type ToolbarType = keyof ToolbarIconsOptions | '|' | 'divider' | '>' | 'spacer' | `#${string}`

interface Context {
  editor: ShallowRef<Editor | undefined>
  isFullscreen: Ref<boolean>
  toolbar: ToolbarType[]
}

export interface Definitions {
  title?: string
  icon?: keyof IconsOptions
  type: ToolbarType | 'slot'
  slot?: string
  action?(value?: unknown): void
  isActive?(): boolean
}

export function useMakeToolbarDefinitions({ editor, isFullscreen, toolbar }: Context) {
  const definitions: Record<ToolbarType, Definitions> = {
    // Special items
    '|': { type: 'divider' },
    divider: { type: 'divider' },
    '>': { type: 'spacer' },
    spacer: { type: 'spacer' },
    // Standard buttons
    bold: {
      title: 'editor.bold.tooltip',
      icon: 'bold',
      type: 'bold',
      action: () => unref(editor)?.chain().focus().toggleBold().run(),
      isActive: () => unref(editor)?.isActive('bold') || false
    },
    italic: {
      title: 'editor.italic.tooltip',
      icon: 'italic',
      type: 'italic',
      action: () => unref(editor)?.chain().focus().toggleItalic().run(),
      isActive: () => unref(editor)?.isActive('italic') || false
    },
    underline: {
      title: 'editor.underline.tooltip',
      icon: 'underline',
      type: 'underline',
      action: () => unref(editor)?.chain().focus().toggleUnderline().run(),
      isActive: () => unref(editor)?.isActive('underline') || false
    },
    strike: {
      title: 'editor.strike.tooltip',
      icon: 'strike',
      type: 'strike',
      action: () => unref(editor)?.chain().focus().toggleStrike().run(),
      isActive: () => unref(editor)?.isActive('strike') || false
    },
    color: {
      title: 'editor.color.tooltip',
      icon: 'color',
      type: 'color',
      action: (color: string) => unref(editor)?.chain().focus().setColor(color).run(),
      isActive: () => unref(editor)?.isActive('textStyle') || false
    },
    highlight: {
      // 需优化，选择颜色
      title: 'editor.highlight.tooltip',
      icon: 'highlight',
      type: 'highlight',
      action: (color: string) => unref(editor)?.chain().focus().setHighlight({ color }).run(),
      isActive: () => unref(editor)?.isActive('highlight') || false
    },
    h1: {
      title: 'editor.heading.h1.tooltip',
      icon: 'h1',
      type: 'h1',
      action: () => unref(editor)?.chain().focus().toggleHeading({ level: 1 }).run(),
      isActive: () => unref(editor)?.isActive('heading', { level: 1 }) || false
    },
    h2: {
      title: 'editor.heading.h2.tooltip',
      icon: 'h2',
      type: 'h2',
      action: () => unref(editor)?.chain().focus().toggleHeading({ level: 2 }).run(),
      isActive: () => unref(editor)?.isActive('heading', { level: 2 }) || false
    },
    h3: {
      title: 'editor.heading.h3.tooltip',
      icon: 'h3',
      type: 'h3',
      action: () => unref(editor)?.chain().focus().toggleHeading({ level: 3 }).run(),
      isActive: () => unref(editor)?.isActive('heading', { level: 3 }) || false
    },
    h4: {
      title: 'editor.heading.h4.tooltip',
      icon: 'h4',
      type: 'h4',
      action: () => unref(editor)?.chain().focus().toggleHeading({ level: 4 }).run(),
      isActive: () => unref(editor)?.isActive('heading', { level: 4 }) || false
    },
    h5: {
      title: 'editor.heading.h5.tooltip',
      icon: 'h5',
      type: 'h5',
      action: () => unref(editor)?.chain().focus().toggleHeading({ level: 5 }).run(),
      isActive: () => unref(editor)?.isActive('heading', { level: 5 }) || false
    },
    h6: {
      title: 'editor.heading.h6.tooltip',
      icon: 'h6',
      type: 'h6',
      action: () => unref(editor)?.chain().focus().toggleHeading({ level: 6 }).run(),
      isActive: () => unref(editor)?.isActive('heading', { level: 6 }) || false
    },
    p: {
      title: 'editor.paragraph.tooltip',
      icon: 'p',
      type: 'p',
      action: () => unref(editor)?.chain().focus().setParagraph().run(),
      isActive: () => unref(editor)?.isActive('paragraph') || false
    },
    left: {
      title: 'editor.left.tooltip',
      icon: 'left',
      type: 'left',
      action: () => unref(editor)?.chain().focus().setTextAlign('left').run(),
      isActive: () => unref(editor)?.isActive({ textAlign: 'left' }) || false
    },
    center: {
      title: 'editor.center.tooltip',
      icon: 'center',
      type: 'center',
      action: () => unref(editor)?.chain().focus().setTextAlign('center').run(),
      isActive: () => unref(editor)?.isActive({ textAlign: 'center' }) || false
    },
    right: {
      title: 'editor.right.tooltip',
      icon: 'right',
      type: 'right',
      action: () => unref(editor)?.chain().focus().setTextAlign('right').run(),
      isActive: () => unref(editor)?.isActive({ textAlign: 'right' }) || false
    },
    justify: {
      title: 'editor.justify.tooltip',
      icon: 'justify',
      type: 'justify',
      action: () => unref(editor)?.chain().focus().setTextAlign('justify').run(),
      isActive: () => unref(editor)?.isActive({ textAlign: 'justify' }) || false
    },
    bulletList: {
      title: 'editor.bulletlist.tooltip',
      icon: 'bulletList',
      type: 'bulletList',
      action: () => unref(editor)?.chain().focus().toggleBulletList().run(),
      isActive: () => unref(editor)?.isActive('bulletList') || false
    },
    orderedList: {
      title: 'editor.orderedlist.tooltip',
      icon: 'orderedList',
      type: 'orderedList',
      action: () => unref(editor)?.chain().focus().toggleOrderedList().run(),
      isActive: () => unref(editor)?.isActive('orderedList') || false
    },
    taskList: {
      title: 'editor.tasklist.tooltip',
      icon: 'taskList',
      type: 'taskList',
      action: () => unref(editor)?.chain().focus().toggleTaskList().run(),
      isActive: () => unref(editor)?.isActive('taskList') || false
    },
    indent: {
      title: 'editor.indent.tooltip',
      icon: 'indent',
      type: 'indent',
      action: () => unref(editor)?.chain().sinkListItem('listItem').run()
    },
    outdent: {
      title: 'editor.outdent.tooltip',
      icon: 'outdent',
      type: 'outdent',
      action: () => unref(editor)?.chain().liftListItem('listItem').run()
    },
    link: {
      title: 'editor.link.tooltip',
      icon: 'link',
      type: 'link',
      action: () => {
        if (editor.value) showLink(editor.value)
      },
      isActive: () => unref(editor)?.isActive('link') || false
    },
    image: {
      title: 'editor.image.tooltip',
      icon: 'image',
      type: 'image',
      action: () => {
        if (editor.value) showImage(editor.value)
      },
      isActive: () => unref(editor)?.isActive('image') || false
    },
    video: {
      title: 'editor.video.tooltip',
      icon: 'video',
      type: 'video',
      action: () => {
        if (editor.value) showVideo(editor.value)
      },
      isActive: () => unref(editor)?.isActive('iframe') || false
    },
    table: {
      title: 'editor.table.tooltip',
      icon: 'table',
      type: 'table',
      action: () => {},
      isActive: () => unref(editor)?.isActive('table') || false
    },
    blockquote: {
      title: 'editor.blockquote.tooltip',
      icon: 'blockquote',
      type: 'blockquote',
      action: () => unref(editor)?.chain().focus().toggleBlockquote().run(),
      isActive: () => unref(editor)?.isActive('blockquote') || false
    },
    rule: {
      // 无底边框
      title: 'editor.horizontalrule.tooltip',
      icon: 'rule',
      type: 'rule',
      action: () => unref(editor)?.chain().focus().setHorizontalRule().run()
    },
    code: {
      // 样式错误，样式为 code
      title: 'editor.code.tooltip',
      icon: 'code',
      type: 'code',
      action: () => unref(editor)?.chain().focus().toggleCode().run(),
      isActive: () => unref(editor)?.isActive('code') || false
    },
    codeBlock: {
      title: 'editor.codeblock.tooltip',
      icon: 'codeBlock',
      type: 'codeBlock',
      action: () => unref(editor)?.chain().focus().toggleCodeBlock().run(),
      isActive: () => unref(editor)?.isActive('codeBlock') || false
    },
    clear: {
      title: 'editor.clear.tooltip',
      icon: 'clear',
      type: 'clear',
      action: () => unref(editor)?.chain().focus().clearNodes().unsetAllMarks().run()
    },
    undo: {
      title: 'editor.undo.tooltip',
      icon: 'undo',
      type: 'undo',
      action: () => unref(editor)?.chain().undo().run()
    },
    redo: {
      title: 'editor.redo.tooltip',
      icon: 'redo',
      type: 'redo',
      action: () => unref(editor)?.chain().redo().run()
    },
    fullscreen: {
      title: unref(isFullscreen) ? 'editor.fullscreen.tooltip.exit' : 'editor.fullscreen.tooltip.fullscreen',
      icon: unref(isFullscreen) ? 'fullscreenExit' : 'fullscreen',
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
  }

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
