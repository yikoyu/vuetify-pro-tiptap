<script lang="ts">
import type { Editor } from '@tiptap/vue-3'
import type { ButtonViewReturnComponentProps } from '@/type'

export interface Item {
  title: string
  icon?: keyof IconsOptions
  isActive: NonNullable<ButtonViewReturnComponentProps['isActive']>
  action?: ButtonViewReturnComponentProps['action']
  divider?: boolean
}
</script>

<script setup lang="ts">
import { ref, computed } from 'vue'
import ActionButton from './ActionButton.vue'
import { getIcon, IconsOptions } from '@/constants/icons'

interface Props {
  editor: Editor
  dark?: boolean
  disabled?: boolean
  color?: string

  icon?: keyof IconsOptions
  tooltip?: string
  items?: Item[]
}

const props = withDefaults(defineProps<Props>(), {
  dark: false,
  disabled: false,
  color: undefined,

  icon: undefined,
  tooltip: '',
  items: () => []
})

const menu = ref<boolean>(false)

const active = computed<Item>(() => {
  const find = props.items.find(k => k.isActive())
  if (find) return find

  const item: Item = {
    title: props.tooltip,
    icon: props.icon,
    isActive: () => false
  }

  return item
})
</script>

<template>
  <ActionButton :icon="active.icon" :tooltip="active.title" :disabled="disabled" :color="color" :is-active="active.isActive">
    <VMenu v-model="menu" :dark="dark" activator="parent">
      <VList density="compact">
        <template v-for="(item, i) in items" :key="i">
          <VListItem :active="item.isActive()" @click="item.action">
            <template #prepend>
              <VIcon :icon="getIcon(item.icon)"></VIcon>
            </template>
            <VListItem-title>{{ item.title }}</VListItem-title>
          </VListItem>

          <VDivider v-if="item.divider"></VDivider>
        </template>
      </VList>
    </VMenu>
  </ActionButton>
</template>
