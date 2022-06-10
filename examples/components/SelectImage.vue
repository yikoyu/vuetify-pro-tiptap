<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'
import { object } from 'vue-types'

export default defineComponent({
  props: {
    value: object<Record<string, string>>().def({})
  },
  setup(props, { emit }) {
    const form = computed({
      get: () => props.value,
      set: val => emit('input', val)
    })

    return {
      form,
      items: [
        { alt: 'Test 1', src: 'https://i.picsum.photos/id/1069/1920/1080.webp?hmac=cxjVzYK0ihh3VsIEKZ8FIfl6aGr19QO8yehQlPzoPeM' },
        { alt: 'Test 2', src: 'https://i.picsum.photos/id/90/1920/1080.webp?hmac=gxjDsn0a57jTpyPG9YRuDhW0YIo5DlqbRSRXpwSAVmw' },
        { alt: 'Test 3', src: 'https://i.picsum.photos/id/627/1920/1080.webp?hmac=N91GT9f0ZfCjx4mwrqPYHo-27d_0852EXonU54iCv6o' }
      ]
    }
  }
})
</script>

<template>
  <v-select v-model="form" label="Image" return-object :items="items" item-text="alt" item-value="src"></v-select>
</template>
