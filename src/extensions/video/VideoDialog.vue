<script setup lang="ts">
import { ref, unref, computed, watchEffect } from 'vue-demi'
import type { Editor } from '@tiptap/vue-2'
import { useLocale } from '@/locales'
import { mdiClose } from '@/constants/icons'
import useContext from '@/hooks/use-context'

interface VideoDialogProps {
  editor: Editor
  value?: string
  show?: boolean
  dark?: boolean
}

const props = withDefaults(defineProps<VideoDialogProps>(), {
  show: false,
  dark: false
})

const root = useContext()

const { t } = useLocale()
const url = ref<string>('')

const dialog = ref<boolean>(false)

watchEffect(() => (dialog.value = props.show))

const isDisabled = computed(() => {
  if (props.value === url.value) return true
  if (!unref(url)) return true
  return false
})

function apply() {
  if (unref(url)) {
    props.editor.chain().focus().setIframe({ src: url.value }).run()
  }
  close()
}

function close() {
  dialog.value = false

  if (!root) return

  setTimeout(() => {
    root.$destroy()
    root.$el.parentNode?.removeChild(root.$el)
  }, 300)
}
</script>

<template>
  <v-dialog v-model="dialog" :dark="dark" max-width="400" @click:outside="close">
    <v-card>
      <v-card-title>
        <span class="headline">{{ t('editor.video.dialog.title') }}</span>

        <v-spacer />

        <v-btn icon @click="close">
          <v-icon>{{ mdiClose }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text>
        <v-text-field :value="value" @input="url = $event" :label="t('editor.video.dialog.link')" hide-details autofocus />
      </v-card-text>

      <v-card-actions>
        <v-btn :disabled="isDisabled" text @click="apply">
          {{ t('editor.video.dialog.button.apply') }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
