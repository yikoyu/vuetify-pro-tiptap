<script setup lang="ts">
import type { Editor } from '@tiptap/vue-3'
import { getIcon } from '@/constants/icons'
import { useEval } from '@/hooks/use-eval'
import { useLocale } from '@/locales'
import { computed, ref, unref, watchEffect } from 'vue'

interface Props {
  value?: string
  editor: Editor
  destroy?: () => void
  hrefRules?: string
}

const props = withDefaults(defineProps<Props>(), {
  value: undefined,
  destroy: undefined,
  hrefRules: ''
})

const { t } = useLocale()

const url = ref<string>('')

const dialog = ref<boolean>(false)
const form = ref()
const { evalHrefRules } = useEval(['hrefRules'], props)

const isDisabled = computed(() => {
  if (props.value === url.value) return true
  if (!unref(url)) return true
  return false
})

async function apply() {
  const { valid } = await form.value.validate()

  if (!valid) return

  if (unref(url)) {
    props.editor.chain().focus().setVideo({ src: url.value }).run()
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
        <span class="headline">{{ t('editor.video.dialog.title') }}</span>

        <VSpacer />

        <VBtn class="mx-0" icon @click="close">
          <VIcon :icon="getIcon('close')" />
        </VBtn>
      </VToolbar>

      <v-form ref="form" @submit.prevent="apply">
        <VCardText>
          <vx-field v-model="url" :rules="evalHrefRules" :label="t('editor.video.dialog.link')" autofocus />
        </VCardText>

        <VCardActions>
          <VBtn :disabled="isDisabled" type="submit" class="ml-auto">
            {{ t('editor.video.dialog.button.apply') }}
          </VBtn>
        </VCardActions>
      </v-form>
    </VCard>
  </VDialog>
</template>
