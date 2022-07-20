<script setup lang="ts">
import { computed, ref, unref, onMounted, watchEffect } from 'vue-demi'
import type { Editor } from '@tiptap/vue-2'
import { useLocale } from '@/locales'
import { mdiClose } from '@/constants/icons'
import useContext from '@/hooks/use-context'
import type { ImageForm, ImageTab, ImageTabKey, ImageAttrsOptions } from './types'

import ImageUrl from './ImageUrl.vue'
import ImageUpload from './ImageUpload.vue'

interface ImageDialogProps {
  editor: Editor
  value?: ImageAttrsOptions
  show?: boolean
  dark?: boolean
  upload?: (file: File) => Promise<string>
  imageTabs?: ImageTab[]
  hiddenTabs?: ImageTabKey[]
}

const props = withDefaults(defineProps<ImageDialogProps>(), {
  value: () => ({}),
  show: false,
  dark: false,
  imageTabs: () => [],
  hiddenTabs: () => []
})

const root = useContext()

const { t } = useLocale()

const dialog = ref<boolean>(false)

watchEffect(() => (dialog.value = props.show))

const tab = ref<boolean>(false)
const form = ref<ImageForm>({})

const defaultImageTabs = computed<ImageTab[]>(() => {
  const defTabs: ImageTab[] = [
    {
      name: unref(t)('editor.image.dialog.tab.url'),
      type: 'url',
      component: ImageUrl
    },
    {
      name: unref(t)('editor.image.dialog.tab.upload'),
      type: 'upload',
      component: ImageUpload
    }
  ]

  const filterDefTabs = defTabs.filter(item => {
    if (!item.type) return item
    return !props.hiddenTabs.includes(item.type)
  })

  return [...filterDefTabs, ...props.imageTabs]
})

const disabledApply = computed<boolean>(() => {
  const { src } = unref(form)
  if (typeof src === 'string' && src !== '') return false
  return true
})

async function apply() {
  const { src, lockAspectRatio, height } = unref(form)
  if (!src) return

  props.editor
    .chain()
    .focus()
    .setImage({
      ...unref(form),
      src,
      height: lockAspectRatio ? undefined : height
    })
    .run()

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

onMounted(() => {
  form.value = {
    ...unref(form),
    ...props.value
  }
})
</script>

<template>
  <v-dialog v-model="dialog" :dark="dark" max-width="400" @click:outside="close">
    <v-card>
      <v-card-title>
        <span class="headline">{{ t('editor.image.dialog.title') }}</span>
        <v-spacer />

        <v-btn icon @click="close">
          <v-icon>{{ mdiClose }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-tabs v-model="tab">
        <template v-for="(imageTab, i) in defaultImageTabs">
          <v-tab :key="'tab-' + i">
            {{ imageTab.name }}
          </v-tab>

          <v-tab-item :key="'tab-item-' + i">
            <v-card-text>
              <component :is="imageTab.component" v-model="form" :upload="upload" :t="t" />
            </v-card-text>
          </v-tab-item>
        </template>
      </v-tabs>

      <v-card-actions>
        <v-btn text @click="apply" :disabled="disabledApply">
          {{ t('editor.image.dialog.button.apply') }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
