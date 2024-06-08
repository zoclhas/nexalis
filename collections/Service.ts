import { formatSlug } from "@/lib/format";
import {
  HTMLConverterFeature,
  lexicalEditor,
  lexicalHTML,
} from "@payloadcms/richtext-lexical";
import type { CollectionConfig } from "payload/types";

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
