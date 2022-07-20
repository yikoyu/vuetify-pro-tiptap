<script setup lang="ts">
import { computed } from 'vue'

interface SelectImageProps {
  value?: Record<string, string>
}

interface SelectImageEmits {
  (event: 'input', form: Record<string, string>): void
}

const props = withDefaults(defineProps<SelectImageProps>(), {
  value: () => ({})
})

const emits = defineEmits<SelectImageEmits>()

const form = computed({
  get: () => props.value,
  set: val => emits('input', val)
})

const items = [
  { alt: 'Test 1', src: 'https://i.picsum.photos/id/1069/1920/1080.webp?hmac=cxjVzYK0ihh3VsIEKZ8FIfl6aGr19QO8yehQlPzoPeM' },
  { alt: 'Test 2', src: 'https://i.picsum.photos/id/90/1920/1080.webp?hmac=gxjDsn0a57jTpyPG9YRuDhW0YIo5DlqbRSRXpwSAVmw' },
  { alt: 'Test 3', src: 'https://i.picsum.photos/id/627/1920/1080.webp?hmac=N91GT9f0ZfCjx4mwrqPYHo-27d_0852EXonU54iCv6o' }
]
</script>

<template>
  <v-select v-model="form" label="Image" return-object :items="items" item-text="alt" item-value="src"></v-select>
</template>
