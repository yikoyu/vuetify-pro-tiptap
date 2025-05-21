import type { GeneralOptions } from "@/type";
import type { Editor } from "@tiptap/core";
import { Extension } from "@tiptap/core";
import ActionButton from "./components/ActionButton.vue";

export interface HtmlViewOptions extends GeneralOptions<HtmlViewOptions> {}

// Helper functions outside the extension
function createOverlay(editor: Editor) {
  // Get editor DOM element
  const editorElement = editor.view.dom;
  const editorParent = editorElement.parentElement;

  if (!editorParent) return null;

  // Create overlay container
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

  // Create HTML editing area
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

  // Set HTML content to the text area
  const currentContent = editor.getHTML();

  // Save original content for later restoration
  editor.storage.htmlView.editorContent = currentContent;

  // Format HTML content
  const formattedHtml = formatHtml(currentContent);
  textarea.value = formattedHtml;

  // Save formatted HTML content
  editor.storage.htmlView.htmlContent = formattedHtml;

  // Add the editing area to the overlay
  overlay.appendChild(textarea);

  // Add the overlay to the editor parent container
  editorParent.style.position = "relative";

  // Get the original dimensions before appending the overlay
  const originalWidth = editorElement.offsetWidth;
  const originalHeight = editorElement.offsetHeight;

  // Force the overlay to have the exact same dimensions as the editor
  overlay.style.width = `${originalWidth}px`;
  overlay.style.height = `${originalHeight}px`;
  overlay.style.minHeight = `${originalHeight}px`;

  // Add smooth transition for any dimension changes
  overlay.style.transition = "none";

  editorParent.appendChild(overlay);

  // Focus on the HTML editing area
  setTimeout(() => {
    textarea.focus();
    console.log("Switched to HTML view mode");
  }, 10);

  // Add input event to update stored HTML content and editor content in real-time
  textarea.addEventListener("input", () => {
    // Update stored HTML content
    editor.storage.htmlView.htmlContent = textarea.value;

    // Sync to rich text editor in real-time without affecting HTML editing experience
    try {
      // Mark update source as HTML editor
      editor.storage.htmlView.isUpdatingFromHTML = true;

      // Parse HTML content
      const parsedHtml = parseHtml(textarea.value);

      // Use commands API to update editor content
      editor.commands.setContent(parsedHtml, false);

      // Ensure editor state updates and triggers v-model update
      // This is key: manually trigger update event to ensure v-model syncs correctly
      const tr = editor.state.tr;
      tr.setMeta("preventUpdate", false);
      tr.setMeta("addToHistory", false);
      editor.view.dispatch(tr);

      // Key: manually trigger update event to ensure v-model syncs
      if (editor.options.onUpdate) {
        editor.options.onUpdate({
          editor,
          transaction: tr,
        });
      }
    } catch (error) {
      console.error("Error syncing HTML to editor:", error);
    } finally {
      // Delay resetting flag by one frame to ensure update is complete
      requestAnimationFrame(() => {
        editor.storage.htmlView.isUpdatingFromHTML = false;
      });
    }
  });

  return overlay;
}

// Format HTML content (beautify and escape)
function formatHtml(html: string) {
  // Remove any existing tiptap-html-* related tags
  const cleanContent = html
    .replace(/<div class="tiptap-html-overlay"[^>]*>[\s\S]*?<\/div>/gi, "")
    .replace(
      /<textarea class="tiptap-html-editor"[^>]*>[\s\S]*?<\/textarea>/gi,
      "",
    );

  // More code can be added here to beautify HTML
  return cleanContent;
}

// Parse HTML content (restore from edit state)
function parseHtml(html: string) {
  // Remove potential tags as a precaution
  const cleanContent = html
    .replace(/<div class="tiptap-html-overlay"[^>]*>[\s\S]*?<\/div>/gi, "")
    .replace(
      /<textarea class="tiptap-html-editor"[^>]*>[\s\S]*?<\/textarea>/gi,
      "",
    );

  return cleanContent;
}

