import type { GeneralOptions } from "@/type";
import type { Editor } from "@tiptap/core";
import { Extension } from "@tiptap/core";
import ActionButton from "./components/ActionButton.vue";

export interface HtmlViewOptions extends GeneralOptions<HtmlViewOptions> {}

// Helper functions outside the extension
function createOverlay(editor: Editor) {
  // 获取编辑器DOM元素
  const editorElement = editor.view.dom;
  const editorParent = editorElement.parentElement;

  if (!editorParent) return null;

  // 创建覆盖容器
  const overlay = document.createElement("div");
  overlay.className = "tiptap-html-overlay";
  overlay.style.position = "absolute";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.backgroundColor = "#f8f9fa";
  overlay.style.zIndex = "10";
  overlay.style.overflow = "auto";
  overlay.style.display = "flex";
  overlay.style.flexDirection = "column";
  overlay.style.boxSizing = "border-box";
  overlay.style.border = "1px solid #ddd";

  // 创建HTML编辑区域
  const textarea = document.createElement("textarea");
  textarea.className = "tiptap-html-editor";
  textarea.style.width = "100%";
  textarea.style.height = "100%";
  textarea.style.padding = "12px";
  textarea.style.border = "none";
  textarea.style.resize = "none";
  textarea.style.fontFamily = "monospace";
  textarea.style.fontSize = "14px";
  textarea.style.backgroundColor = "transparent";
  textarea.style.flex = "1";
  textarea.style.outline = "none";
  textarea.style.color = "#333";

  // 将HTML内容设置到文本区域
  const currentContent = editor.getHTML();

  // 保存原始内容以便稍后恢复
  editor.storage.htmlView.editorContent = currentContent;

  // 格式化HTML内容
  const formattedHtml = formatHtml(currentContent);
  textarea.value = formattedHtml;

  // 保存格式化后的HTML内容
  editor.storage.htmlView.htmlContent = formattedHtml;

  // 将编辑区域添加到覆盖层
  overlay.appendChild(textarea);

  // 将覆盖层添加到编辑器父容器
  editorParent.style.position = "relative";
  editorParent.appendChild(overlay);

  // 聚焦到HTML编辑区域
  setTimeout(() => {
    textarea.focus();
    console.log("Switched to HTML view mode");
  }, 10);

  // 添加输入事件来实时更新存储的HTML内容和编辑器内容
  textarea.addEventListener("input", () => {
    // 更新存储的HTML内容
    editor.storage.htmlView.htmlContent = textarea.value;

    // 实时同步到富文本编辑器，但不影响HTML编辑体验
    try {
      // 标记更新来源为HTML编辑器
      editor.storage.htmlView.isUpdatingFromHTML = true;

      // 解析HTML内容
      const parsedHtml = parseHtml(textarea.value);

      // 使用commands API更新编辑器内容
      editor.commands.setContent(parsedHtml, false);

      // 确保编辑器状态更新并触发v-model更新
      // 这是关键：手动触发更新事件确保v-model正确同步
      const tr = editor.state.tr;
      tr.setMeta("preventUpdate", false);
      tr.setMeta("addToHistory", false);
      editor.view.dispatch(tr);

      // 关键：手动触发更新事件，确保v-model同步
      if (editor.options.onUpdate) {
        editor.options.onUpdate({
          editor,
          transaction: tr,
        });
      }
    } catch (error) {
      console.error("Error syncing HTML to editor:", error);
    } finally {
      // 延迟一帧后重置标志位，确保更新完成
      requestAnimationFrame(() => {
        editor.storage.htmlView.isUpdatingFromHTML = false;
      });
    }
  });

  return overlay;
}

// 格式化HTML内容 (美化和转义)
function formatHtml(html: string) {
  // 移除可能存在的tiptap-html-* 相关标签
  const cleanContent = html
    .replace(/<div class="tiptap-html-overlay"[^>]*>[\s\S]*?<\/div>/gi, "")
    .replace(
      /<textarea class="tiptap-html-editor"[^>]*>[\s\S]*?<\/textarea>/gi,
      "",
    );

  // 这里可以添加更多代码来美化HTML
  return cleanContent;
}

