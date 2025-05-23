import type { GeneralOptions } from "@/type";
import type { Extension } from "@tiptap/core";
import type { HeadingOptions as TiptapHeadingOptions } from "@tiptap/extension-heading";

import type { BaseKitOptions } from "./base-kit";
import type { Item } from "./components/ActionMenuButton.vue";
import { Heading as TiptapHeading } from "@tiptap/extension-heading";
import { addCommonAttributes } from "./attribute-config";

import ActionMenuButton from "./components/ActionMenuButton.vue";

export interface HeadingOptions
  extends TiptapHeadingOptions,
    GeneralOptions<HeadingOptions> {
  /** HTML attributes that should be allowed on heading elements */
  allowedAttributes?: string[];
}

export const Heading = /* @__PURE__*/ TiptapHeading.extend<HeadingOptions>({
  addAttributes() {
    return addCommonAttributes(
      this.parent?.(),
      "heading",
      this.options.allowedAttributes,
    );
  },

  addOptions() {
    return {
      ...this.parent?.(),
      levels: [1, 2, 3, 4, 5, 6],
      button: ({ editor, extension, t }) => {
        const { extensions = [] } = editor.extensionManager ?? [];
        const levels = extension.options?.levels || [];
        const baseKitExt = extensions.find(
          (k) => k.name === "base-kit",
        ) as Extension<BaseKitOptions>;

        const items: Item[] = levels.map((level) => ({
          action: () => editor.chain().focus().toggleHeading({ level }).run(),
          isActive: () => editor.isActive("heading", { level }) || false,
          disabled: !editor.can().toggleHeading({ level }),
          icon: `h${level}`,
          title: t(`editor.heading.h${level}.tooltip`),
        }));

        if (baseKitExt && baseKitExt.options.paragraph !== false) {
          items.unshift({
            action: () => editor.chain().focus().setParagraph().run(),
            isActive: () => editor.isActive("paragraph") || false,
            disabled: !editor.can().setParagraph(),
            icon: "p",
            title: t("editor.paragraph.tooltip"),
            divider: true,
          });
        }

        const disabled =
          items.filter((k) => k.disabled).length === items.length;

        return {
          component: ActionMenuButton,
          componentProps: {
            icon: "heading",
            tooltip: t("editor.heading.tooltip"),
            disabled,
            items,
          },
        };
      },
    };
  },
});
