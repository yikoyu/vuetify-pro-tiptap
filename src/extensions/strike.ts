import type { GeneralOptions } from "@/type";
import type { StrikeOptions as TiptapStrikeOptions } from "@tiptap/extension-strike";

import { Strike as TiptapStrike } from "@tiptap/extension-strike";
import { addCommonAttributes } from "./attribute-config";

import ActionButton from "./components/ActionButton.vue";

export interface StrikeOptions
  extends TiptapStrikeOptions,
    GeneralOptions<StrikeOptions> {
  /** HTML attributes that should be allowed on strike elements */
  allowedAttributes?: string[];
}

export const Strike = /* @__PURE__*/ TiptapStrike.extend<StrikeOptions>({
  addAttributes() {
    return addCommonAttributes(
      this.parent?.(),
      "strike",
      this.options.allowedAttributes,
    );
  },

  addOptions() {
    return {
      ...this.parent?.(),
      button: ({ editor, t }) => ({
        component: ActionButton,
        componentProps: {
          action: () => editor.chain().focus().toggleStrike().run(),
          isActive: () => editor.isActive("strike") || false,
          disabled: !editor.can().toggleStrike(),
          icon: "strike",
          tooltip: t("editor.strike.tooltip"),
        },
      }),
    };
  },
});