// 解析HTML内容 (从编辑状态恢复)
function parseHtml(html: string) {
  // 移除可能存在的标签，以防意外
  const cleanContent = html
    .replace(/<div class="tiptap-html-overlay"[^>]*>[\s\S]*?<\/div>/gi, "")
    .replace(
      /<textarea class="tiptap-html-editor"[^>]*>[\s\S]*?<\/textarea>/gi,
      "",
    );

  return cleanContent;
}

// 找到编辑器工具栏，为所有按钮添加禁用状态
function disableAllToolbarButtons(editor: Editor) {
  try {
    // 创建或获取全局标志，用于禁用所有工具栏按钮
    if ((window as any).tiptapGlobalState === undefined) {
      (window as any).tiptapGlobalState = {};
    }

    // 设置全局状态表示HTML模式已激活
    (window as any).tiptapGlobalState.htmlModeActive = true;

    // 手动触发工具栏更新（如果有重新渲染机制）
    const event = new CustomEvent("tiptap-html-mode-changed", {
      detail: { isHtmlMode: true },
    });
    document.dispatchEvent(event);

    // 给编辑器容器添加类名，触发CSS禁用
    const editorContainer = document.querySelector(".vuetify-pro-tiptap");
    if (editorContainer) {
      editorContainer.classList.add("html-view-active");
    }

    // 再次直接操作DOM，强制找到并标记HTML按钮
    setTimeout(() => {
      // 尝试通过多种方式找到HTML按钮
      // 1. 通过SVG路径
      const buttons = document.querySelectorAll(".v-toolbar button");
      buttons.forEach((btn) => {
        const svg = btn.querySelector(".v-icon svg");
        if (svg) {
          const path = svg.querySelector("path");
          const d = path?.getAttribute("d") || "";
          // 匹配常见的code图标路径
          if (
            d.includes(
              "M12,17.56L16.07,16.43L16.62,10.33H9.38L9.2,8.3H16.8L17,6.31H7L7.56,12.32H14.45L14.22,14.9L12,15.5L9.78,14.9L9.64,13.24H7.64L7.93,16.43L12,17.56M4.07,3H19.93L18.5,19.2L12,21L5.5,19.2L4.07,3Z",
            )
          ) {
            btn.setAttribute("data-htmlview-btn", "true");
            // 确保这个按钮完全可点击
            (btn as HTMLElement).style.pointerEvents = "auto";
            (btn as HTMLElement).style.opacity = "1";
            (btn as HTMLElement).style.cursor = "pointer";
            (btn as HTMLElement).style.backgroundColor =
              "rgba(25, 118, 210, 0.12)";
            (btn as HTMLElement).style.zIndex = "10000";
            btn.removeAttribute("disabled");
          } else {
            // 确保所有其他按钮不可点击
            (btn as HTMLElement).style.pointerEvents = "none";
            (btn as HTMLElement).style.opacity = "0.4";
            (btn as HTMLElement).style.cursor = "not-allowed";
            btn.setAttribute("disabled", "true");
          }
        }
      });
    }, 50);

    console.log("所有编辑器工具已禁用");
  } catch (error) {
    console.error("禁用工具栏按钮失败:", error);
  }
}

