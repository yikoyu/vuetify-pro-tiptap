<!--
  * @Date: 2023-05-11 22:14:19
  * @LastEditors: yikoyu 2282373181@qq.com
  * @LastEditTime: 2023-06-13 21:24:28
  * @FilePath: \vuetify-pro-tiptap\examples\components\PreviewActionButton.vue
-->
<script setup lang="ts">
import type { Editor } from '@tiptap/vue-3'
import { mdiClose, mdiFileCodeOutline } from '@mdi/js'
import { ref } from 'vue'
import { useTheme } from 'vuetify'

import { ActionButton } from 'vuetify-pro-tiptap'

const props = withDefaults(defineProps<Props>(), {
  tooltip: undefined,
  disabled: false,
})

// 获取原始主题
const { global: { name: originalTheme } } = useTheme()
interface Props {
  editor: Editor
  tooltip?: string
  disabled?: boolean
}

const markdownTheme = ref('')
const dialog = ref(false)
const maxWidth = ref<number>(900)
</script>

<template>
  <ActionButton :editor="editor" tooltip="全屏" :disabled="disabled">
    <VIcon>{{ `svg:${mdiFileCodeOutline}` }}</VIcon>

    <VThemeProvider :theme="originalTheme">
      <VDialog v-model="dialog" fullscreen hide-overlay activator="parent">
        <VCard>
          <VToolbar dark color="primary">
            <VBtn icon dark @click="dialog = false">
              <VIcon>{{ `svg:${mdiClose}` }}</VIcon>
            </VBtn>

            <VBtnToggle v-model="markdownTheme" color="deep-purple-accent-3" rounded="0" group>
              <VBtn value="">
                Global
              </VBtn>

              <VBtn value="default">
                Default
              </VBtn>

              <VBtn value="github">
                Github
              </VBtn>

              <VBtn value="maidragon">
                Maidragon
              </VBtn>
            </VBtnToggle>
          </VToolbar>

          <VContainer>
            <VSheet class="mx-auto" :max-width="maxWidth">
              <VuetifyViewer :value="editor.getJSON()" :markdown-theme="markdownTheme" />
            </VSheet>
          </VContainer>
        </VCard>
      </VDialog>
    </VThemeProvider>
  </ActionButton>
</template>
