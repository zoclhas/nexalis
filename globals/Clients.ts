import { GlobalConfig } from "payload";

export const Clients: GlobalConfig = {
  slug: "clients",
  label: "Clients",
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
          label: "Name",
          type: "text",
          required: true,
        },
      ],
    },
  ],
};