// 恢复编辑器工具栏按钮状态
function enableAllToolbarButtons(editor: Editor) {
  try {
    // 更新全局状态
    if ((window as any).tiptapGlobalState !== undefined) {
      (window as any).tiptapGlobalState.htmlModeActive = false;
    }

    // 触发自定义事件通知工具栏更新
    const event = new CustomEvent("tiptap-html-mode-changed", {
      detail: { isHtmlMode: false },
    });
    document.dispatchEvent(event);

    // 移除编辑器容器的禁用类名
    const editorContainer = document.querySelector(".vuetify-pro-tiptap");
    if (editorContainer) {
      editorContainer.classList.remove("html-view-active");
    }

    // 直接找到并重置所有按钮
    const buttons = document.querySelectorAll(".v-toolbar button");
    buttons.forEach((btn) => {
      // 删除disabled属性
      btn.removeAttribute("disabled");
      btn.removeAttribute("aria-disabled");

      // 重置样式
      if (btn instanceof HTMLElement) {
        btn.style.pointerEvents = "";
        btn.style.opacity = "";
        btn.style.backgroundColor = "";
        btn.style.cursor = "";
        btn.style.zIndex = "";
        btn.style.position = "";
        btn.style.border = "";

        // 移除事件阻止
        btn.onclick = null;
      }
    });

    console.log("所有编辑器工具已启用");
  } catch (error) {
    console.error("启用工具栏按钮失败:", error);
  }
}

// 激活HTML视图模式
function activateHtmlMode(editor: Editor) {
  try {
    // 禁用其他所有插件/功能
    const extensions = editor.extensionManager.extensions;
    for (const extension of extensions) {
      // 跳过HTML视图插件本身
      if (extension.name === "htmlView") continue;

      // 临时禁用其他插件
      if (extension.options && typeof extension.options.enable === "boolean") {
        // 保存当前状态以便恢复
        if (!editor.storage.htmlView.disabledExtensions) {
          editor.storage.htmlView.disabledExtensions = {};
        }
        editor.storage.htmlView.disabledExtensions[extension.name] =
          extension.options.enable;
        extension.options.enable = false;
      }
    }

    // 禁用工具栏上的所有按钮
    disableAllToolbarButtons(editor);

    // 创建覆盖层并保存引用
    const overlay = createOverlay(editor);
    if (overlay) {
      editor.storage.htmlView.overlayElement = overlay;
      editor.storage.htmlView.isHtmlMode = true;

      // 添加样式到编辑器容器，指示当前处于HTML模式
      const editorElement = editor.view.dom;
      if (editorElement.parentElement) {
        editorElement.parentElement.classList.add("html-view-mode");
      }
    }
  } catch (error) {
    console.error("Failed to switch to HTML view:", error);
  }
}

// 停用HTML视图模式并应用更改
function deactivateHtmlMode(editor: Editor) {
  try {
    // 获取更新后的HTML内容
    const htmlContent = editor.storage.htmlView.htmlContent;

    // 移除覆盖层
    if (editor.storage.htmlView.overlayElement) {
      editor.storage.htmlView.overlayElement.remove();
      editor.storage.htmlView.overlayElement = null;
    }

    // 启用所有工具栏按钮
    enableAllToolbarButtons(editor);

    // 移除HTML模式指示样式
    const editorElement = editor.view.dom;
    if (editorElement.parentElement) {
      editorElement.parentElement.classList.remove("html-view-mode");
    }

    // 如果有HTML内容，将其应用到编辑器
    if (htmlContent && htmlContent.trim() !== "") {
      const parsedHtml = parseHtml(htmlContent);

      // 标记更新来源
      editor.storage.htmlView.isUpdatingFromHTML = true;

      // 设置编辑器内容
      editor.commands.setContent(parsedHtml);

      // 手动触发更新
      const tr = editor.state.tr;
      tr.setMeta("preventUpdate", false);
      tr.setMeta("addToHistory", false);
      editor.view.dispatch(tr);

      // 关键：手动触发更新事件，确保v-model同步
      if (editor.options.onUpdate) {
        editor.options.onUpdate({
          editor,
          transaction: tr,
        });
      }

      // 延迟重置标记
      requestAnimationFrame(() => {
        editor.storage.htmlView.isUpdatingFromHTML = false;
      });

      console.log("Applied HTML to editor");
    }

    // 恢复之前禁用的插件
    const extensions = editor.extensionManager.extensions;
    if (editor.storage.htmlView.disabledExtensions) {
      for (const extension of extensions) {
        if (extension.name === "htmlView") continue;

        if (
          extension.options &&
          typeof extension.options.enable === "boolean" &&
          editor.storage.htmlView.disabledExtensions[extension.name] !==
            undefined
        ) {
          extension.options.enable =
            editor.storage.htmlView.disabledExtensions[extension.name];
        }
      }
      // 清除存储的状态
      editor.storage.htmlView.disabledExtensions = {};
    }

    // 更新状态
    editor.storage.htmlView.isHtmlMode = false;
    console.log("Switched back to rich text mode");
  } catch (error) {
    console.error("Error applying HTML:", error);

    // 移除覆盖层
    if (editor.storage.htmlView.overlayElement) {
      editor.storage.htmlView.overlayElement.remove();
      editor.storage.htmlView.overlayElement = null;
    }

    editor.storage.htmlView.isHtmlMode = false;
  }
}

