<script setup lang="ts">
import { computed, onUnmounted, unref, useAttrs, watch } from 'vue'
import { useTheme } from 'vuetify'
import type { AnyExtension, EditorOptions } from '@tiptap/vue-3'
import { Editor, EditorContent } from '@tiptap/vue-3'

import BubbleMenu from './BubbleMenu.vue'
import TipTapToolbar from './TiptapToolbar.vue'

import { EDITOR_UPDATE_THROTTLE_WAIT_TIME, EDITOR_UPDATE_WATCH_THROTTLE_WAIT_TIME } from '@/constants/define'
import { useContext } from '@/hooks/use-context'
import { useMarkdownTheme } from '@/hooks/use-markdown-theme'
import { useLocale } from '@/locales'
import { getUnitWithPxAsDefault, isBoolean, throttle } from '@/utils/utils'

type HandleKeyDown = NonNullable<EditorOptions['editorProps']['handleKeyDown']>
type OnUpdate = NonNullable<EditorOptions['onUpdate']>

interface Props {
  modelValue?: string
  markdownTheme?: string | false
  dark?: boolean
  dense?: boolean
  outlined?: boolean
  flat?: boolean
  disabled?: boolean
  label?: string
  hideToolbar?: boolean
  disableToolbar?: boolean
  maxWidth?: string | number
  minHeight?: string | number
  maxHeight?: string | number
  extensions?: AnyExtension[]
  editorClass?: string | string[] | Record<string, any>
}

interface Emits {
  (event: 'enter'): void
  (event: 'update:modelValue', value: string): void
  (event: 'update:markdownTheme', value: string): void
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  markdownTheme: undefined,
  dark: undefined,
  dense: false,
  outlined: true,
  flat: true,
  disabled: false,
  label: undefined,
  hideToolbar: false,
  disableToolbar: false,
  maxWidth: undefined,
  minHeight: undefined,
  maxHeight: undefined,

  // Editor
  extensions: () => [],
  editorClass: undefined
})

const emit = defineEmits<Emits>()
const attrs = useAttrs()

const theme = useTheme()
const { state, isFullscreen } = useContext()
const { markdownThemeStyle } = useMarkdownTheme(
  computed(() => props.markdownTheme),
  (value: string) => {
    emit('update:markdownTheme', value)
  }
)

const sortExtensions = computed<AnyExtension[]>(() => {
  const exts = [...state.extensions, ...props.extensions]
  return exts.map((k, i) => k.configure({ sort: i }))
})

const editor = new Editor({
  content: props.modelValue,
  editorProps: {
    handleKeyDown: throttle<HandleKeyDown>(function (view, event) {
      if (event.key === 'Enter' && attrs.enter && !event.shiftKey) {
        emit('enter')

        return true
      }

      return false
    }, EDITOR_UPDATE_THROTTLE_WAIT_TIME)
  },
  onUpdate: throttle<OnUpdate>(({ editor }) => {
    emit('update:modelValue', editor.getHTML())
  }, EDITOR_UPDATE_THROTTLE_WAIT_TIME),
  extensions: unref(sortExtensions),
  autofocus: false,
  editable: !props.disabled,
  injectCSS: true
})

const { t } = useLocale()

const isDark = computed<boolean>(() => {
  if (isBoolean(props.dark)) return props.dark
  if (isBoolean(theme.current.value.dark)) return theme.current.value.dark
  return false
})

const contentDynamicClasses = computed(() => {
  const values: Record<string, any> = {
    __dark: unref(isDark),
    ...unref(markdownThemeStyle)
  }

  return [values, props.editorClass]
})

const contentDynamicStyles = computed(() => {
  const maxWidth = getUnitWithPxAsDefault(props.maxWidth)

  const maxHeightStyle = {
    maxWidth: maxWidth,
    width: !maxWidth ? undefined : '100%',
    margin: !maxWidth ? undefined : '0 auto',
    backgroundColor: unref(isDark) ? '#1E1E1E' : '#FFFFFF'
  }
  if (unref(isFullscreen)) return { height: '100%', overflowY: 'auto', ...maxHeightStyle }

  const minHeight = getUnitWithPxAsDefault(props.minHeight)
  const maxHeight = getUnitWithPxAsDefault(props.maxHeight)

  return {
    minHeight,
    maxHeight,
    overflowY: 'auto',
    ...maxHeightStyle
  }
})

const onValueChange = throttle((val: string) => {
  if (!editor) return

  const html = editor.getHTML()

  if (html === val) return

  const { from, to } = editor.state.selection
  editor.commands.setContent(val, false)
  editor.commands.setTextSelection({ from, to })
}, EDITOR_UPDATE_WATCH_THROTTLE_WAIT_TIME)

const onDisabledChange = (val: boolean) => editor?.setEditable(!val)

watch(() => props.modelValue, onValueChange)
watch(() => props.disabled, onDisabledChange)

onUnmounted(() => editor?.destroy())
</script>

<template>
  <div v-if="editor" class="vuetify-pro-tiptap" :class="{ dense }">
    <VThemeProvider :theme="isDark ? 'dark' : 'light'">
      <!-- Edit Mode -->
      <BubbleMenu :editor="editor" :disabled="disableToolbar" />

      <VInput class="pt-0" hide-details="auto">
        <VCard
          :flat="flat"
          :outlined="outlined"
          :color="isDark ? 'grey-darken-4' : 'grey-lighten-4'"
          v-bind="$attrs"
          :style="{
            borderColor: $attrs['error-messages'] ? '#ff5252' : undefined,
            width: '100%'
          }"
          class="vuetify-pro-tiptap-editor"
          :class="{ 'vuetify-pro-tiptap-editor--fullscreen': isFullscreen }"
        >
          <template v-if="label && !isFullscreen">
            <VCardTitle :class="isDark ? 'bg-grey-darken-3' : 'bg-grey-lighten-3'">
              {{ label }}
            </VCardTitle>

            <VDivider />
          </template>
          <!-- Toolbar -->
          <TipTapToolbar
            v-if="!hideToolbar"
            class="vuetify-pro-tiptap-editor__toolbar"
            :editor="editor"
            :disabled="disableToolbar"
          />

          <slot
            name="editor"
            v-bind="{ editor, props: { class: 'vuetify-pro-tiptap-editor__content', 'data-testid': 'value' } }"
          >
            <EditorContent
              class="vuetify-pro-tiptap-editor__content"
              :class="contentDynamicClasses"
              :style="contentDynamicStyles"
              :editor="editor"
              data-testid="value"
            />
          </slot>

          <slot name="bottom" v-bind="{ editor }">
            <VToolbar class="px-4" density="compact" flat>
              <VSpacer />

              <span class="text-overline me-4">
                {{ editor.storage.characterCount.words() }} {{ t('editor.words') }}
              </span>

              <span class="text-overline">
                {{ editor.storage.characterCount.characters() }} {{ t('editor.characters') }}
              </span>
            </VToolbar>
          </slot>
        </VCard>
      </VInput>
    </VThemeProvider>
  </div>
</template>

<style lang="scss">
@import '@/styles/index.scss';
</style>
