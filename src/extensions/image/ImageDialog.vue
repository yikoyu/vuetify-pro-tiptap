<script setup lang="ts">
import { computed, onMounted, ref, unref, watchEffect } from 'vue'
import { mdiClose } from '@/constants/icons'
import { useLocale } from '@/locales'
import type { Editor } from '@tiptap/vue-3'
import type { ImageAttrsOptions, ImageForm, ImageTab, ImageTabKey } from './types'

import ImageUpload from './ImageUpload.vue'
import ImageUrl from './ImageUrl.vue'

interface Props {
  value?: ImageAttrsOptions
  editor: Editor
  show?: boolean
  dark?: boolean
  upload?: (file: File) => Promise<string>
  imageTabs?: ImageTab[]
  hiddenTabs?: ImageTabKey[]
  destroy?: () => void
}

const props = withDefaults(defineProps<Props>(), {
  value: () => ({}),
  show: false,
  dark: false,
  upload: undefined,
  imageTabs: () => [],
  hiddenTabs: () => [],
  destroy: undefined
})

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

  setTimeout(() => props.destroy?.(), 300)
}

onMounted(() => {
  form.value = {
    ...unref(form),
    ...props.value
  }
})
</script>

<template>
  <VDialog v-model="dialog" :dark="dark" max-width="400" @click:outside="close">
    <VCard>
      <VToolbar class="px-6" density="compact">
        <span class="headline">{{ t('editor.image.dialog.title') }}</span>
        <VSpacer />

        <VBtn class="mx-0" icon @click="close">
          <VIcon>{{ mdiClose }}</VIcon>
        </VBtn>
      </VToolbar>

      <VTabs v-model="tab">
        <VTab v-for="(imageTab, i) in defaultImageTabs" :key="i" :value="i">
          {{ imageTab.name }}
        </VTab>
      </VTabs>

      <VCardText>
        <VWindow v-model="tab">
          <VWindowItem v-for="(imageTab, i) in defaultImageTabs" :key="i" :value="i">
            <component :is="imageTab.component" v-model="form" :upload="upload" :t="t" />
          </VWindowItem>
        </VWindow>
      </VCardText>

      <VCardActions>
        <VBtn text :disabled="disabledApply" @click="apply">
          {{ t('editor.image.dialog.button.apply') }}
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>
