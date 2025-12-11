<script lang="ts" setup>
import ActionButton from '../src/index.vue'
import { extActionButtonProps } from '../src/props'

const props = defineProps(extActionButtonProps)

const items: ['outdent', 'indent'] = ['outdent', 'indent']
const commands = {
  indent: 'sinkListItem',
  outdent: 'liftListItem',
} as const

function action(item: 'outdent' | 'indent') {
  if (item === 'indent')
    props.editor.chain().focus().sinkListItem('listItem').run()
  if (item === 'outdent')
    props.editor.chain().focus().liftListItem('listItem').run()
}
</script>

<template>
  <ActionButton
    v-for="item in items"
    :key="item"
    :editor="editor"
    :action="() => action(item)"
    :is-active="() => false"
    :disabled="!editor.can()[commands[item]]('listItem')"
    :tooltip="t(`editor.${item}.tooltip`)"
    :icon="item"
  />
</template>

<!-- <style lang="scss" scoped></style> -->
