<script setup lang="ts">
import { ref } from 'vue-demi'
import type { Editor } from '@tiptap/vue-2'
import type { Definitions } from '@/constants/toolbar-definitions'
import ColorPicker from './ColorPicker.vue'
import TableMenu from './TableMenu/index.vue'

interface TipTapToolbarProps {
  editor: Editor
  dark?: boolean
  disabled?: boolean
  items?: Definitions[]
}

withDefaults(defineProps<TipTapToolbarProps>(), {
  dark: false,
  disabled: false,
  items: () => []
})

// Color
const color = ref<string | null>(null)

// Highlight
const highlight = ref<string | null>(null)

function onUpdate(editor: Editor) {
  const { color: colorValue } = editor.getAttributes('textStyle')
  const { color: highlightValue } = editor.getAttributes('highlight')

  color.value = colorValue
  highlight.value = highlightValue
}

defineExpose({
  color,
  highlight,
  onUpdate
})
</script>

<template>
  <v-toolbar v-bind="$attrs" dense flat height="auto" class="py-1 ps-1">
    <template v-for="(item, key) in items">
      <!-- Spacer -->
      <v-spacer v-if="item.type === 'spacer'" :key="`spacer-${key}-${item.type}`" />
      <!-- Divider -->
      <v-divider v-else-if="item.type === 'divider'" vertical class="mx-1 me-2" :key="`divider-${key}-${item.type}`" />
      <!-- Slot -->
      <div v-else-if="item.type === 'slot'" :key="`slot-${key}-${item.type}`">
        <slot :name="item.slot" v-bind="{ attrs: { class: 'rounded me-1', disabled, icon: true, small: true } }" />
      </div>
      <!-- Buttons -->
      <div v-else :key="`button-${key}-${item.type}`">
        <v-tooltip :open-delay="500" top :z-index="201" bottom attach>
          <span>{{ item.title }}</span>
          <template #activator="{ on, attrs }">
            <!-- Color Button -->
            <div v-if="item.type === 'color'" class="me-1">
              <ColorPicker v-model="color" v-bind="attrs" :dark="dark" :nudge-top="-4" :nudge-left="8" @input="item.action && item.action(color)">
                <template #button="{ on: btn }">
                  <v-btn v-on="{ ...btn, ...on }" class="rounded" :disabled="disabled" icon small :data-testid="item.type">
                    <v-icon :color="color">
                      {{ item.icon }}
                    </v-icon>
                  </v-btn>
                </template>
              </ColorPicker>
            </div>

            <!-- Highlight Button -->
            <div v-else-if="item.type === 'highlight'" class="me-1">
              <ColorPicker v-model="highlight" v-bind="attrs" :dark="dark" :nudge-top="-4" :nudge-left="8" @input="item.action && item.action(highlight)">
                <template #button="{ on: btn }">
                  <v-btn v-on="{ ...btn, ...on }" class="rounded" :disabled="disabled" icon small :data-testid="item.type">
                    <v-icon :color="highlight">
                      {{ item.icon }}
                    </v-icon>
                  </v-btn>
                </template>
              </ColorPicker>
            </div>

            <!-- Table Button -->
            <div v-else-if="item.type === 'table'">
              <TableMenu v-bind="attrs" :editor="editor" :dark="dark">
                <template #button="{ on: btn }">
                  <v-btn
                    :disabled="disabled"
                    class="rounded me-1"
                    :class="{
                      'v-btn--active': item.isActive && item.isActive()
                    }"
                    :color="item.isActive && item.isActive() ? 'primary' : undefined"
                    v-bind="attrs"
                    icon
                    small
                    :data-testid="item.type"
                    v-on="{ ...btn, ...on }"
                  >
                    <v-icon>
                      {{ item.icon }}
                    </v-icon>
                  </v-btn>
                </template>
              </TableMenu>
            </div>

            <!-- Standard Button -->
            <v-btn
              v-else
              :disabled="disabled"
              class="rounded me-1"
              :class="{
                'v-btn--active': item.isActive && item.isActive()
              }"
              :color="item.isActive && item.isActive() ? 'primary' : undefined"
              v-bind="attrs"
              v-on="on"
              @click="item.action"
              icon
              small
              :data-testid="item.type"
            >
              <v-icon>{{ item.icon }}</v-icon>
            </v-btn>
          </template>
        </v-tooltip>
      </div>
    </template>
  </v-toolbar>
</template>
