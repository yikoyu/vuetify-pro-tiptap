<script setup lang="ts">
import type { Editor as CoreEditor } from '@tiptap/core'
import type { AnyExtension, EditorOptions } from '@tiptap/vue-3'
import type { VuetifyTiptapOnChange } from '@/type'
import { EditorContent, useEditor } from '@tiptap/vue-3'
import { computed, provide, toRef, unref, useAttrs, watch } from 'vue'

import { useTheme } from 'vuetify'
import { EDITOR_UPDATE_THROTTLE_WAIT_TIME, EDITOR_UPDATE_WATCH_THROTTLE_WAIT_TIME } from '@/constants/define'

import { useMarkdownTheme, useProvideTiptapStore } from '@/hooks'
import { useLocale } from '@/locales'
import { differenceBy, getCssUnitWithDefault, hasExtension, isBoolean, isEqual, throttle } from '@/utils/utils'
import BubbleMenu from './BubbleMenu.vue'
import TipTapToolbar from './TiptapToolbar.vue'

type HandleKeyDown = NonNullable<EditorOptions['editorProps']['handleKeyDown']>
type OnUpdate = NonNullable<EditorOptions['onUpdate']>

interface Props {
  modelValue?: string | object
  markdownTheme?: string | false
  output?: 'html' | 'json' | 'text'
  dark?: boolean
  dense?: boolean
  outlined?: boolean
  flat?: boolean
  disabled?: boolean
  label?: string
  hideToolbar?: boolean
  disableToolbar?: boolean
  hideBubble?: boolean
  removeDefaultWrapper?: boolean
  maxWidth?: string | number
  minHeight?: string | number
  maxHeight?: string | number
  extensions?: AnyExtension[]
  editorClass?: string | string[] | Record<string, any>
  errorMessages?: string | string[] | null
}

interface Emits {
  (event: 'enter'): void
  (event: 'change', value: VuetifyTiptapOnChange): void
  (event: 'update:modelValue', value: Props['modelValue']): void
  (event: 'update:markdownTheme', value: string): void
}

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  markdownTheme: undefined,
  output: 'html',
  dark: undefined,
  dense: false,
  outlined: true,
  flat: true,
  disabled: false,
  label: undefined,
  hideToolbar: false,
  disableToolbar: false,
  hideBubble: false,
  removeDefaultWrapper: false,
  maxWidth: undefined,
  minHeight: undefined,
  maxHeight: undefined,
  errorMessages: () => [],

  // Editor
  extensions: () => [],
  editorClass: undefined,
})

const emit = defineEmits<Emits>()
const attrs = useAttrs()

const theme = useTheme()
const { state, isFullscreen } = useProvideTiptapStore()
const { markdownThemeStyle } = useMarkdownTheme(
  computed(() => props.markdownTheme),
  (value: string) => {
    emit('update:markdownTheme', value)
  },
)

const sortExtensions = computed<AnyExtension[]>(() => {
  const diff = differenceBy(props.extensions, state.extensions, 'name')

  // Override configurations for duplicate extensions
  const exts = state.extensions.map((k, i) => {
    const find = props.extensions.find(ext => ext.name === k.name)
    if (!find)
      return k

    return k.configure(find.options)
  })

  return [...exts, ...diff].map((k, i) => k.configure({ sort: i }))
})

const editor = useEditor({
  content: props.modelValue,
  editorProps: {
    handleKeyDown: throttle<HandleKeyDown>((view, event) => {
      if (event.key === 'Enter' && attrs.enter && !event.shiftKey) {
        emit('enter')

        return true
      }

      return false
    }, EDITOR_UPDATE_THROTTLE_WAIT_TIME),
  },
  onUpdate: throttle<OnUpdate>(({ editor }) => {
    const output = getOutput(editor, props.output)

    emit('update:modelValue', output)

    emit('change', { editor, output })
  }, EDITOR_UPDATE_THROTTLE_WAIT_TIME),
  extensions: unref(sortExtensions),
  autofocus: false,
  editable: !props.disabled,
  injectCSS: true,
})

