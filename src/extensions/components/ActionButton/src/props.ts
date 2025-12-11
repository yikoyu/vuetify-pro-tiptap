import type { Editor } from '@tiptap/vue-3'
import type { PropType } from 'vue'
import type { IconsOptions } from '@/constants/icons'
import type { ButtonViewReturnComponentProps } from '@/type'

export const actionButtonProps = {
  editor: {
    type: Object as PropType<Editor>,
    required: true,
  },
  icon: {
    type: String as PropType<keyof IconsOptions>,
    default: undefined,
  },
  tooltip: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
    default: undefined,
  },
  action: {
    type: Function as PropType<ButtonViewReturnComponentProps['action']>,
    default: undefined,
  },
  isActive: {
    type: Function as PropType<ButtonViewReturnComponentProps['isActive']>,
    default: undefined,
  },
} as const

export const extActionButtonProps = {
  editor: {
    type: Object as PropType<Editor>,
    required: true,
  },
  t: {
    type: Function as PropType<(path: string) => string>,
    required: true,
  },
} as const