// Find editor toolbar and add disabled state to all buttons
function disableAllToolbarButtons(editor: Editor) {
  try {
    // Create or get global flag for disabling all toolbar buttons
    if ((window as any).tiptapGlobalState === undefined) {
      (window as any).tiptapGlobalState = {};
    }

    // Set global state indicating HTML mode is active
    (window as any).tiptapGlobalState.htmlModeActive = true;

    // Manually trigger toolbar update (if there's a re-rendering mechanism)
    const event = new CustomEvent("tiptap-html-mode-changed", {
      detail: { isHtmlMode: true },
    });
    document.dispatchEvent(event);

    // Add class name to editor container to trigger CSS disabling
    const editorContainer = document.querySelector(".vuetify-pro-tiptap");
    if (editorContainer) {
      editorContainer.classList.add("html-view-active");
    }

    // Directly manipulate DOM again to find and mark HTML button
    setTimeout(() => {
      // Try to find HTML button through multiple methods
      // 1. Through SVG path
      const buttons = document.querySelectorAll(".v-toolbar button");
      buttons.forEach((btn) => {
        const svg = btn.querySelector(".v-icon svg");
        if (svg) {
          const path = svg.querySelector("path");
          const d = path?.getAttribute("d") || "";
          // Match common code icon path
          if (
            d.includes(
              "M12,17.56L16.07,16.43L16.62,10.33H9.38L9.2,8.3H16.8L17,6.31H7L7.56,12.32H14.45L14.22,14.9L12,15.5L9.78,14.9L9.64,13.24H7.64L7.93,16.43L12,17.56M4.07,3H19.93L18.5,19.2L12,21L5.5,19.2L4.07,3Z",
            )
          ) {
            btn.setAttribute("data-htmlview-btn", "true");
            // Ensure this button is fully clickable
            (btn as HTMLElement).style.pointerEvents = "auto";
            (btn as HTMLElement).style.opacity = "1";
            (btn as HTMLElement).style.cursor = "pointer";
            (btn as HTMLElement).style.backgroundColor =
              "rgba(25, 118, 210, 0.12)";
            (btn as HTMLElement).style.zIndex = "10000";
            btn.removeAttribute("disabled");
          } else {
            // Ensure all other buttons are not clickable
            (btn as HTMLElement).style.pointerEvents = "none";
            (btn as HTMLElement).style.opacity = "0.4";
            (btn as HTMLElement).style.cursor = "not-allowed";
            btn.setAttribute("disabled", "true");
          }
        }
      });
    }, 50);

    console.log("All editor tools have been disabled");
  } catch (error) {
    console.error("Failed to disable toolbar buttons:", error);
  }
}

// Restore editor toolbar button state
function enableAllToolbarButtons(editor: Editor) {
  try {
    // Update global state
    if ((window as any).tiptapGlobalState !== undefined) {
      (window as any).tiptapGlobalState.htmlModeActive = false;
    }

    // Trigger custom event to notify toolbar update
    const event = new CustomEvent("tiptap-html-mode-changed", {
      detail: { isHtmlMode: false },
    });
    document.dispatchEvent(event);

    // Remove disabled class name from editor container
    const editorContainer = document.querySelector(".vuetify-pro-tiptap");
    if (editorContainer) {
      editorContainer.classList.remove("html-view-active");
    }

    // Find and reset all buttons directly
    const buttons = document.querySelectorAll(".v-toolbar button");
    buttons.forEach((btn) => {
      // Remove disabled attribute
      btn.removeAttribute("disabled");
      btn.removeAttribute("aria-disabled");

      // Reset styles
      if (btn instanceof HTMLElement) {
        btn.style.pointerEvents = "";
        btn.style.opacity = "";
        btn.style.backgroundColor = "";
        btn.style.cursor = "";
        btn.style.zIndex = "";
        btn.style.position = "";
        btn.style.border = "";

        // Remove event prevention
        btn.onclick = null;
      }
    });

    console.log("All editor tools have been enabled");
  } catch (error) {
    console.error("Failed to enable toolbar buttons:", error);
  }
}

