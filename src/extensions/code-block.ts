import type { GeneralOptions } from "@/type";
import type { CodeBlockOptions as TiptapCodeBlockOptions } from "@tiptap/extension-code-block";

import { CodeBlock as TiptapCodeBlock } from "@tiptap/extension-code-block";
import { addCommonAttributes } from "./attribute-config";

import ActionButton from "./components/ActionButton.vue";

export interface CodeBlockOptions
  extends TiptapCodeBlockOptions,
    GeneralOptions<CodeBlockOptions> {
  /** HTML attributes that should be allowed on code block elements */
  allowedAttributes?: string[];
}

export const CodeBlock =
  /* @__PURE__*/ TiptapCodeBlock.extend<CodeBlockOptions>({
    addAttributes() {
      return addCommonAttributes(
        this.parent?.(),
        "codeBlock",
        this.options.allowedAttributes,
      );
    },

    addOptions() {
      return {
        ...this.parent?.(),
        button: ({ editor, t }) => ({
          component: ActionButton,
          componentProps: {
            action: () => editor.chain().focus().toggleCodeBlock().run(),
            isActive: () => editor.isActive("codeBlock") || false,
            disabled: !editor.can().toggleCodeBlock(),
            icon: "codeBlock",
            tooltip: t("editor.codeblock.tooltip"),
          },
        }),
      };
    },
  });
