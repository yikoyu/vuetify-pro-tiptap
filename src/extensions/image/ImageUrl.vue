<script setup lang="ts">
import { setSvg, mdiLinkVariant, mdiText } from '@/constants/icons'
import { computed } from 'vue'
import type { ImageForm } from './types'

interface Props {
  modelValue?: ImageForm
  t: (path: string) => string
}

interface Emits {
  (event: 'update:modelValue', value: ImageForm): void
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: () => ({})
})

const emit = defineEmits<Emits>()

const form = computed({
  get: () => props.modelValue,
  set: val => emit('update:modelValue', val)
})
</script>

<template>
  <VForm>
    <VTextField v-model="form.src" :label="t('editor.image.dialog.form.link')" autofocus :prepend-icon="setSvg(mdiLinkVariant)" />

    <VTextField v-model="form.alt" :label="t('editor.image.dialog.form.alt')" :prepend-icon="setSvg(mdiText)" />

    <VCheckbox v-model="form.lockAspectRatio" :label="t('editor.image.dialog.form.aspectRatio')"></VCheckbox>
  </VForm>
</template>
