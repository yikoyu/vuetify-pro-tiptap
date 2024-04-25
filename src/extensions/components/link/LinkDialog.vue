<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { Editor } from '@tiptap/vue-3'

import type { LinkAttrs } from './types'

import { getIcon } from '@/constants/icons'
import { useLocale } from '@/locales'

interface Props {
  value?: string
  target?: '_self' | '_blank'
  rel?: string
  editor: Editor
  destroy?: () => void
}

const props = withDefaults(defineProps<Props>(), {
  value: undefined,
  target: '_blank',
  rel: undefined,
  destroy: undefined
})

const { t } = useLocale()

const generateLinkAttrs = (): LinkAttrs => ({
  href: '',
  target: '_blank',
  rel: ''
})

const attrs = ref(generateLinkAttrs())

const dialog = ref<boolean>(false)

const isDisabled = computed(() => {
  const { href, target, rel } = attrs.value
  if (!href) return true

  return props.value === href && props.target === target && props.rel === rel
})

function apply() {
  const { href, target, rel } = attrs.value

  if (href) {
    props.editor.chain().focus().extendMarkRange('link').setLink({ href, target, rel }).run()
  }
  close()
}

function close() {
  dialog.value = false
  attrs.value = generateLinkAttrs()

  setTimeout(() => props.destroy?.(), 300)
}

watch(dialog, val => {
  if (!val) return

  attrs.value = {
    href: props.value,
    target: props.target,
    rel: props.rel
  }
})
</script>

<template>
  <VDialog v-model="dialog" max-width="400" activator="parent" @click:outside="close">
    <VCard>
      <VToolbar class="px-6" density="compact">
        <span class="headline">{{ t('editor.link.dialog.title') }}</span>

        <VSpacer />

        <VBtn class="mx-0" icon @click="close">
          <VIcon :icon="getIcon('close')" />
        </VBtn>
      </VToolbar>

      <VCardText>
        <VTextField v-model="attrs.href" :label="t('editor.link.dialog.link')" autofocus />

        <VTextField v-model="attrs.rel" :label="t('editor.link.dialog.rel')" hide-details />

        <VCheckbox
          v-model="attrs.target"
          :label="t('editor.link.dialog.openInNewTab')"
          color="primary"
          false-value="_self"
          true-value="_blank"
          hide-details
        />
      </VCardText>

      <VCardActions>
        <VBtn :disabled="isDisabled" @click="apply">
          {{ t('editor.link.dialog.button.apply') }}
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>
