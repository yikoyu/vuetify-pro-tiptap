import type { GeneralOptions } from "@/type";
import type { HighlightOptions as TiptapHighlightOptions } from "@tiptap/extension-highlight";

import { Highlight as TiptapHighlight } from "@tiptap/extension-highlight";
import { addCommonAttributes } from "./attribute-config";

import HighlightActionButton from "./components/HighlightActionButton.vue";

export interface HighlightOptions
  extends TiptapHighlightOptions,
    GeneralOptions<HighlightOptions> {
  /** HTML attributes that should be allowed on highlight elements */
  allowedAttributes?: string[];
}

export const Highlight =
  /* @__PURE__*/ TiptapHighlight.extend<HighlightOptions>({
    addAttributes() {
      return addCommonAttributes(
        this.parent?.(),
        "highlight",
        this.options.allowedAttributes,
      );
    },

    addOptions() {
      return {
        ...this.parent?.(),
        multicolor: true,
        button: ({ editor, t }) => ({
          component: HighlightActionButton,
          componentProps: {
            action: (color?: unknown) => {
              if (typeof color === "string")
                editor.chain().focus().setHighlight({ color }).run();
            },
            isActive: () => editor.isActive("highlight") || false,
            disabled: !editor.can().setHighlight(),
            icon: "highlight",
            tooltip: t("editor.highlight.tooltip"),
          },
        }),
      };
    },
  });
