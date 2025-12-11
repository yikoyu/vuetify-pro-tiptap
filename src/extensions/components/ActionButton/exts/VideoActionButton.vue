<script setup lang="ts">
import { ref } from 'vue'

import OriginalThemeProvider from '../../OriginalThemeProvider.vue'
import ActionButton from '../src/index.vue'
import { extActionButtonProps } from '../src/props'

const props = defineProps(extActionButtonProps)

const src = ref<string | undefined>(undefined)

function onAction() {
  const { src: _src } = props.editor.getAttributes('video')
  src.value = _src
}
</script>

<template>
  <ActionButton
    :editor="editor"
    :action="onAction"
    :is-active="() => editor.isActive('video') || false"
    :disabled="!editor.can().setVideo({})"
    :tooltip="t('editor.video.tooltip')"
    icon="video"
  >
    <OriginalThemeProvider>
      <slot name="dialog" :props="{ editor, value: src }" />
    </OriginalThemeProvider>
  </ActionButton>
</template>
