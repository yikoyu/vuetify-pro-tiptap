<script setup lang="ts">
import type { Editor } from '@tiptap/vue-3'

import type { ActionMenuButtonItem } from './types'

import { getIcon, IconsOptions } from '@/constants/icons'
import { computed, ref } from 'vue'
import ActionButton from '../../ActionButton.vue'

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  color: undefined,
  maxHeight: undefined,

  icon: undefined,
  tooltip: '',
  items: () => []
})

const menu = ref<boolean>(false)

const active = computed<ActionMenuButtonItem>(() => {
  const find = props.items.find(k => k.isActive())
  if (find && !find.default) {
    return {
      ...find,
      icon: find.icon ? find.icon : props.icon
    }
  }

  const item: ActionMenuButtonItem = {
    title: props.tooltip,
    icon: props.icon,
    isActive: () => false
  }

  return item
})
</script>

<script lang="ts">
interface Props {
  editor: Editor
  disabled?: boolean
  color?: string
  maxHeight?: string | number

  icon?: keyof IconsOptions
  tooltip?: string
  items?: ActionMenuButtonItem[]
}
</script>

<template>
  <ActionButton
    :icon="active.icon"
    :tooltip="active.title"
    :disabled="disabled"
    :color="color"
    :is-active="active.isActive"
  >
    <VMenu v-model="menu" activator="parent">
      <VList density="compact" :max-height="maxHeight">
        <template v-for="(item, i) in items" :key="i">
          <VListItem :active="item.isActive()" :disabled="item.disabled" @click="item.action">
            <template #prepend>
              <VIcon v-if="item.icon" :icon="getIcon(item.icon)" />
            </template>

            <VListItem-title :style="item.style">{{ item.title }}</VListItem-title>
          </VListItem>

          <VDivider v-if="item.divider" />
        </template>
      </VList>
    </VMenu>
  </ActionButton>
</template>
