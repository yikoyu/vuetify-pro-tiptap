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

<script lang="ts">
import { defineComponent, ref, computed, unref } from 'vue-demi'
import { func, object } from 'vue-types'
import { mdiLinkVariant, mdiText } from '@/constants/icons'
import type { ImageForm } from './types'

export default defineComponent({
  props: {
    value: object<ImageForm>().def({}),
    upload: func<(file: File) => Promise<string>>(),
    t: func<(path: string) => string>().isRequired
  },
  setup(props, { emit }) {
    const loading = ref<boolean>(false)
    const form = computed({
      get: () => props.value,
      set: val => emit('input', val)
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

    return {
      mdiLinkVariant,
      mdiText,
      form,
      loading,
      onFileSelected
    }
  }
})
</script>
