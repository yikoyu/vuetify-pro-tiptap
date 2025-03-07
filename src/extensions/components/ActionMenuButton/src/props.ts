import type { PropType } from "vue"

import { actionButtonProps } from '@/extensions/components/ActionButton'
import { omit } from '@/utils/utils'

import { ActionMenuButtonItem } from "./types"

export const actionButtonMenuProps = {
  ...omit(actionButtonProps, ['action', 'isActive']),
  maxHeight: {
    type: [String, Number],
    default: undefined
  },
  items: {
    type: Array as PropType<ActionMenuButtonItem[]>,
    default: () => []
  }
}
