import { deleteSelection } from '@tiptap/pm/commands'
import type { Editor } from '@tiptap/vue-3'
import type { ButtonViewReturn, ButtonViewParams, ExtensionNameKeys } from '@/type'

import ActionButton from './ActionButton.vue'

type BubbleImageFloatType = 'float-left' | 'float-none' | 'float-right'
type BubbleImageSizeType = 'size-small' | 'size-medium' | 'size-large'
type BubbleImageType = BubbleImageFloatType | BubbleImageSizeType | 'image' | 'image-aspect-ratio' | 'remove'

type BubbleVideoType = 'video' | 'remove'
type BubbleType = BubbleImageType | BubbleVideoType
type BubbleAllType = BubbleType | ExtensionNameKeys | 'divider'

export type NodeTypeKey = 'image' | 'text' | 'video'
export type BubbleTypeMenu = Partial<Record<NodeTypeKey, BubbleMenuItem[]>>
type NodeTypeMenu = Partial<Record<NodeTypeKey, BubbleAllType[]>>

export interface BubbleMenuItem extends ButtonViewReturn {
  type: BubbleAllType
}

interface BubbleView<T = any> {
  (options: ButtonViewParams<T>): BubbleTypeMenu
}

export interface BubbleOptions<T> {
  list: NodeTypeMenu
  defaultBubbleList: typeof defaultBubbleList
  button: BubbleView<T>
}

enum Size {
  'size-small' = 200,
  'size-medium' = 500,
  'size-large' = '100%'
}

export const NODE_TYPE_MENU: NodeTypeMenu = {
  image: [
    'float-left',
    'float-none',
    'float-right',
    'divider',
    'size-small',
    'size-medium',
    'size-large',
    'divider',
    'textAlign',
    'divider',
    'image',
    'image-aspect-ratio',
    'remove'
  ],
  text: ['bold', 'italic', 'underline', 'strike', 'divider', 'color', 'highlight', 'textAlign', 'divider', 'link'],
  video: ['video', 'remove']
}

const imageFloatMenus = (editor: Editor): BubbleMenuItem[] => {
  const types: BubbleImageFloatType[] = ['float-left', 'float-none', 'float-right']
  const icons: NonNullable<ButtonViewReturn['componentProps']['icon']>[] = ['formatFloatLeft', 'formatFloatNone', 'formatFloatRight']
  const display = ['left', 'inline', 'right']

  return types.map((float, i) => ({
    type: float,
    component: ActionButton,
    componentProps: {
      tooltip: `editor.image.${float.replace('-', '.')}.tooltip`,
      icon: icons[i],
      action: () => editor.commands.updateAttributes('image', { display: display[i] }),
      isActive: () => editor.isActive('image', { display: display[i] })
    }
  }))
}

const imageSizeMenus = (editor: Editor): BubbleMenuItem[] => {
  const types: BubbleImageSizeType[] = ['size-small', 'size-medium', 'size-large']
  const icons: NonNullable<ButtonViewReturn['componentProps']['icon']>[] = ['sizeS', 'sizeM', 'sizeL']

  return types.map((size, i) => ({
    type: size,
    component: ActionButton,
    componentProps: {
      tooltip: `editor.image.${size.replace('-', '.')}.tooltip`,
      icon: icons[i],
      action: () => editor.commands.updateAttributes('image', { width: Size[size], height: null }),
      isActive: () => editor.isActive('image', { width: Size[size] })
    }
  }))
}

export const defaultBubbleList = (editor: Editor): BubbleMenuItem[] => [
  ...imageFloatMenus(editor),
  ...imageSizeMenus(editor),
  {
    type: 'image-aspect-ratio',
    component: ActionButton,
    componentProps: {
      tooltip: 'editor.image.dialog.form.aspectRatio',
      icon: 'aspectRatio',
      action: () => {
        const isLock = editor.isActive('image', { lockAspectRatio: true })
        editor.commands.updateAttributes('image', {
          lockAspectRatio: !isLock,
          height: isLock ? undefined : null
        })
      },
      isActive: () => editor.isActive('image', { lockAspectRatio: true })
    }
  },
  {
    type: 'remove',
    component: ActionButton,
    componentProps: {
      tooltip: 'editor.remove',
      icon: 'delete',
      action: () => {
        const { state, dispatch } = editor.view
        deleteSelection(state, dispatch)
      }
    }
  }
]

/**
 * Generate bubble menu
 * @template T
 * @param {NodeTypeMenu} list
 * @param {BubbleMenuItem[]} defaultList
 * @param {ButtonViewParams<T>} { editor, extension, t }
 * @return {*}  {BubbleTypeMenu}
 */
export const generateBubbleTypeMenu = <T = any>(
  list: NodeTypeMenu,
  defaultList: BubbleMenuItem[],
  { editor, extension, t }: ButtonViewParams<T>
): BubbleTypeMenu => {
  const { extensions = [] } = editor.extensionManager

  const items: BubbleTypeMenu = {}

  for (const node of Object.keys(list)) {
    const nodeType = list[node as NodeTypeKey]
    if (!nodeType) continue

    const _items: BubbleMenuItem[] = []

    for (const ext of nodeType) {
      if (ext === 'divider') {
        const lastItem = _items[_items.length - 1]
        if (lastItem.type === 'divider') continue

        _items.push({
          type: 'divider',
          component: undefined,
          componentProps: {}
        })
        continue
      }

      const find = defaultList.find(k => k.type === ext)
      if (find) {
        _items.push({
          ...find,
          componentProps: {
            ...find.componentProps,
            tooltip: find.componentProps.tooltip ? t(find.componentProps.tooltip) : undefined
          }
        })
        continue
      }

      const findExt = extensions.find(k => k.name === ext)
      if (findExt) {
        const { button } = findExt.options as any
        const _button: ButtonViewReturn = button({ editor, extension: findExt, t })

        _items.push({
          type: ext,
          component: _button.component,
          componentProps: _button.componentProps
        })
        continue
      }
    }

    items[node as NodeTypeKey] = _items
  }

  return items
}
