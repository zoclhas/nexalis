import { formatSlug } from "@/lib/utils";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { CollectionConfig } from "payload";

export const Service: CollectionConfig = {
  slug: "service",
  admin: {
    group: "Products & Services",
    useAsTitle: "title",
    defaultColumns: ["title", "alt", "createdAt", "updatedAt"],
  },
  fields: [
    {
      name: "image",
      label: "Service Image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "title",
      label: "Service Title",
      type: "text",
      required: true,
      admin: { position: "sidebar" },
    },
    {
      name: "alt",
      label: "Service Alt",
      type: "text",
      required: true,
      admin: { position: "sidebar" },
    },
    {
      name: "description",
      label: "Service Description",
      type: "richText",
      editor: lexicalEditor({}),
      required: true,
    },

    {
      name: "info",
      label: "Service Info",
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
