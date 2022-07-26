import { GrNavigate } from "react-icons/gr";

export default {
  name: "navMenu",
  title: "Nav Menu",
  type: "document",
  icon: GrNavigate,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      description: "Select type of menu",
      options: {
        list: ["Header", "Footer"],
      },
    },
    {
      name: "items",
      type: "array",
      title: "Navigation items",
      of: [{ type: "cta" }],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
