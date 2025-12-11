<script setup lang="ts">
import type { ImageForm } from './types'

import { computed } from 'vue'

import { getIcon } from '@/constants/icons'

interface Props {
  modelValue?: ImageForm
  t: (path: string) => string
}

interface Emits {
  (event: 'update:modelValue', value: ImageForm): void
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: () => ({}),
})

const emit = defineEmits<Emits>()

const form = computed({
  get: () => props.modelValue,
  set: val => emit('update:modelValue', val),
})
</script>

<template>
  <VForm>
    <VTextField
      v-model="form.src"
      :label="t('editor.image.dialog.form.link')"
      autofocus
      :prepend-icon="getIcon('linkVariant')"
    />

    <VTextField v-model="form.alt" :label="t('editor.image.dialog.form.alt')" :prepend-icon="getIcon('text')" />

    <VCheckbox v-model="form.lockAspectRatio" :label="t('editor.image.dialog.form.aspectRatio')" />
  </VForm>
</template>
