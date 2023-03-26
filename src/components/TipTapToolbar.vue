<script setup lang="ts">
import { ref } from 'vue'
import type { Editor } from '@tiptap/vue-3'
import type { Definitions } from '@/constants/toolbar-definitions'
import ColorPicker from './ColorPicker.vue'
import TableMenu from './TableMenu/index.vue'

interface Props {
  editor: Editor
  dark?: boolean
  disabled?: boolean
  items?: Definitions[]
}

const props = withDefaults(defineProps<Props>(), {
  dark: false,
  disabled: false,
  items: () => []
})

// Color
const color = ref<string | undefined>(undefined)

// Highlight
const highlight = ref<string | undefined>(undefined)

function onUpdate(editor: Editor) {
  const { color: colorValue } = editor.getAttributes('textStyle')
  const { color: highlightValue } = editor.getAttributes('highlight')

  color.value = colorValue
  highlight.value = highlightValue
}

defineExpose({
  onUpdate
})
</script>

<template>
  <VToolbar v-bind="$attrs" density="compact" flat height="auto" class="py-1 ps-1">
    <template v-for="(item, key) in items">
      <!-- Spacer -->
      <VSpacer v-if="item.type === 'spacer'" :key="`spacer-${key}-${item.type}`" />
      <!-- Divider -->
      <VDivider v-else-if="item.type === 'divider'" :key="`divider-${key}-${item.type}`" vertical class="mx-1 me-2" />
      <!-- Slot -->
      <div v-else-if="item.type === 'slot'" :key="`slot-${key}-${item.type}`">
        <slot :name="item.slot" v-bind="{ props: { class: 'me-1', density: 'comfortable', rounded: true, disabled, icon: true, size: 'small' } }" />
      </div>
      <!-- Buttons -->
      <div v-else :key="`button-${key}-${item.type}`">
        <!-- Color Button -->
        <div v-if="item.type === 'color'" class="me-1">
          <ColorPicker v-model="color" :dark="dark" :nudge-top="-4" :nudge-left="8" @change="item.action">
            <template #button="{ props: _props }">
              <VBtn v-bind="_props" class="rounded" density="comfortable" :disabled="disabled" :color="color" icon size="small" :data-testid="item.type">
                <VIcon>{{ item.icon }}</VIcon>
                <VTooltip activator="parent" location="top">{{ item.title }}</VTooltip>
              </VBtn>
            </template>
          </ColorPicker>
        </div>

        <!-- Highlight Button -->
        <div v-else-if="item.type === 'highlight'" class="me-1">
          <ColorPicker v-model="highlight" :dark="dark" :nudge-top="-4" :nudge-left="8" @change="item.action">
            <template #button="{ props: _props }">
              <VBtn v-bind="_props" class="rounded" density="comfortable" :disabled="disabled" :color="highlight" icon size="small" :data-testid="item.type">
                <VIcon>{{ item.icon }}</VIcon>
                <VTooltip activator="parent" location="top">{{ item.title }}</VTooltip>
              </VBtn>
            </template>
          </ColorPicker>
        </div>

        <!-- Table Button -->
        <div v-else-if="item.type === 'table'">
          <TableMenu :editor="editor" :dark="dark">
            <template #button="{ props: _props }">
              <VBtn
                :disabled="disabled"
                class="rounded me-1"
                :class="{
                  'v-btn--active': item.isActive && item.isActive()
                }"
                :color="item.isActive && item.isActive() ? 'primary' : undefined"
                v-bind="_props"
                icon
                size="small"
                density="comfortable"
                :data-testid="item.type"
              >
                <VIcon>{{ item.icon }}</VIcon>
                <VTooltip activator="parent" location="top">{{ item.title }}</VTooltip>
              </VBtn>
            </template>
          </TableMenu>
        </div>

        <!-- Standard Button -->
        <VBtn
          v-else
          :disabled="disabled"
          class="rounded me-1"
          :class="{
            'v-btn--active': item.isActive && item.isActive()
          }"
          :color="item.isActive && item.isActive() ? 'primary' : undefined"
          icon
          size="small"
          density="comfortable"
          :data-testid="item.type"
          @click="item.action"
        >
          <VIcon>{{ item.icon }}</VIcon>
          <VTooltip activator="parent" location="top">{{ item.title }}</VTooltip>
        </VBtn>
      </div>
    </template>
  </VToolbar>
</template>
