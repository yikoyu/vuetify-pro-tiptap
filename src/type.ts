import type { Editor, Extension } from '@tiptap/vue-3'

import type { IconsOptions } from './constants/icons'

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

export interface ButtonViewReturn {
  component: unknown
  componentProps: ButtonViewReturnComponentProps
}

export interface ButtonViewParams<T = any> {
  editor: Editor
  extension: Extension<T>
  t: (path: string) => string
}

export interface ButtonView<T = any> {
  (options: ButtonViewParams<T>): ButtonViewReturn | ButtonViewReturn[]
}
