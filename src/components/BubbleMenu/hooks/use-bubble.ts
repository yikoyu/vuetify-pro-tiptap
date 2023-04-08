import { computed } from 'vue'
import type { Editor } from '@tiptap/vue-3'
import { useLocale } from '@/locales'
import type { Definitions } from '@/constants/toolbar-definitions'
import { deleteSelection } from '@tiptap/pm/commands'

import type { Display } from '@/extensions/image/types'

export type BubbleImageToolbarType = 'float-left' | 'float-none' | 'float-right' | 'size-small' | 'size-medium' | 'size-large' | 'image' | 'image-aspect-ratio'
export type BubbleVideoToolbarType = 'video'
export type BubbleExtToolbarType = 'remove' | BubbleImageToolbarType | BubbleVideoToolbarType

export interface BubbleExtDefinitions extends Omit<Definitions, 'type'> {
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

  const extMenu: BubbleExtDefinitions[] = [
    {
      title: 'editor.image.float.left.tooltip',
      icon: 'formatFloatLeft',
      type: 'float-left',
      action: () => setDisplay('left'),
      isActive: () => editor.isActive('image', { display: 'left' })
    },
    {
      title: 'editor.image.float.none.tooltip',
      icon: 'formatFloatNone',
      type: 'float-none',
      action: () => setDisplay('inline'),
      isActive: () => editor.isActive('image', { display: 'inline' })
    },
    {
      title: 'editor.image.float.right.tooltip',
      icon: 'formatFloatRight',
      type: 'float-right',
      action: () => setDisplay('right'),
      isActive: () => editor.isActive('image', { display: 'right' })
    },
    {
      title: 'editor.image.size.small.tooltip',
      icon: 'sizeS',
      type: 'size-small',
      action: () => setImageSize(Size.small),
      isActive: () => editor.isActive('image', { width: Size.small })
    },
    {
      title: 'editor.image.size.medium.tooltip',
      icon: 'sizeM',
      type: 'size-medium',
      action: () => setImageSize(Size.medium),
      isActive: () => editor.isActive('image', { width: Size.medium })
    },
    {
      title: 'editor.image.size.large.tooltip',
      icon: 'sizeL',
      type: 'size-large',
      action: () => setImageSize(Size.large),
      isActive: () => editor.isActive('image', { width: Size.large })
    },
    {
      title: 'editor.image.dialog.form.aspectRatio',
      icon: 'aspectRatio',
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
      title: 'editor.remove',
      icon: 'delete',
      type: 'remove',
      action: () => {
        const { state, dispatch } = editor.view
        deleteSelection(state, dispatch)
      }
    }
  ]

  return {
    extMenu
  }
}
