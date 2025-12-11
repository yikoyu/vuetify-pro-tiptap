<script setup lang="ts">
import type { ActionMenuButtonItem } from './types'

import { computed, ref } from 'vue'
import { getIcon } from '@/constants/icons'
import { ActionButton } from '../../ActionButton'
import { actionButtonMenuProps } from './props'

const props = defineProps(actionButtonMenuProps)

const menu = ref<boolean>(false)

const active = computed<ActionMenuButtonItem>(() => {
  const find = props.items.find(k => k.isActive())
  if (find && !find.default) {
    return {
      ...find,
      icon: find.icon ? find.icon : props.icon,
    }
  }

  const item: ActionMenuButtonItem = {
    title: props.tooltip,
    icon: props.icon,
    isActive: () => false,
  }

  return item
})
</script>

<template>
  <ActionButton
    :editor="editor"
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

            <VListItemTitle :style="item.style">
              {{ item.title }}
            </VListItemTitle>
          </VListItem>

          <VDivider v-if="item.divider" />
        </template>
      </VList>
    </VMenu>
  </ActionButton>
</template>
