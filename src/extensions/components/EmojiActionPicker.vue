<script setup lang="ts">
import { ref, watchEffect, computed, unref, nextTick, onMounted, onBeforeUnmount, watch } from 'vue'
import { Picker } from 'emoji-mart'
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
  emojiOptions?: Record<string, any>
  action?: ButtonViewReturnComponentProps['action']
}

const props = withDefaults(defineProps<Props>(), {
  dark: false,
  icon: undefined,
  tooltip: undefined,
  disabled: false,
  emojiOptions: () => ({}),
  action: undefined
})

const { message } = useLocale()

const parentRef = ref<Record<string, any>>()
const instance = ref<Picker>()
const menu = ref(false)
const refresh = ref(true)

const options = computed(() => ({
  ...props.emojiOptions,
  theme: props.dark ? 'dark' : 'light'
}))

function registerEmojiMart() {
  const parentEl = unref(parentRef)?.$el

  if (instance.value || !parentEl) return

  instance.value = new Picker({
    ...unref(options),
    parent: parentEl,
    i18n: unref(message)['emoji_locale'], // i18n is not update
    onEmojiSelect: (emoji: Record<string, any>) => {
      if (!emoji?.native) return
      props.action?.(emoji.native)
      menu.value = false
    }
  })
}

/**
 * emoji-mart 的 bug 导致 i18n 无法使用 .update 就行切换
 * 所以当切换语音时，使用 v-if 进行重新渲染注册
 */
function refreshEmojiMart() {
  unref(instance)?.disconnectedCallback()
  refresh.value = false
  instance.value = undefined

  nextTick(() => {
    // 重新渲染组件
    refresh.value = true

    nextTick(() => {
      registerEmojiMart()
    })
  })
}

watch(message, _val => refreshEmojiMart())

watchEffect(() => unref(instance)?.update(unref(options)))

onMounted(() => registerEmojiMart())

onBeforeUnmount(() => unref(instance)?.disconnectedCallback())
</script>

<template>
  <ActionButton :icon="icon" :tooltip="tooltip" :disabled="disabled">
    <VMenu v-model="menu" eager activator="parent" :close-on-content-click="false">
      <VSheet v-if="refresh" ref="parentRef" :elevation="8" />
    </VMenu>
  </ActionButton>
</template>
