import { GlobalConfig } from "payload/types";

export const Clients: GlobalConfig = {
  slug: "clients",
  fields: [
    {
      name: "clients",
      type: "array",
      fields: [
        {
          name: "logo",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          name: "client",
          type: "text",
          required: true,
        },
      ],
      minRows: 1,
    },
  ],
};
