import { deleteSelection } from '@tiptap/pm/commands'
import type { Editor } from '@tiptap/vue-3'

import type { Display } from './image/types'
import ActionButton from './ActionButton.vue'

import { IMAGE_SIZE, VIDEO_SIZE } from '@/constants/define'
import type { ButtonViewParams, ButtonViewReturn, ExtensionNameKeys } from '@/type'
import { isString } from '@/utils/utils'

/** Represents the floating types for bubble images */
type BubbleImageFloatType = 'float-left' | 'float-none' | 'float-right'

/** Represents the size types for bubble images or videos */
type BubbleImageOrVideoSizeType = 'size-small' | 'size-medium' | 'size-large'

/** Represents the various types for bubble images */
type BubbleImageType =
  | BubbleImageFloatType
  | `image-${BubbleImageOrVideoSizeType}`
  | `video-${BubbleImageOrVideoSizeType}`
  | 'image'
  | 'image-aspect-ratio'
  | 'unlink'
  | 'link-open'
  | 'remove'

/** Represents the types for bubble videos */
type BubbleVideoType = 'video' | 'remove'

/** Represents the overall types for bubbles */
type BubbleAllType = BubbleImageType | BubbleVideoType | ExtensionNameKeys | 'divider' | (string & {})

/** Represents the key types for node types */
export type NodeTypeKey = 'image' | 'text' | 'link' | 'video'

/** Represents the menu of bubble types for each node type */
export type BubbleTypeMenu = Partial<Record<NodeTypeKey, BubbleMenuItem[]>>

/** Represents the menu of overall bubble types for each node type */
export type NodeTypeMenu = Partial<Record<NodeTypeKey, BubbleAllType[]>>

/**
 * Represents the structure of a bubble menu item.
 */
export interface BubbleMenuItem extends ButtonViewReturn {
  /** The type of the bubble item */
  type: BubbleAllType
}

/**
 * Represents a function to generate a bubble menu
 */
interface BubbleView<T = any> {
  /**
   * Generates a bubble menu based on the provided options.
   * @param {ButtonViewParams<T>} options - The options for generating the bubble menu.
   * @returns {BubbleTypeMenu} The generated bubble menu.
   */
  (options: ButtonViewParams<T>): BubbleTypeMenu
}

/**
 * Represents the options for configuring bubbles.
 * @interface BubbleOptions
 * @template T
 */
export interface BubbleOptions<T> {
  /** The menu of bubble types for each node type. */
  list: NodeTypeMenu
  /** The default list of bubble types. */
  defaultBubbleList: typeof defaultBubbleList
  /** The function to generate a bubble menu. */
  button: BubbleView<T>
}

const imageFloatMenus = (editor: Editor): BubbleMenuItem[] => {
  const types: BubbleImageFloatType[] = ['float-left', 'float-none', 'float-right']
  const icons: NonNullable<ButtonViewReturn['componentProps']['icon']>[] = [
    'formatFloatLeft',
    'formatFloatNone',
    'formatFloatRight'
  ]
  const display: Display[] = ['left', 'inline', 'right']

  return types.map((float, i) => ({
    type: float,
    component: ActionButton,
    componentProps: {
      tooltip: `editor.image.${float.replace('-', '.')}.tooltip`,
      icon: icons[i],
      action: () => editor.commands.updateImage({ display: display[i] }),
      isActive: () => editor.isActive('image', { display: display[i] })
    }
  }))
}

const imageSizeMenus = (editor: Editor): BubbleMenuItem[] => {
  const types: BubbleImageOrVideoSizeType[] = ['size-small', 'size-medium', 'size-large']
  const icons: NonNullable<ButtonViewReturn['componentProps']['icon']>[] = ['sizeS', 'sizeM', 'sizeL']

  return types.map((size, i) => ({
    type: `image-${size}`,
    component: ActionButton,
    componentProps: {
      tooltip: `editor.${size.replace('-', '.')}.tooltip`,
      icon: icons[i],
      action: () => editor.commands.updateImage({ width: IMAGE_SIZE[size], height: null }),
      isActive: () => editor.isActive('image', { width: IMAGE_SIZE[size] })
    }
  }))
}

const videoSizeMenus = (editor: Editor): BubbleMenuItem[] => {
  const types: BubbleImageOrVideoSizeType[] = ['size-small', 'size-medium', 'size-large']
  const icons: NonNullable<ButtonViewReturn['componentProps']['icon']>[] = ['sizeS', 'sizeM', 'sizeL']

  return types.map((size, i) => ({
    type: `video-${size}`,
    component: ActionButton,
    componentProps: {
      tooltip: `editor.${size.replace('-', '.')}.tooltip`,
      icon: icons[i],
      action: () => editor.commands.updateVideo({ width: VIDEO_SIZE[size] }),
      isActive: () => editor.isActive('video', { width: VIDEO_SIZE[size] })
    }
  }))
}

export const defaultBubbleList = (editor: Editor): BubbleMenuItem[] => [
  ...imageFloatMenus(editor),
  ...imageSizeMenus(editor),
  ...videoSizeMenus(editor),
  {
    type: 'image-aspect-ratio',
    component: ActionButton,
    componentProps: {
      tooltip: 'editor.image.dialog.form.aspectRatio',
      icon: 'aspectRatio',
      action: () => {
        const isLock = editor.isActive('image', { lockAspectRatio: true })
        editor.commands.updateImage({
          lockAspectRatio: !isLock,
          height: isLock ? undefined : null
        })
      },
      isActive: () => editor.isActive('image', { lockAspectRatio: true })
    }
  },
  {
    type: 'unlink',
    component: ActionButton,
    componentProps: {
      tooltip: 'editor.link.unlink.tooltip',
      icon: 'linkVariantOff',
      action: () => {
        const { href } = editor.getAttributes('link')

        editor.chain().extendMarkRange('link', { href }).unsetLink().focus().run()
      }
    }
  },
  {
    type: 'link-open',
    component: ActionButton,
    componentProps: {
      tooltip: 'editor.link.open',
      icon: 'openInNew',
      action: () => {
        const { href } = editor.getAttributes('link')
        if (isString(href) && href) {
          window.open(href, '_blank')
        }
      }
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
        if (lastItem?.type === 'divider') continue

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
          },
          componentSlots: find.componentSlots
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
          componentProps: _button.componentProps,
          componentSlots: _button.componentSlots
        })
        continue
      }
    }

    const lastItem = _items[_items.length - 1]
    const fristItem = _items[0]

    if (lastItem?.type === 'divider') _items.pop()
    if (fristItem?.type === 'divider') _items.shift()

    items[node as NodeTypeKey] = _items
  }

  return items
}
