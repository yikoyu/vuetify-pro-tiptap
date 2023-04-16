<script setup lang="ts">
import { ref } from 'vue'
import { getIcon } from '@/constants/icons'
import { COLORS_LIST } from '@/constants/define'

interface Props {
  modelValue?: string
  nudgeLeft?: string | number
  nudgeTop?: string | number
  more?: boolean
  dark?: boolean
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
  dark: false
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
    activator="parent"
  >
    <VList>
      <VSheet class="d-flex flex-wrap justify-between ma-1" fluid :max-width="230">
        <VBtn v-for="color in COLORS_LIST" :key="color" flat icon density="compact" @click="setColor(color)">
          <VIcon :icon="getIcon('circle')" :color="color"></VIcon>
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
