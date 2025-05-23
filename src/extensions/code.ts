import type { GeneralOptions } from "@/type";
import type { CodeOptions as TiptapCodeOptions } from "@tiptap/extension-code";

import { Code as TiptapCode } from "@tiptap/extension-code";
import { addCommonAttributes } from "./attribute-config";

import ActionButton from "./components/ActionButton.vue";

export interface CodeOptions
  extends TiptapCodeOptions,
    GeneralOptions<CodeOptions> {
  /** HTML attributes that should be allowed on code elements */
  allowedAttributes?: string[];
}

export const Code = /* @__PURE__*/ TiptapCode.extend<CodeOptions>({
  addAttributes() {
    return addCommonAttributes(
      this.parent?.(),
      "code",
      this.options.allowedAttributes,
    );
  },

  addOptions() {
    return {
      ...this.parent?.(),
      button: ({ editor, t }) => ({
        component: ActionButton,
        componentProps: {
          action: () => editor.chain().focus().toggleCode().run(),
          isActive: () => editor.isActive("code") || false,
          disabled: !editor.can().toggleCode(),
          icon: "code",
          tooltip: t("editor.code.tooltip"),
        },
      }),
    };
  },
});
