<script setup lang="ts">
import ImageLoadError from '@/extensions/components/image/ImageLoadError.vue'
import { nodeViewProps, NodeViewWrapper } from '@tiptap/vue-3'
import { ref } from 'vue'

const props = defineProps(nodeViewProps)
const loadError = ref(false)
const iframeRef = ref<HTMLIFrameElement | null>(null)

const onError = (err: any) => {
  console.error('Video iframe error:', err)
  loadError.value = true
}
</script>

<template>
  <NodeViewWrapper class="iframe-wrapper" data-video>
    <div
      :style="`position: relative; overflow: hidden; display: flex; flex: 1; max-width: ${props.HTMLAttributes.width};`"
    >
      <div :style="`flex: 1; padding-bottom: ${(9 / 16) * 100}%;`"></div>
      <div class="iframe-container">
        <ImageLoadError
          v-if="loadError || !props.HTMLAttributes.src"
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
          message="Video loading failed. Please check the URL or permissions."
        />
        <iframe
          v-else-if="!loadError"
          ref="iframeRef"
          :src="props.HTMLAttributes.src"
          :width="props.HTMLAttributes.width"
          :height="props.HTMLAttributes.height"
          :frameborder="props.HTMLAttributes.frameborder"
          :allowfullscreen="props.HTMLAttributes.allowfullscreen"
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
          @error="onError"
        ></iframe>
      </div>
    </div>
  </NodeViewWrapper>
</template>

<style scoped>
.iframe-wrapper {
  display: flex;
  justify-content: center;
}

.iframe-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