// Activate HTML view mode
function activateHtmlMode(editor: Editor) {
  try {
    // Disable all other plugins/features
    const extensions = editor.extensionManager.extensions;
    for (const extension of extensions) {
      // Skip HTML view plugin itself
      if (extension.name === "htmlView") continue;

      // Temporarily disable other plugins
      if (extension.options && typeof extension.options.enable === "boolean") {
        // Save current state for later restoration
        if (!editor.storage.htmlView.disabledExtensions) {
          editor.storage.htmlView.disabledExtensions = {};
        }
        editor.storage.htmlView.disabledExtensions[extension.name] =
          extension.options.enable;
        extension.options.enable = false;
      }
    }

    // Get editor dimensions before switching to HTML mode
    const editorElement = editor.view.dom;
    const editorParent = editorElement.parentElement;

    if (editorParent) {
      // Store original dimensions to prevent layout shifts
      const originalWidth = editorElement.offsetWidth;
      const originalHeight = editorElement.offsetHeight;
      const originalScrollHeight = editorElement.scrollHeight;

      // Store dimensions as CSS variables for consistent sizing
      editorParent.style.setProperty(
        "--tiptap-editor-width",
        `${originalWidth}px`,
      );
      editorParent.style.setProperty(
        "--tiptap-editor-height",
        `${originalHeight - 210}px`,
      );
      editorParent.style.setProperty(
        "--tiptap-editor-scroll-height",
        `${originalScrollHeight}px`,
      );

      // Add class to fix dimensions during transition
      editorParent.classList.add("tiptap-preserve-dimensions");
    }

    // Disable all buttons on the toolbar
    disableAllToolbarButtons(editor);

    // Create overlay and save reference
    const overlay = createOverlay(editor);
    if (overlay) {
      editor.storage.htmlView.overlayElement = overlay;
      editor.storage.htmlView.isHtmlMode = true;

      // Add style to editor container to indicate currently in HTML mode
      const editorElement = editor.view.dom;
      if (editorElement.parentElement) {
        editorElement.parentElement.classList.add("html-view-mode");
      }
    }
  } catch (error) {
    console.error("Failed to switch to HTML view:", error);
  }
}

