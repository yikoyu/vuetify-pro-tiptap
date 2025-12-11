<script setup lang="ts">
import { ref, watch } from 'vue'

import { COLORS_LIST } from '@/constants/define'
import { getIcon } from '@/constants/icons'

interface Props {
  modelValue?: string
  nudgeLeft?: string | number
  nudgeTop?: string | number
  more?: boolean
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
})

const emit = defineEmits<Emits>()

const inutValue = ref('')
const menu = ref(false)
// const picker = ref(false);

watch(menu, (val) => {
  inutValue.value = props.modelValue
})

function setColor(color: string) {
  emit('update:modelValue', color)
  emit('change', color)

  inutValue.value = color
  menu.value = false
}
</script>

<template>
  <VMenu
    v-model="menu"
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
          <VIcon :icon="getIcon('circle')" :color="color" />
        </VBtn>

        <VTextField
          v-model="inutValue"
          class="mt-2 mx-1"
          :append-inner-icon="getIcon('check')"
          density="compact"
          label="HEX"
          variant="outlined"
          flat
          hide-details
          single-line
          clearable
          @click:append-inner="setColor(inutValue)"
        >
          <template v-if="inutValue" #prepend-inner>
            <VIcon class="opacity-100" :icon="getIcon('circle')" :color="inutValue" />
          </template>
        </VTextField>
      </VSheet>

      <!-- <template>
        <VBtn v-if="!picker" block text @click="picker = true"> show more </VBtn>
        <VBtn v-else block text @click="picker = false"> show less </VBtn>

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
