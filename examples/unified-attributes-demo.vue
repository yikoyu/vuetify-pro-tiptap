<script setup lang="ts">
import { ref } from "vue";

// 基本属性配置
const extensions1 = ref([
  {
    name: "HtmlView",
    options: {
      divider: true,
      // 全局属性配置 - 只允许基本属性
      allowedAttributes: ["class", "style", "id"],
    },
  },
  { name: "Bold" },
  { name: "Italic" },
  { name: "Underline" },
  { name: "Strike" },
  { name: "Code", options: { divider: true } },
  { name: "Heading" }, // 会继承 HtmlView 的 allowedAttributes
  { name: "TextAlign", options: { types: ["heading", "paragraph", "image"] } },
  { name: "FontFamily" },
  { name: "FontSize" },
  { name: "Color" },
  { name: "Highlight", options: { divider: true } },
  { name: "BulletList" },
  { name: "OrderedList", options: { divider: true } },
  { name: "Indent", options: { divider: true } },
  { name: "Link", options: { divider: true } },
  { name: "Image" },
  { name: "Video", options: { divider: true } },
  { name: "Blockquote" }, // 会继承 HtmlView 的 allowedAttributes
  { name: "HorizontalRule" },
  { name: "CodeBlock", options: { divider: true } },
  { name: "Clear" },
  { name: "History", options: { divider: true } },
]);

// 扩展属性配置
const extensions2 = ref([
  {
    name: "HtmlView",
    options: {
      divider: true,
      // 全局属性配置 - 允许更多属性类型
      allowedAttributes: [
        "class",
        "style",
        "id",
        "data-testid",
        "data-role",
        "title",
        "aria-label",
      ],
    },
  },
  { name: "Bold" },
  { name: "Italic" },
  { name: "Underline" },
  { name: "Strike" },
  { name: "Code", options: { divider: true } },
  { name: "Heading" }, // 会继承 HtmlView 的 allowedAttributes
  { name: "TextAlign", options: { types: ["heading", "paragraph", "image"] } },
  { name: "FontFamily" },
  { name: "FontSize" },
  { name: "Color" },
  { name: "Highlight", options: { divider: true } },
  { name: "BulletList" },
  { name: "OrderedList", options: { divider: true } },
  { name: "Indent", options: { divider: true } },
  { name: "Link", options: { divider: true } },
  { name: "Image" },
  { name: "Video", options: { divider: true } },
  { name: "Blockquote" }, // 会继承 HtmlView 的 allowedAttributes
  { name: "HorizontalRule" },
  { name: "CodeBlock", options: { divider: true } },
  { name: "Clear" },
  { name: "History", options: { divider: true } },
]);

const content1 = ref(`<h2>基本属性测试</h2>
<p>这个编辑器只允许 class、style、id 属性。</p>
<h3 class="test-class" style="color: blue;">带样式的标题</h3>
<blockquote class="quote" style="border-left: 4px solid #ccc; padding-left: 16px;">
这是一个引用块，可以在 HTML 视图中添加 class 和 style 属性。
</blockquote>`);

const content2 = ref(`<h2>扩展属性测试</h2>
<p>这个编辑器允许更多属性类型，包括 data-* 和 aria-* 属性。</p>
<h3 class="enhanced-title" data-testid="main-title" aria-label="主标题" style="color: green;">增强的标题</h3>
<blockquote class="enhanced-quote" data-role="quote" title="重要引用" style="border-left: 4px solid #4caf50; padding-left: 16px; background: #f1f8e9;">
这是一个支持更多属性的引用块，在 HTML 视图中可以添加 data-testid、aria-label 等属性。
</blockquote>`);
</script>

<template>
  <VApp id="app">
    <VContainer>
      <VLocaleProvider locale="zhHans">
        <h1>Unified Attributes Management Demo</h1>
        <p>
          这个演示展示了统一的属性管理系统。通过 HtmlView 扩展的
          allowedAttributes 配置， 可以全局控制所有其他扩展（如
          Heading、Blockquote）允许的 HTML 属性。
        </p>

        <h3>示例1：允许基本属性 (class, style, id)</h3>
        <div class="border-thin mb-4">
          <vx-tiptap-editor
            v-model="content1"
            label=""
            :min-height="200"
            :max-height="365"
            :hide-bubble="true"
            :extensions="extensions1"
            :disabled="false"
            :readonly="false"
          />
        </div>
        <pre class="content-preview">{{ content1 }}</pre>

        <h3 class="mt-6">示例2：允许扩展属性 (包含 data-* 属性)</h3>
        <div class="border-thin mb-4">
          <vx-tiptap-editor
            v-model="content2"
            label=""
            :min-height="200"
            :max-height="365"
            :hide-bubble="true"
            :extensions="extensions2"
            :disabled="false"
            :readonly="false"
          />
        </div>
        <pre class="content-preview">{{ content2 }}</pre>

        <h3 class="mt-4">使用说明：</h3>
        <ol>
          <li>输入文本并转换为标题或引用块</li>
          <li>
            切换到 HTML 视图，手动添加属性（如 class、style、data-testid 等）
          </li>
          <li>切换回富文本视图 - 属性应该被保留</li>
          <li>比较两个编辑器的不同：第二个编辑器允许更多的属性类型</li>
        </ol>
      </VLocaleProvider>
    </VContainer>
  </VApp>
</template>

<style scoped>
.content-preview {
  background: #f5f5f5
  padding: 16px
  border-radius: 4px
  font-family: monospace
  font-size: 12px
  white-space: pre-wrap
  word-break: break-all
  max-height: 150px
  overflow-y: auto
}

.border-thin {
  border: 1px solid #ddd
  border-radius: 4px
}
</style>
