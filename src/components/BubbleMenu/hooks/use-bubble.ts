import { unref, computed } from '@vue/composition-api'
import type { Editor } from '@tiptap/vue-2'
import { useLocale } from '@/locales'
import type { Definitions } from '@/constants/toolbar-definitions'
import { deleteSelection } from 'prosemirror-commands'

import { mdiFormatFloatLeft, mdiFormatFloatNone, mdiFormatFloatRight, mdiSizeS, mdiSizeM, mdiSizeL, mdiAspectRatio, mdiDelete } from '@/constants/icons'
import type { Display } from '@/extensions/image/types'

export type BubbleImageToolbarType =
  | 'float-left'
  | 'float-none'
  | 'float-right'
  | 'size-small'
  | 'size-medium'
  | 'size-large'
  | 'image'
  | 'image-aspect-ratio'
  | 'image-remove'
export type BubbleVideoToolbarType = 'video' | 'video-remove'
export type BubbleExtToolbarType = BubbleImageToolbarType | BubbleVideoToolbarType

interface BubbleExtDefinitions extends Omit<Definitions, 'type'> {
  type: BubbleExtToolbarType
}

enum Size {
  small = 200,
  medium = 500,
  large = '100%'
}

export function useBubbleImage(editor: Editor) {
  const { t } = useLocale()

  function setDisplay(val: Display) {
    if (!val) return
    editor.commands.updateAttributes('image', { display: val })
  }

  function setImageSize(size: Size) {
    if (!size) return
    editor.commands.updateAttributes('image', { width: size, height: null })
  }

  const extMenu = computed<BubbleExtDefinitions[]>(() => {
    return [
      {
        title: unref(t)('editor.image.float.left.tooltip'),
        icon: mdiFormatFloatLeft,
        type: 'float-left',
        action: () => setDisplay('left'),
        isActive: () => editor.isActive('image', { display: 'left' })
      },
      {
        title: unref(t)('editor.image.float.none.tooltip'),
        icon: mdiFormatFloatNone,
        type: 'float-none',
        action: () => setDisplay('inline'),
        isActive: () => editor.isActive('image', { display: 'inline' })
      },
      {
        title: unref(t)('editor.image.float.right.tooltip'),
        icon: mdiFormatFloatRight,
        type: 'float-right',
        action: () => setDisplay('right'),
        isActive: () => editor.isActive('image', { display: 'right' })
      },
      {
        title: unref(t)('editor.image.size.small.tooltip'),
        icon: mdiSizeS,
        type: 'size-small',
        action: () => setImageSize(Size.small),
        isActive: () => editor.isActive('image', { width: Size.small })
      },
      {
        title: unref(t)('editor.image.size.medium.tooltip'),
        icon: mdiSizeM,
        type: 'size-medium',
        action: () => setImageSize(Size.medium),
        isActive: () => editor.isActive('image', { width: Size.medium })
      },
      {
        title: unref(t)('editor.image.size.large.tooltip'),
        icon: mdiSizeL,
        type: 'size-large',
        action: () => setImageSize(Size.large),
        isActive: () => editor.isActive('image', { width: Size.large })
      },
      {
        title: unref(t)('editor.image.dialog.form.aspectRatio'),
        icon: mdiAspectRatio,
        type: 'image-aspect-ratio',
        action: () => {
          const isLock = editor.isActive('image', { lockAspectRatio: true })
          editor.commands.updateAttributes('image', {
            lockAspectRatio: !isLock,
            height: isLock ? undefined : null
          })
        },
        isActive: () => editor.isActive('image', { lockAspectRatio: true })
      },
      {
        title: unref(t)('editor.image.remove.tooltip'),
        icon: mdiDelete,
        type: 'image-remove',
        action: () => {
          const { state, dispatch } = editor.view
          deleteSelection(state, dispatch)
        }
      },
      {
        title: unref(t)('editor.video.remove.tooltip'),
        icon: mdiDelete,
        type: 'video-remove',
        action: () => {
          const { state, dispatch } = editor.view
          deleteSelection(state, dispatch)
        }
      }
    ]
  })

  return {
    extMenu
  }
}
