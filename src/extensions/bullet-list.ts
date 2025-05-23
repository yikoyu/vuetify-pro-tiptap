import type { GeneralOptions } from "@/type";
import type { BulletListOptions as TiptapBulletListOptions } from "@tiptap/extension-bullet-list";

import { BulletList as TiptapBulletList } from "@tiptap/extension-bullet-list";
import { addCommonAttributes } from "./attribute-config";

import ActionButton from "./components/ActionButton.vue";

export interface BulletListOptions
  extends TiptapBulletListOptions,
    GeneralOptions<BulletListOptions> {
  /** HTML attributes that should be allowed on bullet list elements */
  allowedAttributes?: string[];
}

export const BulletList =
  /* @__PURE__*/ TiptapBulletList.extend<BulletListOptions>({
    addAttributes() {
      return addCommonAttributes(
        this.parent?.(),
        "bulletList",
        this.options.allowedAttributes,
      );
    },

    addOptions() {
      return {
        ...this.parent?.(),
        button: ({ editor, t }) => ({
          component: ActionButton,
          componentProps: {
            action: () => editor.chain().focus().toggleBulletList().run(),
            isActive: () => editor.isActive("bulletList") || false,
            disabled: !editor.can().toggleBulletList(),
            icon: "bulletList",
            tooltip: t("editor.bulletlist.tooltip"),
          },
        }),
      };
    },
  });