// Deactivate HTML view mode and apply changes
function deactivateHtmlMode(editor: Editor) {
  try {
    // Get updated HTML content
    const htmlContent = editor.storage.htmlView.htmlContent;

    // Remove overlay
    if (editor.storage.htmlView.overlayElement) {
      editor.storage.htmlView.overlayElement.remove();
      editor.storage.htmlView.overlayElement = null;
    }

    // Enable all toolbar buttons
    enableAllToolbarButtons(editor);

    // Remove HTML mode indicator style
    const editorElement = editor.view.dom;
    if (editorElement.parentElement) {
      editorElement.parentElement.classList.remove("html-view-mode");
      // Remove dimension preservation class
      editorElement.parentElement.classList.remove(
        "tiptap-preserve-dimensions",
      );

      // Clean up CSS variables after a brief delay to prevent flickering
      setTimeout(() => {
        if (editorElement.parentElement) {
          editorElement.parentElement.style.removeProperty(
            "--tiptap-editor-width",
          );
          editorElement.parentElement.style.removeProperty(
            "--tiptap-editor-height",
          );
          editorElement.parentElement.style.removeProperty(
            "--tiptap-editor-scroll-height",
          );
        }
      }, 50);
    }

    // If there's HTML content, apply it to the editor
    if (htmlContent && htmlContent.trim() !== "") {
      const parsedHtml = parseHtml(htmlContent);

      // Mark update source
      editor.storage.htmlView.isUpdatingFromHTML = true;

      // Set editor content
      editor.commands.setContent(parsedHtml);

      // Manually trigger update
      const tr = editor.state.tr;
      tr.setMeta("preventUpdate", false);
      tr.setMeta("addToHistory", false);
      editor.view.dispatch(tr);

      // Key: manually trigger update event to ensure v-model syncs
      if (editor.options.onUpdate) {
        editor.options.onUpdate({
          editor,
          transaction: tr,
        });
      }

      // Delay resetting marker
      requestAnimationFrame(() => {
        editor.storage.htmlView.isUpdatingFromHTML = false;
      });

      console.log("Applied HTML to editor");
    }

    // Restore previously disabled plugins
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
      // Clear stored state
      editor.storage.htmlView.disabledExtensions = {};
    }

    // Update state
    editor.storage.htmlView.isHtmlMode = false;
    console.log("Switched back to rich text mode");
  } catch (error) {
    console.error("Error applying HTML:", error);

    // Remove overlay
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

  // Add custom CSS for HTML view mode
  addGlobalAttributes() {
    // Add global CSS styles
    const style = document.createElement("style");
    style.textContent = `
      .html-view-mode .ProseMirror {
        display: none !important;
      }
      .tiptap-html-overlay {
        border-radius: 0 !important;
        /* Prevent flickering by using proper dimensions and transitions */
        box-sizing: border-box !important;
        transition: none !important;
      }
      /* Ensure the editor container doesn't resize during transition */
      .vuetify-pro-tiptap.html-view-mode {
        min-height: var(--tiptap-editor-height) !important;
        display: block !important;
      }
      .html-view-mode .ProseMirror-focused {
        outline: none !important;
      }
      /* Preserve dimensions to prevent layout shifts */
      .tiptap-preserve-dimensions {
        min-height: var(--tiptap-editor-height) !important;
        height: var(--tiptap-editor-height) !important;
        width: var(--tiptap-editor-width) !important;
        transition: none !important;
      }
      /* Ensure textarea in HTML view keeps the exact same dimensions */
      .tiptap-html-editor {
        min-height: var(--tiptap-editor-scroll-height, 100%) !important;
        height: var(--tiptap-editor-scroll-height, 100%) !important;
        width: var(--tiptap-editor-width, 100%) !important;
      }
      /* Disable all other buttons in HTML mode - stronger version */
      .html-view-active .v-toolbar button {
        opacity: 0.4 !important;
        cursor: not-allowed !important;
        background-color: #f0f0f0 !important;
        pointer-events: none !important;
      }
      /* Ensure HTML view button is always clickable */
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
              // Switch from HTML view to rich text view
              deactivateHtmlMode(editor);
            } else {
              // Switch from rich text view to HTML view
              activateHtmlMode(editor);
            }
          },
          isActive: () => editor.storage.htmlView.isHtmlMode || false,
          icon: "htmlView",
          tooltip: t("editor.htmlview.tooltip"),
          // Other plugin buttons should be disabled when HTML view is enabled
          onRender: () => {
            // Listen for custom event, called when HTML mode changes
            const handler = (e: CustomEvent) => {
              // Actively look for HTML button and ensure it's marked
              const htmlButtons =
                document.querySelectorAll(".v-toolbar button");
              // Try to find HTML button through multiple selectors
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
                    // Found HTML button, set marker
                    btn.setAttribute("data-htmlview-btn", "true");
                  }
                }
              });

              // Get all toolbar buttons
              const allButtons = document.querySelectorAll(
                ".vuetify-pro-tiptap .v-toolbar button",
              );

              // Iterate through all buttons
              allButtons.forEach((button) => {
                // Check if it's the HTML button
                const isHtmlButton = button.hasAttribute("data-htmlview-btn");

                if (e.detail.isHtmlMode) {
                  // HTML mode activated
                  if (!isHtmlButton) {
                    // Non-HTML buttons disabled - multiple mechanisms to ensure disabling
                    button.setAttribute("disabled", "true");
                    button.setAttribute("aria-disabled", "true");
                    (button as HTMLElement).style.pointerEvents = "none";
                    (button as HTMLElement).style.opacity = "0.4";
                    (button as HTMLElement).style.backgroundColor = "#f0f0f0";
                    (button as HTMLElement).style.cursor = "not-allowed";
                    // Safely add event prevention
                    if (button instanceof HTMLElement) {
                      button.onclick = function (event: Event) {
                        event.preventDefault();
                        event.stopPropagation();
                        return false;
                      };
                    }
                  } else {
                    // HTML button remains enabled
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
                  // Normal mode, restore all buttons
                  button.removeAttribute("disabled");
                  button.removeAttribute("aria-disabled");
                  (button as HTMLElement).style.pointerEvents = "";
                  (button as HTMLElement).style.opacity = "";
                  (button as HTMLElement).style.backgroundColor = "";
                  (button as HTMLElement).style.border = "";
                  (button as HTMLElement).style.position = "";
                  (button as HTMLElement).style.zIndex = "";
                  (button as HTMLElement).style.cursor = "";
                  // Safely remove event prevention
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

            // Mark current button as HTML view button to avoid it being disabled by itself
            return {
              element: document.createElement("div"),
              onMount: (element: HTMLElement) => {
                // Find the closest button element and mark it
                const button = element.closest("button");
                if (button) {
                  button.setAttribute("data-htmlview-btn", "true");
                  console.log("HTML view button has been marked");
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

  // Cleanup function to ensure switching back to normal mode and removing any temporary elements
  onDestroy() {
    const editor = this.editor;
    if (editor.storage.htmlView.isHtmlMode) {
      // Remove HTML editor overlay
      if (editor.storage.htmlView.overlayElement) {
        editor.storage.htmlView.overlayElement.remove();
        editor.storage.htmlView.overlayElement = null;
      }
    }
  },

  // Handle editor update events
  onUpdate() {
    return ({ editor }: { editor: Editor }) => {
      // Allow all updates to propagate to v-model, but prevent interference in HTML view mode
      if (
        editor.storage.htmlView.isHtmlMode &&
        !editor.storage.htmlView.isUpdatingFromHTML
      ) {
        return false;
      }

      // Otherwise allow updates to propagate to v-model
      return true;
    };
  },
});
