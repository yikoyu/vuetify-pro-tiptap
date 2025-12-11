import type { Extension } from '@tiptap/core'

import type { PropType } from 'vue'
import type { ActionMenuButtonItem } from './types'

import { actionButtonProps, extActionButtonProps } from '@/extensions/components/ActionButton'
import { omit } from '@/utils/utils'

export const actionButtonMenuProps = {
  ...omit(actionButtonProps, ['action', 'isActive']),
  maxHeight: {
    type: [String, Number],
    default: undefined,
  },
  items: {
    type: Array as PropType<ActionMenuButtonItem[]>,
    default: () => [],
  },
}

export function extActionButtonMenuProps<T = any>() {
  return {
    ...extActionButtonProps,
    extension: {
      type: Object as PropType<Extension<T>>,
      required: true,
    },
  } as const
}