const { t } = useLocale()

const isDark = computed<boolean>(() => {
  if (isBoolean(props.dark))
    return props.dark
  if (isBoolean(theme.current.value.dark))
    return theme.current.value.dark
  return false
})

const contentDynamicClasses = computed(() => {
  const values: Record<string, any> = {
    __dark: unref(isDark),
    ...unref(markdownThemeStyle),
  }

  return [values, props.editorClass]
})

const contentDynamicStyles = computed(() => {
  const maxWidth = getCssUnitWithDefault(props.maxWidth)

  const maxHeightStyle = {
    maxWidth,
    width: !maxWidth ? undefined : '100%',
    margin: !maxWidth ? undefined : '0 auto',
    backgroundColor: unref(isDark) ? '#121212' : '#FFFFFF',
  }
  if (unref(isFullscreen))
    return { height: '100%', overflowY: 'auto', ...maxHeightStyle }

  const minHeight = getCssUnitWithDefault(props.minHeight)
  const maxHeight = getCssUnitWithDefault(props.maxHeight)

  return {
    minHeight,
    maxHeight,
    overflowY: 'auto',
    ...maxHeightStyle,
  }
})

function getOutput(editor: CoreEditor, output: Props['output']) {
  if (props.removeDefaultWrapper) {
    if (output === 'html')
      return editor.isEmpty ? '' : editor.getHTML()
    if (output === 'json')
      return editor.isEmpty ? {} : editor.getJSON()
    if (output === 'text')
      return editor.isEmpty ? '' : editor.getText()
    return ''
  }

  if (output === 'html')
    return editor.getHTML()
  if (output === 'json')
    return editor.getJSON()
  if (output === 'text')
    return editor.getText()
  return ''
}

const onValueChange = throttle((val: NonNullable<Props['modelValue']>) => {
  if (!editor.value)
    return

  const output = getOutput(editor.value, props.output)

  if (isEqual(output, val))
    return

  const { from, to } = editor.value.state.selection
  editor.value.commands.setContent(val, { emitUpdate: false })
  editor.value.commands.setTextSelection({ from, to })
}, EDITOR_UPDATE_WATCH_THROTTLE_WAIT_TIME)

const onDisabledChange = (val: boolean) => editor.value?.setEditable(!val)

watch(() => props.modelValue, onValueChange)
watch(() => props.disabled, onDisabledChange)

provide('disableToolbar', toRef(() => props.disableToolbar))

defineExpose({ editor })
</script>

<template>
  <Teleport to="body" :disabled="!isFullscreen">
    <div v-if="editor" class="vuetify-pro-tiptap" :class="{ dense }">
      <VThemeProvider :theme="isDark ? 'dark' : 'light'">
        <VInput class="pt-0" hide-details="auto" :error-messages="errorMessages">
          <VCard
            :flat="flat"
            :outlined="outlined"
            :color="isDark ? 'grey-darken-4' : 'grey-lighten-4'"
            v-bind="$attrs"
            :style="{
              borderColor: errorMessages ? '#ff5252' : undefined,
              width: '100%',
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
            />

            <!-- Edit Mode -->
            <BubbleMenu v-if="!hideBubble" :editor="editor" />

            <slot
              name="editor"
              v-bind="{ editor, props: { 'class': 'vuetify-pro-tiptap-editor__content', 'data-testid': 'value' } }"
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

                <template v-if="hasExtension(editor, 'characterCount')">
                  <span class="text-overline me-4">
                    {{ editor.storage.characterCount.words() }} {{ t('editor.words') }}
                  </span>

                  <span class="text-overline">
                    {{ editor.storage.characterCount.characters() }} {{ t('editor.characters') }}
                  </span>
                </template>
              </VToolbar>
            </slot>
          </VCard>
        </VInput>
      </VThemeProvider>
    </div>
  </Teleport>
</template>

<style lang="scss">
@forward '@/styles/index.scss';
</style>
