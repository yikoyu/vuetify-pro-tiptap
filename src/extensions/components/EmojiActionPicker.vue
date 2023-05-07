<script setup lang="ts">
import { ref, watch, computed, unref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { createPicker } from 'picmo'
import type { EmojiPicker, PickerOptions } from 'picmo'
import type { Editor } from '@tiptap/vue-3'
import type { IconsOptions } from '@/constants/icons'
import type { ButtonViewReturnComponentProps } from '@/type'

import ActionButton from './ActionButton.vue'

import { useLocale } from '@/locales'

interface Props {
  editor: Editor
  dark?: boolean
  icon?: keyof IconsOptions
  tooltip?: string
  disabled?: boolean
  pickerOptions?: Partial<PickerOptions>
  action?: ButtonViewReturnComponentProps['action']
}

const props = withDefaults(defineProps<Props>(), {
  dark: false,
  icon: undefined,
  tooltip: undefined,
  disabled: false,
  pickerOptions: () => ({}),
  action: undefined
})

let instance: EmojiPicker | null = null

const { message, lang } = useLocale()

const parentRef = ref<Record<string, any>>()
const menu = ref(false)
const refresh = ref(true)

const options = computed<Partial<PickerOptions>>(() => ({
  ...props.pickerOptions,
  theme: props.dark ? 'picmo__dark' : 'picmo__light',
  i18n: unref(message)['emoji_locale'],
  locale: unref(message)['emojibase']
}))

/**
 * emoji-mart 的 bug 导致 i18n 无法使用 .update 就行切换
 * 所以当切换语音时，使用 v-if 进行重新渲染注册
 */
function refreshPicker() {
  onDestroyPicker()
  refresh.value = false

  nextTick(() => {
    // 重新渲染组件
    refresh.value = true

    nextTick(() => {
      onCreatePicker()
    })
  })
}

async function onCreatePicker() {
  const rootElement = unref(parentRef)?.$el ?? unref(parentRef)
  if (!rootElement) return

  instance = /* @__PURE__*/ createPicker({
    ...unref(options),
    rootElement
  })

  instance?.addEventListener('emoji:select', onEmojiSelect)
}

function onDestroyPicker() {
  instance?.destroy()
  instance?.removeEventListener('emoji:select', onEmojiSelect)
  instance = null
}

function onEmojiSelect(event: Record<string, any>) {
  if (!event?.emoji) return
  props.action?.(event.emoji)
  menu.value = false
}

watch(options, val => {
  instance?.updateOptions({
    // className: val.className,
    theme: val.theme
    // emojiSize: val.emojiSize,
    // emojisPerRow: val.emojisPerRow,
    // visibleRows: val.visibleRows
  })
})
watch(lang, _val => refreshPicker())
onMounted(() => onCreatePicker())
onBeforeUnmount(() => onDestroyPicker())
</script>

<template>
  <ActionButton :icon="icon" :tooltip="tooltip" :disabled="disabled">
    <VMenu v-model="menu" eager activator="parent" :close-on-content-click="false">
      <VSheet v-if="refresh" ref="parentRef" :elevation="8" />
    </VMenu>
  </ActionButton>
</template>
