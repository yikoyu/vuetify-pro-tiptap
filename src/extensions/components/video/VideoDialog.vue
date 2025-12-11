<script setup lang="ts">
import type { Editor } from '@tiptap/vue-3'
import { computed, ref, unref, watchEffect } from 'vue'

import { getIcon } from '@/constants/icons'
import { useLocale } from '@/locales'

interface Props {
  value?: string
  editor: Editor
  destroy?: () => void
}

const props = withDefaults(defineProps<Props>(), {
  value: undefined,
  destroy: undefined,
})

const { t } = useLocale()

const url = ref<string>('')

const dialog = ref<boolean>(false)

const isDisabled = computed(() => {
  if (props.value === url.value)
    return true
  if (!unref(url))
    return true
  return false
})

function apply() {
  if (unref(url)) {
    props.editor.chain().focus().setVideo({ src: url.value }).run()
  }
  close()
}

function close() {
  dialog.value = false
  url.value = ''

  setTimeout(() => props.destroy?.(), 300)
}

watchEffect(() => {
  if (props.value) {
    url.value = props.value
  }
})
</script>

<template>
  <VDialog v-model="dialog" max-width="400" activator="parent" @click:outside="close">
    <VCard>
      <VToolbar class="px-6" density="compact">
        <span class="headline">{{ t('editor.video.dialog.title') }}</span>

        <VSpacer />

        <VBtn class="mx-0" icon @click="close">
          <VIcon :icon="getIcon('close')" />
        </VBtn>
      </VToolbar>

      <VCardText>
        <VTextField v-model="url" :label="t('editor.video.dialog.link')" hide-details autofocus />
      </VCardText>

      <VCardActions>
        <VBtn :disabled="isDisabled" @click="apply">
          {{ t('editor.video.dialog.button.apply') }}
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>
