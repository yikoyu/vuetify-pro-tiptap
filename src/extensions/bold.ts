import type { GeneralOptions } from "@/type";
import type { BoldOptions as TiptapImageOptions } from "@tiptap/extension-bold";

import { Bold as TiptapBold } from "@tiptap/extension-bold";
import { addCommonAttributes } from "./attribute-config";

import ActionButton from "./components/ActionButton.vue";

export interface BoldOptions
  extends TiptapImageOptions,
    GeneralOptions<BoldOptions> {
  /** HTML attributes that should be allowed on bold elements */
  allowedAttributes?: string[];
}

export const Bold = /* @__PURE__*/ TiptapBold.extend<BoldOptions>({
  addAttributes() {
    return addCommonAttributes(
      this.parent?.(),
      "bold",
      this.options.allowedAttributes,
    );
  },

  addOptions() {
    return {
      ...this.parent?.(),
      button: ({ editor, t }) => ({
        component: ActionButton,
        componentProps: {
          action: () => editor.chain().focus().toggleBold().run(),
          isActive: () => editor.isActive("bold") || false,
          disabled: !editor.can().toggleBold(),
          icon: "bold",
          tooltip: t("editor.bold.tooltip"),
        },
      }),
    };
  },
});
