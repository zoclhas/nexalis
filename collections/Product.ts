import { formatSlug } from "@/lib/format";
import {
  HTMLConverterFeature,
  lexicalEditor,
  lexicalHTML,
} from "@payloadcms/richtext-lexical";
import type { CollectionConfig } from "payload/types";

export const Product: CollectionConfig = {
  slug: "product",
  admin: {
    group: "Product",
    useAsTitle: "title",
    defaultColumns: ["title", "alt", "createdAt", "updatedAt"],
  },
  fields: [
    {
      name: "image",
      label: "Product Image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "title",
      label: "Product Title",
      type: "text",
      required: true,
      admin: { position: "sidebar" },
    },
    {
      name: "alt",
      label: "Product Alt",
      type: "text",
      required: true,
      admin: { position: "sidebar" },
    },
    {
      name: "description",
      label: "Product Description",
      type: "richText",
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          HTMLConverterFeature(),
        ],
      }),
      required: true,
    },
    lexicalHTML("description", { name: "description_html" }),

    {
      name: "info",
      label: "Product Info",
      type: "array",
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "description",
          type: "textarea",
          required: true,
        },
      ],
      minRows: 1,
    },

    {
      name: "slug",
      type: "text",
      admin: { position: "sidebar" },
      hooks: {
        beforeValidate: [formatSlug("title")],
      },
    },
  ],
};
