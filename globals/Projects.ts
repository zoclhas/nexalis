import { GlobalConfig } from "payload";

export const Projects: GlobalConfig = {
  slug: "projects",
  label: "Projects Exectuted",
  fields: [
    {
      name: "projects",
      type: "array",
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
        },
      ],
    },
  ],
};
