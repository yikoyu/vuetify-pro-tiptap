<script setup lang="ts">
import { computed, ref, unref, watchEffect } from 'vue'
import { locale } from 'vuetify-pro-tiptap'
import { mdiClose } from '@mdi/js'
import type { Editor } from '@tiptap/vue-3'

interface Props {
  value?: string
  editor: Editor
  destroy?: () => void
}

const props = withDefaults(defineProps<Props>(), {
  value: undefined,
  destroy: undefined
})

const url = ref<string>('')

const dialog = ref<boolean>(false)

const isDisabled = computed(() => {
  if (props.value === url.value) return true
  if (!unref(url)) return true
  return false
})

function apply() {
  if (unref(url)) {
    props.editor
      .chain()
      .focus()
      .extendMarkRange('link')
      .setLink({ href: unref(url) })
      .run()
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
        <span class="headline">{{ locale.message[locale.lang]['editor.link.dialog.title'] }}</span>

        <VSpacer />

        <VBtn class="mx-0" icon @click="close">
          <VIcon :icon="mdiClose" />
        </VBtn>
      </VToolbar>

      <VCardText>
        <div>This is a custom dialog component;</div>

        <div>please use the <strong>dialogComponent</strong> parameter.</div>

        <VTextField
          v-model="url"
          :label="locale.message[locale.lang]['editor.link.dialog.link']"
          hide-details
          autofocus
        />
      </VCardText>

      <VCardActions>
        <VBtn :disabled="isDisabled" text @click="apply">
          {{ locale.message[locale.lang]['editor.link.dialog.button.apply'] }}
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>
