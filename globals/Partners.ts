import { GlobalConfig } from "payload/types";

export const Partners: GlobalConfig = {
  slug: "partners",
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
          type: "text",
          required: true,
        },
      ],
      minRows: 1,
    },
  ],
};
