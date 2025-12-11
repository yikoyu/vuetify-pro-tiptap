<script setup lang="ts">
import type { ImageForm } from './types'

import { computed, ref, unref } from 'vue'

import { getIcon } from '@/constants/icons'
import Logger from '@/utils/logger'

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
  upload: undefined,
})

const emit = defineEmits<Emits>()

const loading = ref<boolean>(false)
const form = computed({
  get: () => props.modelValue,
  set: val => emit('update:modelValue', val),
})

async function onFileSelected(files: File | File[]) {
  const file = files instanceof File ? files : files[0]
  if (!file) {
    throw new Error('No files to upload')
  }

  try {
    loading.value = true
    const data = await props.upload?.(file)
    if (!data) {
      throw new Error('No link received after upload')
    }

    form.value = {
      ...unref(form),
      src: data,
    }
  }
  catch (err) {
    Logger.error(`Failed to execute upload file: ${err}`)
  }
  finally {
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
      :prepend-icon="getIcon('fileImagePlus')"
      @update:model-value="onFileSelected"
      @click:clear="form.src = undefined"
    />

    <VTextField
      v-model="form.src"
      :label="t('editor.image.dialog.form.link')"
      disabled
      autofocus
      :prepend-icon="getIcon('linkVariant')"
    />

    <VTextField v-model="form.alt" :label="t('editor.image.dialog.form.alt')" :prepend-icon="getIcon('text')" />

    <VCheckbox v-model="form.lockAspectRatio" :label="t('editor.image.dialog.form.aspectRatio')" />
  </VForm>
</template>
