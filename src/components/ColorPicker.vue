<script setup lang="ts">
import { mdiCircle, setSvg } from '@/constants/icons'
import { ref } from 'vue'

const colors = [
  '#f44336',
  '#e91e63',
  '#9c27b0',
  '#673ab7',
  '#3f51b5',
  '#2196f3',
  '#03a9f4',
  '#00bcd4',
  '#009688',
  '#4caf50',
  '#8bc34a',
  '#cddc39',
  '#ffeb3b',
  '#ffc107',
  '#ff9800',
  '#ff5722',
  '#000000',
  '#333333',
  '#666666',
  '#999999',
  '#CCCCCC',
  '#D5D5D4',
  '#E8E8E8',
  '#EEEEEE'
]

interface Props {
  modelValue?: string
  nudgeLeft?: string | number
  nudgeTop?: string | number
  more?: boolean
  dark?: boolean
  activator?: string
}

interface Emits {
  (event: 'update:modelValue', color: string): void
  (event: 'change', color: string): void
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  nudgeLeft: 0,
  nudgeTop: 0,
  more: true,
  dark: false,
  activator: undefined
})

const emit = defineEmits<Emits>()

const menu = ref(false)
// const picker = ref(false);

function setColor(color: string) {
  emit('update:modelValue', color)
  emit('change', color)
  menu.value = false
}
</script>

<template>
  <VMenu
    v-model="menu"
    :dark="dark"
    :nudge-left="nudgeLeft || 255"
    :nudge-top="nudgeTop || 42"
    :close-on-content-click="false"
    transition="scale-transition"
    :origin="!nudgeLeft ? 'top right' : 'top left'"
    :activator="activator"
  >
    <template #activator="{ props: _props }">
      <slot name="button" v-bind="{ props: _props }"></slot>
    </template>
    <VList>
      <VSheet class="d-flex flex-wrap justify-between ma-1" fluid :max-width="230">
        <VBtn v-for="color in colors" :key="color" flat icon density="compact" @click="setColor(color)">
          <VIcon :icon="setSvg(mdiCircle)" :color="color"></VIcon>
        </VBtn>
      </VSheet>

      <!-- <template>
        <v-btn v-if="!picker" block text @click="picker = true"> show more </v-btn>
        <v-btn v-else block text @click="picker = false"> show less </v-btn>

        <v-expand-transition>
          <div v-if="picker" class="text-center">
            <v-divider />
            <v-color-picker
              :model-value="modelValue"
              hide-mode-switch
              mode="hexa"
              :width="254"
              @update:color="onInput"
            />
          </div>
        </v-expand-transition>
      </template> -->
    </VList>
  </VMenu>
</template>
