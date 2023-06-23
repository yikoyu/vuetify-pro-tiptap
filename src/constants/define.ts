import type { NodeTypeMenu } from '@/extensions/components/bubble'

export const EDITOR_UPDATE_THROTTLE_WAIT_TIME = 200

// watch throttling time must be less than the update time
// otherwise the cursor position will reach the end
export const EDITOR_UPDATE_WATCH_THROTTLE_WAIT_TIME = EDITOR_UPDATE_THROTTLE_WAIT_TIME - 80

export const IMAGE_MIN_SIZE = 20
export const IMAGE_MAX_SIZE = 100000
export const IMAGE_THROTTLE_WAIT_TIME = 16

export const TABLE_INIT_GRID_SIZE = 6
export const TABLE_MAX_GRID_SIZE = 10
export const TABLE_DEFAULT_SELECTED_GRID_SIZE = 2

export const COLORS_LIST = [
  '#f44336',
  '#e91e63',
  '#9c27b0',
  '#673ab7',
  '#3f51b5',
  '#2196f3',
  '#03a9f4',
  '#00bcd4',
  '#009688',
  '#4caf50',
  '#8bc34a',
  '#cddc39',
  '#ffeb3b',
  '#ffc107',
  '#ff9800',
  '#ff5722',
  '#000000',
  '#333333',
  '#666666',
  '#999999',
  '#CCCCCC',
  '#D5D5D4',
  '#E8E8E8',
  '#EEEEEE'
]

export interface FontFamilyProps {
  title: string
  value: string
  divider?: boolean
  default?: boolean
}

export const DEFAULT_FONT_FAMILY_VALUE = 'Roboto'

export const DEFAULT_FONT_FAMILY_LIST: FontFamilyProps[] = [
  { title: 'editor.default', value: DEFAULT_FONT_FAMILY_VALUE, divider: true, default: true },
  { title: 'Arial', value: 'Arial' },
  { title: 'Arial Black', value: 'Arial Black' },
  { title: 'Georgia', value: 'Georgia' },
  { title: 'Impact', value: 'Impact' },
  { title: 'Helvetica', value: 'Helvetica' },
  { title: 'Tahoma', value: 'Tahoma' },
  { title: 'Times New Roman', value: 'Times New Roman' },
  { title: 'Verdana', value: 'Verdana' },
  { title: 'Courier New', value: 'Courier New', divider: true },
  { title: 'Monaco', value: 'Monaco' },
  { title: 'Monospace', value: 'monospace' }
]

export type MarkdownThemeProps = FontFamilyProps

export const DEFAULT_MARKDOWN_THEME_VALUE = 'default'

export const DEFAULT_MARKDOWN_THEME_LIST: FontFamilyProps[] = [
  { title: 'editor.default', value: DEFAULT_MARKDOWN_THEME_VALUE, default: true }
]

export const DEFAULT_FONT_SIZE_LIST = [8, 10, 12, 14, 16, 18, 20, 24, 30, 36, 48, 60, 72]

export const DEFAULT_FONT_SIZE_VALUUE = 'default'

export enum IMAGE_SIZE {
  'size-small' = 200,
  'size-medium' = 500,
  'size-large' = '100%'
}
export enum VIDEO_SIZE {
  'size-small' = 480,
  'size-medium' = 640,
  'size-large' = '100%'
}

export const NODE_TYPE_MENU: NodeTypeMenu = {
  image: [
    'float-left',
    'float-none',
    'float-right',
    'divider',
    'image-size-small',
    'image-size-medium',
    'image-size-large',
    'divider',
    'textAlign',
    'divider',
    'image',
    'image-aspect-ratio',
    'remove'
  ],
  text: ['bold', 'italic', 'underline', 'strike', 'divider', 'color', 'highlight', 'textAlign', 'divider', 'link'],
  video: ['video-size-small', 'video-size-medium', 'video-size-large', 'divider', 'video', 'remove']
}
