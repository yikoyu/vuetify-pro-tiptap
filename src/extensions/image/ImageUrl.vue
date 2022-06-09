<template>
  <v-form>
    <v-text-field v-model="form.src" :label="t('editor.image.dialog.form.link')" autofocus :prepend-icon="mdiLinkVariant" />

    <v-text-field v-model="form.alt" :label="t('editor.image.dialog.form.alt')" :prepend-icon="mdiText" />
  </v-form>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'
import { object, func } from 'vue-types'
import { mdiLinkVariant, mdiText } from '@/constants/icons'
import type { ImageForm } from './types'

export default defineComponent({
  props: {
    value: object<ImageForm>().def({}),
    t: func<(path: string) => string>().isRequired
  },
  setup(props, { emit }) {
    const form = computed({
      get: () => props.value,
      set: val => emit('input', val)
    })

    return {
      mdiLinkVariant,
      mdiText,
      form
    }
  }
})
</script>
