<template>
  <v-dialog :dark="dark" :value="show" max-width="400">
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

<script lang="ts">
import { computed, defineComponent, ref, unref, onMounted } from '@vue/composition-api'
import { array, bool, func, object } from 'vue-types'
import type { Editor } from '@tiptap/vue-2'
import { useLocale } from '@/locales'
import { mdiClose, mdiLinkVariant, mdiText } from '@/constants/icons'
import type { ImageTab, ImageTabKey } from './types'

import ImageUrl from './ImageUrl.vue'
import ImageUpload from './ImageUpload.vue'

interface ImageAttributes {
  src?: string
  alt?: string
}

interface Form {
  src?: string
  alt?: string
  file?: File
}

export default defineComponent({
  components: {
    ImageUrl,
    ImageUpload
  },
  props: {
    value: object<ImageAttributes>().def({}),
    editor: object<Editor>().isRequired,
    show: bool().def(false),
    dark: bool().def(false),
    upload: func<(file: File) => Promise<string>>(),
    imageTabs: array<ImageTab>().def([]),
    hiddenTabs: array<ImageTabKey>().def([])
  },
  setup(props, { root }) {
    const { t } = useLocale()

    const tab = ref<boolean>(false)
    const form = ref<Form>({})

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
      const { src, alt } = unref(form)
      if (!src) return

      props.editor
        .chain()
        .focus()
        .setImage({ src, alt: alt ?? undefined })
        .run()

      close()
    }

    function close() {
      root.$destroy()
      root.$el.parentNode?.removeChild(root.$el)
    }

    onMounted(() => {
      const { src, alt } = props.value

      form.value = {
        ...unref(form),
        src: src ?? undefined,
        alt: alt ?? undefined
      }
    })

    return {
      mdiClose,
      mdiLinkVariant,
      mdiText,

      tab,
      defaultImageTabs,
      disabledApply,
      form,
      t,
      apply,
      close
    }
  }
})
</script>
