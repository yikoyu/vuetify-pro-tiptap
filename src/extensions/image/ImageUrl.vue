<script setup lang="ts">
import { computed } from 'vue-demi'
import { mdiLinkVariant, mdiText } from '@/constants/icons'
import type { ImageForm } from './types'

interface ImageUrlProps {
  t: (path: string) => string
  value?: ImageForm
}

interface ImageUrlEmits {
  (event: 'input', form: ImageForm): void
}

const props = withDefaults(defineProps<ImageUrlProps>(), {
  value: () => ({})
})

const emits = defineEmits<ImageUrlEmits>()

const form = computed({
  get: () => props.value,
  set: val => emits('input', val)
})
</script>

<template>
  <v-form>
    <v-text-field v-model="form.src" :label="t('editor.image.dialog.form.link')" autofocus :prepend-icon="mdiLinkVariant" />

    <v-text-field v-model="form.alt" :label="t('editor.image.dialog.form.alt')" :prepend-icon="mdiText" />

    <v-checkbox v-model="form.lockAspectRatio" :label="t('editor.image.dialog.form.aspectRatio')"></v-checkbox>
  </v-form>
</template>
