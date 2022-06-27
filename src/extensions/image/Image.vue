<template>
  <node-view-wrapper as="div" :class="imageViewClass" :style="imageMaxStyle">
    <div
      draggable="true"
      data-drag-handle
      :class="{
        'image-view__body--focused': selected,
        'image-view__body--resizing': resizing
      }"
      class="image-view__body"
      :style="imageMaxStyle"
    >
      <img @load="onImageLoad" @click="selectImage" :src="src" :alt="alt" :width="width" :height="height" class="image-view__body__image" />

      <div v-if="editor.view.editable" v-show="selected || resizing" class="image-resizer">
        <span
          v-for="direction in resizeDirections"
          :key="direction"
          :class="`image-resizer__handler--${direction}`"
          class="image-resizer__handler"
          @mousedown="onMouseDown($event, direction)"
        ></span>
      </div>
    </div>
  </node-view-wrapper>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, onUnmounted, ref, unref } from '@vue/composition-api'
import { NodeViewWrapper } from '@tiptap/vue-2'
import { nodeViewProps } from '@/utils/node-view-props'
import { bool } from 'vue-types'
import throttle from 'lodash.throttle'
import { ImageAttrsOptions } from './types'

function clamp(val: number, min: number, max: number) {
  if (val < min) return min
  if (val > max) return max
  return val
}

const ResizeDirection = {
  TOP_LEFT: 'tl',
  TOP_RIGHT: 'tr',
  BOTTOM_LEFT: 'bl',
  BOTTOM_RIGHT: 'br'
}

const MIN_SIZE = 20
const MAX_SIZE = 100000
const THROTTLE_WAIT_TIME = 16

export default defineComponent({
  components: {
    NodeViewWrapper
  },
  props: {
    ...nodeViewProps,
    selected: bool().isRequired
  },
  setup(props) {
    const maxSize = ref({
      width: MAX_SIZE,
      height: MAX_SIZE
    })

    const originalSize = ref({
      width: 0,
      height: 0
    })

    const resizeDirections = ref<string[]>([ResizeDirection.TOP_LEFT, ResizeDirection.TOP_RIGHT, ResizeDirection.BOTTOM_LEFT, ResizeDirection.BOTTOM_RIGHT])

    const resizing = ref<boolean>(false)

    const resizerState = ref({
      x: 0,
      y: 0,
      w: 0,
      h: 0,
      dir: ''
    })

    const src = computed<ImageAttrsOptions['src']>(() => props.node.attrs.src || undefined)
    const alt = computed<ImageAttrsOptions['alt']>(() => props.node.attrs.alt || undefined)
    const width = computed<ImageAttrsOptions['width']>(() => props.node.attrs.width || undefined)
    const height = computed<ImageAttrsOptions['height']>(() => props.node.attrs.height || undefined)
    const display = computed<ImageAttrsOptions['display']>(() => props.node.attrs.display || undefined)
    const lockAspectRatio = computed<ImageAttrsOptions['lockAspectRatio']>(() => props.node.attrs.lockAspectRatio ?? true)
    const imageViewClass = computed<string[]>(() => {
      if (typeof unref(display) === 'string') {
        return ['image-view', `image-view--${unref(display)}`]
      }

      return ['image-view']
    })
    const imageMaxStyle = computed(() => ({ width: unref(width) === '100%' ? unref(width) : undefined }))

    function onImageLoad(e: Record<string, any>) {
      originalSize.value = {
        width: e.target.width,
        height: e.target.height
      }
    }

    // https://github.com/scrumpy/tiptap/issues/361#issuecomment-540299541
    function selectImage() {
      const { editor, getPos } = props
      editor.commands.setNodeSelection(getPos())
    }

    /* invoked when window or editor resize */
    const getMaxSize = throttle(function () {
      const { editor } = props
      const { width } = getComputedStyle(editor.view.dom)
      maxSize.value.width = parseInt(width, 10)
    }, THROTTLE_WAIT_TIME)

    /* on resizer handler mousedown
     * record the position where the event is triggered and resize direction
     * calculate the initial width and height of the image
     */
    function onMouseDown(e: MouseEvent, dir: string) {
      e.preventDefault()
      e.stopPropagation()

      resizerState.value.x = e.clientX
      resizerState.value.y = e.clientY

      const originalWidth = unref(originalSize).width
      const originalHeight = unref(originalSize).height
      const aspectRatio = originalWidth / originalHeight

      let width = Number(props.node.attrs.width)
      let height = Number(props.node.attrs.height)
      const maxWidth = unref(maxSize).width

      if (width && !height) {
        width = width > maxWidth ? maxWidth : width
        height = Math.round(width / aspectRatio)
      } else if (height && !width) {
        width = Math.round(height * aspectRatio)
        width = width > maxWidth ? maxWidth : width
      } else if (!width && !height) {
        width = originalWidth > maxWidth ? maxWidth : originalWidth
        height = Math.round(width / aspectRatio)
      } else {
        width = width > maxWidth ? maxWidth : width
      }

      resizerState.value.w = width
      resizerState.value.h = height
      resizerState.value.dir = dir

      resizing.value = true

      onEvents()
    }

    const onMouseMove = throttle(function (e: MouseEvent) {
      e.preventDefault()
      e.stopPropagation()
      if (!unref(resizing)) return

      const { x, y, w, h, dir } = unref(resizerState)

      const dx = (e.clientX - x) * (/l/.test(dir) ? -1 : 1)
      const dy = (e.clientY - y) * (/t/.test(dir) ? -1 : 1)

      props.updateAttributes({
        width: clamp(w + dx, MIN_SIZE, unref(maxSize).width),
        height: unref(lockAspectRatio) ? null : Math.max(h + dy, MIN_SIZE)
      })
    }, THROTTLE_WAIT_TIME)

    function onMouseUp(e: MouseEvent) {
      e.preventDefault()
      e.stopPropagation()
      if (!unref(resizing)) return

      resizing.value = false

      resizerState.value = {
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        dir: ''
      }

      offEvents()
      selectImage()
    }

    function onEvents() {
      document?.addEventListener('mousemove', onMouseMove, true)
      document?.addEventListener('mouseup', onMouseUp, true)
    }

    function offEvents() {
      document?.removeEventListener('mousemove', onMouseMove, true)
      document?.removeEventListener('mouseup', onMouseUp, true)
    }

    const resizeOb: ResizeObserver = new ResizeObserver(() => getMaxSize())

    onMounted(() => {
      unref(resizeOb).observe(props.editor.view.dom)
    })

    onUnmounted(() => {
      unref(resizeOb).disconnect()
    })

    return {
      imageViewClass,
      imageMaxStyle,
      resizing,
      src,
      alt,
      width,
      height,
      resizeDirections,
      selectImage,
      onMouseDown,
      onImageLoad
    }
  }
})
</script>
