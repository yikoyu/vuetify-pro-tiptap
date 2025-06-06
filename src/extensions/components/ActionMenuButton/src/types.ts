import type { StyleValue } from 'vue'
import type { IconsOptions } from '@/constants/icons'

import type { ButtonViewReturnComponentProps } from '@/type'

export interface ActionMenuButtonItem {
  title: string
  icon?: keyof IconsOptions
  isActive: NonNullable<ButtonViewReturnComponentProps['isActive']>
  action?: ButtonViewReturnComponentProps['action']
  style?: StyleValue
  disabled?: boolean
  divider?: boolean
  default?: boolean
}
