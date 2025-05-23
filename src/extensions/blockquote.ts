import type { GeneralOptions } from "@/type";
import type { BlockquoteOptions as TiptapBlockquoteOptions } from "@tiptap/extension-blockquote";

import { Blockquote as TiptapBlockquote } from "@tiptap/extension-blockquote";
import { addCommonAttributes } from "./attribute-config";

import ActionButton from "./components/ActionButton.vue";

export interface BlockquoteOptions
  extends TiptapBlockquoteOptions,
    GeneralOptions<BlockquoteOptions> {
  /** HTML attributes that should be allowed on blockquote elements */
  allowedAttributes?: string[];
}

export const Blockquote =
  /* @__PURE__*/ TiptapBlockquote.extend<BlockquoteOptions>({
    addAttributes() {
      // Get allowedAttributes from extension options
      return addCommonAttributes(
        this.parent?.(),
        "blockquote",
        this.options.allowedAttributes,
      );
    },

    addOptions() {
      return {
        ...this.parent?.(),
        HTMLAttributes: {
          class: "blockquote",
        },
        button: ({ editor, t }) => ({
          component: ActionButton,
          componentProps: {
            action: () => editor.chain().focus().toggleBlockquote().run(),
            isActive: () => editor.isActive("blockquote") || false,
            disabled: !editor.can().toggleBlockquote(),
            icon: "blockquote",
            tooltip: t("editor.blockquote.tooltip"),
          },
        }),
      };
    },
  });
