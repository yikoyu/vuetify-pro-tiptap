<script setup lang="ts">
import { ref } from 'vue-demi'
import { mdiCircle } from '@/constants/icons'

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

interface ColorPickerProps {
  value?: string
  nudgeLeft?: string | number
  nudgeTop?: string | number
  more?: boolean
  dark?: boolean
}

interface ColorPickerEmits {
  (event: 'input', color: string): void
}

withDefaults(defineProps<ColorPickerProps>(), {
  value: '',
  nudgeLeft: 0,
  nudgeTop: 0,
  more: true,
  dark: false
})

const emits = defineEmits<ColorPickerEmits>()

const menu = ref(false)
// const picker = ref(false);

function setColor(color: string) {
  emits('input', color)
  menu.value = false
}
</script>

<template>
  <v-menu
    v-model="menu"
    offset-y
    :dark="dark"
    :nudge-left="nudgeLeft || 255"
    :nudge-top="nudgeTop || 42"
    :close-on-content-click="false"
    transition="scale-transition"
    :origin="!nudgeLeft ? 'top right' : 'top left'"
  >
    <template #activator="{ on }">
      <slot name="button" v-bind="{ on }">
        <v-btn :color="value" v-on="on" icon small>
          <v-icon>{{ mdiCircle }}</v-icon>
        </v-btn>
      </slot>
    </template>
    <v-list>
      <v-sheet class="d-flex flex-wrap justify-between ma-1" fluid :max-width="230">
        <template v-for="color in colors">
          <v-btn icon small :key="color" @click="setColor(color)">
            <v-icon :color="color">{{ mdiCircle }}</v-icon>
          </v-btn>
        </template>
      </v-sheet>

      <!-- <template>
        <v-btn v-if="!picker" block text @click="picker = true"> show more </v-btn>
        <v-btn v-else block text @click="picker = false"> show less </v-btn>

        <v-expand-transition>
          <div v-if="picker" class="text-center">
            <v-divider />
            <v-color-picker
              :value="value"
              hide-mode-switch
              mode="hexa"
              :width="254"
              @update:color="onInput"
            />
          </div>
        </v-expand-transition>
      </template> -->
    </v-list>
  </v-menu>
</template>
