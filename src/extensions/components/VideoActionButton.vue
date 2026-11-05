<script setup lang="ts">
import type { Editor } from "@tiptap/vue-3"
import type { IconsOptions } from "@/constants/icons"

import type { HrefRules } from "@/hooks/use-href-rules"

import { ref } from "vue"

import { ButtonViewReturnComponentProps } from "@/type"
import ActionButton from "./ActionButton.vue"
import OriginalThemeProvider from "./OriginalThemeProvider.vue"

interface Props {
  editor: Editor
  hrefRules?: HrefRules
  icon?: keyof IconsOptions
  tooltip?: string
  disabled?: boolean
  color?: string
  action?: ButtonViewReturnComponentProps["action"]
  isActive?: ButtonViewReturnComponentProps["isActive"]
}

const props = withDefaults(defineProps<Props>(), {
  icon: undefined,
  tooltip: undefined,
  disabled: false,
  color: undefined,
  action: undefined,
  isActive: undefined,
  hrefRules: ""
})

const src = ref<string | undefined>(undefined)

function onAction() {
  const { src: _src } = props.editor.getAttributes("video")
  src.value = _src
}
</script>

<template>
  <ActionButton
    :icon="icon"
    :tooltip="tooltip"
    :disabled="disabled"
    :color="color"
    :is-active="isActive"
    :action="onAction"
  >
    <OriginalThemeProvider>
      <slot
        name="dialog"
        :props="{ editor, hrefRules: props.hrefRules, value: src }"
      ></slot>
    </OriginalThemeProvider>
  </ActionButton>
</template>
