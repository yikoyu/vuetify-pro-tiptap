<script setup lang="ts">
import type { Editor } from '@tiptap/vue-3'
import { computed, ref, watch } from 'vue'
import { locale } from 'vuetify-pro-tiptap'

interface LinkAttrs {
  href?: string
  target?: '_self' | '_blank'
}

interface Props {
  value?: string
  target?: '_self' | '_blank'
  editor: Editor
  destroy?: () => void
}

const props = withDefaults(defineProps<Props>(), {
  value: undefined,
  target: '_blank',
  destroy: undefined,
})

function generateLinkAttrs(): LinkAttrs {
  return {
    href: '',
    target: '_blank',
  }
}

const attrs = ref(generateLinkAttrs())

const dialog = ref<boolean>(false)

const isDisabled = computed(() => {
  const { href, target } = attrs.value
  if (!href)
    return true

  return props.value === href && props.target === target
})

function apply() {
  const { href, target } = attrs.value

  if (href) {
    props.editor.chain().focus().extendMarkRange('link').setLink({ href, target }).run()
  }
  close()
}

function close() {
  dialog.value = false
  attrs.value = generateLinkAttrs()

  setTimeout(() => props.destroy?.(), 300)
}

watch(dialog, (val) => {
  if (!val)
    return

  attrs.value = {
    href: props.value,
    target: props.target,
  }
})
</script>

<template>
  <VDialog v-model="dialog" max-width="400" activator="parent" @click:outside="close">
    <VCard>
      <VToolbar class="px-6" density="compact">
        <span class="headline">{{ locale.message[locale.lang]['editor.link.dialog.title'] }}</span>

        <VSpacer />

        <VBtn class="mx-0" icon @click="close">
          <VIcon icon="$close" />
        </VBtn>
      </VToolbar>

      <VCardText>
        <div>This is a custom dialog component;</div>

        <div>please use the <strong>dialogComponent</strong> parameter.</div>

        <VTextField v-model="attrs.href" :label="locale.message[locale.lang]['editor.link.dialog.link']" autofocus />
      </VCardText>

      <VCardActions>
        <VBtn :disabled="isDisabled" @click="apply">
          {{ locale.message[locale.lang]['editor.link.dialog.button.apply'] }}
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>
