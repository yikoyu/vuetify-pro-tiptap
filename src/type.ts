import type { Editor as CoreEditor, Extension, JSONContent } from '@tiptap/core'
import type { Editor } from '@tiptap/vue-3'

import type { IconsOptions } from './constants/icons'

export type { Editor, JSONContent } from '@tiptap/core'

export type VuetifyTiptapOnChange = {
  editor: CoreEditor
  output: string | JSONContent
}

export type ExtensionNameKeys =
  | 'bold'
  | 'italic'
  | 'underline'
  | 'strike'
  | 'color'
  | 'highlight'
  | 'heading'
  | 'textAlign'
  | 'bulletList'
  | 'orderedList'
  | 'taskList'
  | 'indent'
  | 'link'
  | 'image'
  | 'video'
  | 'table'
  | 'blockquote'
  | 'horizontalRule'
  | 'code'
  | 'codeBlock'
  | 'clear'
  | 'history'
  | 'fullscreen'

export interface GeneralOptions {
  divider: boolean
  spacer: boolean
}

export interface ButtonViewReturnComponentProps {
  action?: (value?: unknown) => void
  isActive?: () => boolean
  icon?: keyof IconsOptions
  tooltip?: string
  [x: string]: any
}

export interface ButtonViewReturnComponentSlots {
  dialog: () => any
  [x: string]: () => any
}

export interface ButtonViewReturn {
  component: unknown
  componentProps: ButtonViewReturnComponentProps
  componentSlots?: ButtonViewReturnComponentSlots
}

export interface ButtonViewParams<T = any> {
  editor: Editor
  extension: Extension<T>
  t: (path: string) => string
}

export interface ButtonView<T = any> {
  (options: ButtonViewParams<T>): ButtonViewReturn | ButtonViewReturn[]
}
