<script setup lang="ts">
import { computed, unref } from 'vue'

interface Props {
  modelValue: {
    [x: string]: string
  }
}

interface Emits {
  (event: 'update:modelValue', modelValue: Props['modelValue']): void
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: () => ({})
})
const emits = defineEmits<Emits>()

const customLang = computed({
  get: () => props.modelValue,
  set: val => {
    emits('update:modelValue', val)
  }
})
const customLangKey = computed(() => Object.keys(unref(customLang)))
</script>

<template>
  <v-card class="mt-2">
    <v-card-title>Custom Lang</v-card-title>
    <v-card-text>
      <v-row>
        <v-col v-for="key in customLangKey" :key="key" :cols="12" :sm="6" :md="4" :lg="3">
          <v-text-field v-model="customLang[key]" :label="key"></v-text-field>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
