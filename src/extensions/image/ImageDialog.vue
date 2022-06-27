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
import type { ImageForm, ImageTab, ImageTabKey, ImageAttrsOptions } from './types'

import ImageUrl from './ImageUrl.vue'
import ImageUpload from './ImageUpload.vue'

export default defineComponent({
  components: {
    ImageUrl,
    ImageUpload
  },
  props: {
    value: object<ImageAttrsOptions>().def({}),
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
      root.$destroy()
      root.$el.parentNode?.removeChild(root.$el)
    }

    onMounted(() => {
      form.value = {
        ...unref(form),
        ...props.value
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
