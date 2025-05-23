import type { GeneralOptions } from "@/type";
import type { ParagraphOptions as TiptapParagraphOptions } from "@tiptap/extension-paragraph";

import { Paragraph as TiptapParagraph } from "@tiptap/extension-paragraph";
import { addCommonAttributes } from "./attribute-config";

export interface ParagraphOptions
  extends TiptapParagraphOptions,
    GeneralOptions<ParagraphOptions> {
  /** HTML attributes that should be allowed on paragraph elements */
  allowedAttributes?: string[];
}

export const Paragraph =
  /* @__PURE__*/ TiptapParagraph.extend<ParagraphOptions>({
    addAttributes() {
      return addCommonAttributes(
        this.parent?.(),
        "paragraph",
        this.options.allowedAttributes,
      );
    },
  });
