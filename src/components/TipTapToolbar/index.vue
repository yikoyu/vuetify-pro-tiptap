<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Editor } from '@tiptap/vue-3'
import type { Definitions } from '@/constants/toolbar-definitions'
import ColorPicker from '../ColorPicker.vue'
import TableMenu from '../TableMenu/index.vue'
import TooltipIconBtn from './TooltipIconBtn.vue'

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
      <slot
        v-else-if="item.type === 'slot'"
        :key="`slot-${key}-${item.type}`"
        :name="item.slot"
        v-bind="{ props: { class: 'me-1', density: 'comfortable', rounded: true, disabled, icon: true, size: 'small' } }"
      />
      <!-- Buttons -->
      <TooltipIconBtn
        v-else
        :key="`button-${key}-${item.type}`"
        :icon="item.icon"
        :title="item.title"
        :color="item.type === 'color' ? color : item.type === 'highlight' ? highlight : undefined"
        :class="{
          'v-btn--active': item.isActive && item.isActive()
        }"
        class="me-1 ms-0"
      >
        <!-- Color Button -->
        <ColorPicker
          v-if="item.type === 'color'"
          v-model="color"
          activator="parent"
          :dark="dark"
          :nudge-top="-4"
          :nudge-left="8"
          @change="item.action"
        ></ColorPicker>

        <!-- Highlight Button -->
        <ColorPicker
          v-else-if="item.type === 'highlight'"
          v-model="highlight"
          activator="parent"
          :dark="dark"
          :nudge-top="-4"
          :nudge-left="8"
          @change="item.action"
        ></ColorPicker>

        <!-- Table Button -->
        <TableMenu v-else-if="item.type === 'table'" :editor="editor" :dark="dark" activator="parent" />
      </TooltipIconBtn>
    </template>
  </VToolbar>
</template>
