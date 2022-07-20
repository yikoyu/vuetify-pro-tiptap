<script setup lang="ts">
import { ref, computed, unref } from 'vue-demi'
import { mdiLinkVariant, mdiText } from '@/constants/icons'
import type { ImageForm } from './types'

interface ImageUploadProps {
  t: (path: string) => string
  value?: ImageForm
  upload?: (file: File) => Promise<string>
}

interface ImageUploadEmits {
  (event: 'input', form: ImageForm): void
}

const props = withDefaults(defineProps<ImageUploadProps>(), {
  value: () => ({})
})

const emits = defineEmits<ImageUploadEmits>()

const loading = ref<boolean>(false)
const form = computed({
  get: () => props.value,
  set: val => emits('input', val)
})

async function onFileSelected(file: File) {
  if (!file) return

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
  <v-form :disabled="loading">
    <v-file-input
      v-model="form.file"
      :label="t('editor.image.dialog.form.file')"
      accept="image/*"
      @change="onFileSelected"
      @click:clear="form.src = undefined"
      :loading="loading"
      :prepend-icon="mdiLinkVariant"
    />

    <v-text-field v-model="form.src" :label="t('editor.image.dialog.form.link')" disabled autofocus :prepend-icon="mdiLinkVariant" />

    <v-text-field v-model="form.alt" :label="t('editor.image.dialog.form.alt')" :prepend-icon="mdiText" />

    <v-checkbox v-model="form.lockAspectRatio" :label="t('editor.image.dialog.form.aspectRatio')"></v-checkbox>
  </v-form>
</template>
