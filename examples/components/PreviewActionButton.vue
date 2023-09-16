<!--
  * @Date: 2023-05-11 22:14:19
  * @LastEditors: yikoyu 2282373181@qq.com
  * @LastEditTime: 2023-06-13 21:24:28
  * @FilePath: \vuetify-pro-tiptap\examples\components\PreviewActionButton.vue
-->
<script setup lang="ts">
import { ref } from 'vue'
import { ActionButton } from 'vuetify-pro-tiptap'
import { mdiClose, mdiFileCodeOutline } from '@mdi/js'
import type { Editor } from '@tiptap/vue-3'

interface Props {
  editor: Editor
  tooltip?: string
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  tooltip: undefined,
  disabled: false
})

const markdownTheme = ref('')
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
            <VIcon>{{ `svg:${mdiClose}` }}</VIcon>
          </VBtn>

          <VBtnToggle v-model="markdownTheme" color="deep-purple-accent-3" rounded="0" group>
            <VBtn value=""> Global </VBtn>

            <VBtn value="default"> Default </VBtn>

            <VBtn value="github"> Github </VBtn>

            <VBtn value="maidragon"> Maidragon </VBtn>
          </VBtnToggle>
        </VToolbar>

        <VContainer>
          <VSheet class="mx-auto" :max-width="maxWidth">
            <VuetifyViewer :value="editor.getJSON()" :markdown-theme="markdownTheme" />
          </VSheet>
        </VContainer>
      </VCard>
    </VDialog>
  </ActionButton>
</template>
