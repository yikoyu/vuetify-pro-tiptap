<script setup lang="ts">
import { computed, unref, watch } from 'vue'

interface SelectImageProps {
  modelValue?: Record<string, string>
  upload?: (file: File) => Promise<string> // vue warn
  t: (path: string) => string // vue warn
}

interface SelectImageEmits {
  (event: 'update:modelValue', form?: Record<string, string>): void
}

const props = withDefaults(defineProps<SelectImageProps>(), {
  modelValue: () => ({}),
  upload: undefined,
})

const emits = defineEmits<SelectImageEmits>()

const form = computed({
  get: () => props.modelValue,
  set: (val) => {
    emits('update:modelValue', val)
  },
})

const items = [
  { alt: 'Test 1', src: 'https://picsum.photos/1920/1080.webp?t=1' },
  { alt: 'Test 2', src: 'https://picsum.photos/1920/1080.webp?t=2' },
  { alt: 'Test 3', src: 'https://picsum.photos/1920/1080.webp?t=3' },
]

watch(
  () => unref(form).src,
  (val) => {
    const find = items.find(k => k.src === val)
    if (find) {
      form.value.alt = find.alt
    }
  },
)
</script>

<template>
  <VAlert class="mb-4" type="info" text="Select tab is custom component" />

  <VSelect v-model="form.src" label="Select Image" :items="items" item-value="src" item-title="alt" />

  <VTextField v-model="form.alt" label="Alt" />

  <VCheckbox v-model="form.lockAspectRatio" label="Lock original aspect ratio" />
</template>
