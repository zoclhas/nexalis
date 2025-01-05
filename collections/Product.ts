import { formatSlug } from "@/lib/utils";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { CollectionConfig } from "payload";

export const Product: CollectionConfig = {
  slug: "product",
  admin: {
    group: "Products & Services",
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
      editor: lexicalEditor({}),
      required: true,
    },

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
