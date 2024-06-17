import { GlobalConfig } from "payload/types";

export const Projects: GlobalConfig = {
  slug: "projects-exec",
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
      minRows: 1,
    },
  ],
};
