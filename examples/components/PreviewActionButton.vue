<script setup lang="ts">
import { ref } from 'vue'
import { mdiFileCodeOutline, mdiClose } from '@mdi/js'
import type { Editor } from '@tiptap/vue-3'
import { ActionButton } from 'vuetify-pro-tiptap'

interface Props {
  editor: Editor
  tooltip?: string
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  tooltip: undefined,
  disabled: false
})

const dialog = ref(false)
const maxWidth = ref<number>(900)
</script>

<template>
  <ActionButton tooltip="全屏" :disabled="disabled">
    <VIcon>{{ `svg:${mdiFileCodeOutline}` }}</VIcon>
    <VDialog v-model="dialog" fullscreen hide-overlay activator="parent">
      <VCard>
        <VToolbar dark color="primary">
          <VBtn icon dark @click="dialog = false">
            <v-icon>{{ `svg:${mdiClose}` }}</v-icon>
          </VBtn>
        </VToolbar>

        <VContainer>
          <VSheet class="mx-auto" :max-width="maxWidth">
            <VuetifyViewer :value="editor.getHTML()" />
          </VSheet>
        </VContainer>
      </VCard>
    </VDialog>
  </ActionButton>
</template>
