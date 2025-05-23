import type { GeneralOptions } from "@/type";
import type { OrderedListOptions as TiptapOrderedListOptions } from "@tiptap/extension-ordered-list";

import { OrderedList as TiptapOrderedList } from "@tiptap/extension-ordered-list";
import { addCommonAttributes } from "./attribute-config";

import ActionButton from "./components/ActionButton.vue";

export interface OrderedListOptions
  extends TiptapOrderedListOptions,
    GeneralOptions<OrderedListOptions> {
  /** HTML attributes that should be allowed on ordered list elements */
  allowedAttributes?: string[];
}

export const OrderedList =
  /* @__PURE__*/ TiptapOrderedList.extend<OrderedListOptions>({
    addAttributes() {
      return addCommonAttributes(
        this.parent?.(),
        "orderedList",
        this.options.allowedAttributes,
      );
    },

    addOptions() {
      return {
        ...this.parent?.(),
        button: ({ editor, t }) => ({
          component: ActionButton,
          componentProps: {
            action: () => editor.chain().focus().toggleOrderedList().run(),
            isActive: () => editor.isActive("orderedList") || false,
            disabled: !editor.can().toggleOrderedList(),
            icon: "orderedList",
            tooltip: t("editor.orderedlist.tooltip"),
          },
        }),
      };
    },
  });
