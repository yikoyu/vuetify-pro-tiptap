<script setup lang="ts">
import { setSvg, mdiLinkVariant, mdiText } from '@/constants/icons'
import { computed, ref, unref } from 'vue'
import type { ImageForm } from './types'

interface Props {
  modelValue?: ImageForm
  upload?: (file: File) => Promise<string>
  t: (path: string) => string
}

interface Emits {
  (event: 'update:modelValue', value: ImageForm): void
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: () => ({}),
  upload: undefined
})

const emit = defineEmits<Emits>()

const loading = ref<boolean>(false)
const form = computed({
  get: () => props.modelValue,
  set: val => emit('update:modelValue', val)
})

async function onFileSelected(event: { isTrusted: boolean }) {
  const file = unref(form).file?.[0]
  if (!file || !event.isTrusted) return

  try {
    loading.value = true
    const data = await props.upload?.(file)
    if (!data) return

    form.value = {
      ...unref(form),
      src: data
    }
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <VForm :disabled="loading">
    <VFileInput
      v-model="form.file"
      :label="t('editor.image.dialog.form.file')"
      accept="image/*"
      :loading="loading"
      :prepend-icon="setSvg(mdiLinkVariant)"
      @change="onFileSelected"
      @click:clear="form.src = undefined"
    />

    <VTextField v-model="form.src" :label="t('editor.image.dialog.form.link')" disabled autofocus :prepend-icon="setSvg(mdiLinkVariant)" />

    <VTextField v-model="form.alt" :label="t('editor.image.dialog.form.alt')" :prepend-icon="setSvg(mdiText)" />

    <VCheckbox v-model="form.lockAspectRatio" :label="t('editor.image.dialog.form.aspectRatio')"></VCheckbox>
  </VForm>
</template>
