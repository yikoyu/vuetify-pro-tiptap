<!--
  * @Date: 2023-06-14 21:43:39
  * @LastEditors: yikoyu 2282373181@qq.com
  * @LastEditTime: 2023-06-14 23:11:42
  * @FilePath: \vuetify-pro-tiptap\examples\components\CustomLang.vue
-->
<script setup lang="ts">
import { computed, unref } from 'vue'

interface Props {
  modelValue?: {
    [x: string]: string
  }
}

interface Emits {
  (event: 'update:modelValue', modelValue: Props['modelValue']): void
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: () => ({}),
})
const emits = defineEmits<Emits>()

const customLang = computed({
  get: () => props.modelValue,
  set: (val) => {
    emits('update:modelValue', val)
  },
})
const customLangKey = computed(() => Object.keys(unref(customLang)))
</script>

<template>
  <VCard class="mt-2">
    <VCardTitle>Custom Lang</VCardTitle>

    <VCardText>
      <VRow>
        <VCol v-for="key in customLangKey" :key="key" :cols="12" :sm="6" :md="4" :lg="3">
          <VTextField v-model="customLang[key]" :label="key" />
        </VCol>
      </VRow>
    </VCardText>
  </VCard>
</template>