export const HtmlView = /* @__PURE__*/ Extension.create<HtmlViewOptions>({
  name: "htmlView",

  // Store the HTML view state
  addStorage() {
    return {
      isHtmlMode: false,
      editorContent: "",
      htmlContent: "",
      overlayElement: null as HTMLElement | null,
      isUpdatingFromHTML: false,
      disabledExtensions: {} as Record<string, boolean>,
    } as const;
  },

  // 增加自定义CSS，用于HTML视图模式
  addGlobalAttributes() {
    // 添加全局CSS样式
    const style = document.createElement("style");
    style.textContent = `
      .html-view-mode .ProseMirror {
        display: none !important;
      }
      .tiptap-html-overlay {
        border-radius: 0 !important;
      }
      /* 禁用HTML模式下的所有其他按钮 - 更强力版本 */
      .html-view-active .v-toolbar button {
        opacity: 0.4 !important;
        cursor: not-allowed !important;
        background-color: #f0f0f0 !important;
        pointer-events: none !important;
      }
      /* 确保HTML视图按钮始终可点击 */
      .html-view-active .v-toolbar button[data-htmlview-btn="true"] {
        opacity: 1 !important;
        cursor: pointer !important;
        background-color: rgba(25, 118, 210, 0.12) !important;
        border: 1px solid rgba(25, 118, 210, 0.5) !important;
        z-index: 1000 !important;
        position: relative !important;
        pointer-events: auto !important;
      }
    `;
    document.head.appendChild(style);

    return [];
  },

  addOptions() {
    return {
      ...this.parent?.(),
      button: ({ editor, t }) => ({
        component: ActionButton,
        componentProps: {
          action: () => {
            const isHtmlMode = editor.storage.htmlView.isHtmlMode;

            if (isHtmlMode) {
              // 从HTML视图切换到富文本视图
              deactivateHtmlMode(editor);
            } else {
              // 从富文本视图切换到HTML视图
              activateHtmlMode(editor);
            }
          },
          isActive: () => editor.storage.htmlView.isHtmlMode || false,
          icon: "htmlView",
          tooltip: t("editor.htmlview.tooltip"),
          // 当启用HTML视图时，其他插件按钮应该被禁用
          onRender: () => {
            // 监听自定义事件，当HTML模式发生变化时被调用
            const handler = (e: CustomEvent) => {
              // 主动寻找HTML按钮并确保标记
              const htmlButtons =
                document.querySelectorAll(".v-toolbar button");
              // 通过多个选择器尝试找到HTML按钮
              htmlButtons.forEach((btn) => {
                const svg = btn.querySelector(".v-icon svg");
                if (svg) {
                  const path = svg.querySelector("path");
                  if (
                    path &&
                    path
                      .getAttribute("d")
                      ?.includes(
                        "M12,17.56L16.07,16.43L16.62,10.33H9.38L9.2,8.3H16.8L17,6.31H7L7.56,12.32H14.45L14.22,14.9L12,15.5L9.78,14.9L9.64,13.24H7.64L7.93,16.43L12,17.56M4.07,3H19.93L18.5,19.2L12,21L5.5,19.2L4.07,3Z",
                      )
                  ) {
                    // 找到HTML按钮，设置标记
                    btn.setAttribute("data-htmlview-btn", "true");
                  }
                }
              });

              // 获取所有工具栏按钮
              const allButtons = document.querySelectorAll(
                ".vuetify-pro-tiptap .v-toolbar button",
              );

              // 遍历所有按钮
              allButtons.forEach((button) => {
                // 检查是否为HTML按钮
                const isHtmlButton = button.hasAttribute("data-htmlview-btn");

                if (e.detail.isHtmlMode) {
                  // HTML模式激活
                  if (!isHtmlButton) {
                    // 非HTML按钮禁用 - 多重机制确保禁用
                    button.setAttribute("disabled", "true");
                    button.setAttribute("aria-disabled", "true");
                    (button as HTMLElement).style.pointerEvents = "none";
                    (button as HTMLElement).style.opacity = "0.4";
                    (button as HTMLElement).style.backgroundColor = "#f0f0f0";
                    (button as HTMLElement).style.cursor = "not-allowed";
                    // 安全地添加事件阻止
                    if (button instanceof HTMLElement) {
                      button.onclick = function (event: Event) {
                        event.preventDefault();
                        event.stopPropagation();
                        return false;
                      };
                    }
                  } else {
                    // HTML按钮保持启用
                    button.removeAttribute("disabled");
                    button.removeAttribute("aria-disabled");
                    (button as HTMLElement).style.pointerEvents = "auto";
                    (button as HTMLElement).style.opacity = "1";
                    (button as HTMLElement).style.backgroundColor =
                      "rgba(25, 118, 210, 0.12)";
                    (button as HTMLElement).style.border =
                      "1px solid rgba(25, 118, 210, 0.5)";
                    (button as HTMLElement).style.zIndex = "1000";
                    (button as HTMLElement).style.position = "relative";
                    (button as HTMLElement).style.cursor = "pointer";
                  }
                } else {
                  // 普通模式，恢复所有按钮
                  button.removeAttribute("disabled");
                  button.removeAttribute("aria-disabled");
                  (button as HTMLElement).style.pointerEvents = "";
                  (button as HTMLElement).style.opacity = "";
                  (button as HTMLElement).style.backgroundColor = "";
                  (button as HTMLElement).style.border = "";
                  (button as HTMLElement).style.position = "";
                  (button as HTMLElement).style.zIndex = "";
                  (button as HTMLElement).style.cursor = "";
                  // 安全地移除事件阻止
                  if (button instanceof HTMLElement) {
                    button.onclick = null;
                  }
                }
              });
            };

            document.addEventListener(
              "tiptap-html-mode-changed",
              handler as EventListener,
            );

            // 给当前按钮标记为HTML视图按钮，避免被自己禁用
            return {
              element: document.createElement("div"),
              onMount: (element: HTMLElement) => {
                // 找到最近的按钮元素并标记
                const button = element.closest("button");
                if (button) {
                  button.setAttribute("data-htmlview-btn", "true");
                  console.log("HTML视图按钮已标记");
                }
              },
              onDestroy: () => {
                document.removeEventListener(
                  "tiptap-html-mode-changed",
                  handler as EventListener,
                );
              },
            };
          },
        },
      }),
    };
  },

  // 清理函数，确保切换回普通模式并移除任何临时元素
  onDestroy() {
    const editor = this.editor;
    if (editor.storage.htmlView.isHtmlMode) {
      // 移除HTML编辑器覆盖层
      if (editor.storage.htmlView.overlayElement) {
        editor.storage.htmlView.overlayElement.remove();
        editor.storage.htmlView.overlayElement = null;
      }
    }
  },

  // 处理编辑器更新事件
  onUpdate() {
    return ({ editor }: { editor: Editor }) => {
      // 允许所有更新传播到v-model，但阻止HTML视图模式下的干扰
      if (
        editor.storage.htmlView.isHtmlMode &&
        !editor.storage.htmlView.isUpdatingFromHTML
      ) {
        return false;
      }

      // 否则允许更新传播到v-model
      return true;
    };
  },
});
