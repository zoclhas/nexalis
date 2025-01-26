import { GlobalConfig } from "payload";

export const Partners: GlobalConfig = {
  slug: "partners",
  label: "Partners",
  fields: [
    {
      name: "partners",
      type: "array",
      fields: [
        {
          name: "logo",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          name: "partner",
          label: "Name",
          type: "text",
          required: true,
        },
      ],
    },
  ],
};
