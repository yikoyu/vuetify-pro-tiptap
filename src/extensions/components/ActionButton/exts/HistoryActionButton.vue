<script lang="ts" setup>
import ActionButton from '../src/index.vue'
import { extActionButtonProps } from '../src/props'

const props = defineProps(extActionButtonProps)

const historys: ['undo', 'redo'] = ['undo', 'redo']

function action(item: 'undo' | 'redo') {
  if (item === 'redo')
    props.editor.chain().focus().redo().run()
  if (item === 'undo')
    props.editor.chain().focus().undo().run()
}
</script>

<template>
  <ActionButton
    v-for="item in historys"
    :key="item"
    :editor="editor"
    :action="() => action(item)"
    :is-active="() => false"
    :disabled="!editor.can()[item]()"
    :tooltip="t(`editor.${item}.tooltip`)"
    :icon="item"
  />
</template>

<!-- <style lang="scss" scoped></style> -->
