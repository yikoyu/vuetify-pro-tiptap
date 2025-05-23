import type { GeneralOptions } from "@/type";
import type { ItalicOptions as TiptapItalicOptions } from "@tiptap/extension-italic";

import { Italic as TiptapItalic } from "@tiptap/extension-italic";
import { addCommonAttributes } from "./attribute-config";

import ActionButton from "./components/ActionButton.vue";

export interface ItalicOptions
  extends TiptapItalicOptions,
    GeneralOptions<ItalicOptions> {
  /** HTML attributes that should be allowed on italic elements */
  allowedAttributes?: string[];
}

export const Italic = /* @__PURE__*/ TiptapItalic.extend<ItalicOptions>({
  addAttributes() {
    return addCommonAttributes(
      this.parent?.(),
      "italic",
      this.options.allowedAttributes,
    );
  },

  addOptions() {
    return {
      ...this.parent?.(),
      button: ({ editor, t }) => ({
        component: ActionButton,
        componentProps: {
          action: () => editor.chain().focus().toggleItalic().run(),
          isActive: () => editor.isActive("italic") || false,
          disabled: !editor.can().toggleItalic(),
          icon: "italic",
          tooltip: t("editor.italic.tooltip"),
        },
      }),
    };
  },
});
