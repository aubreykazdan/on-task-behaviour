export default {
  name: "newsCopy",
  type: "document",
  title: "News Copy",
  fields: [
    {
      name: "title",
      type: "title",
      type: "string",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "alt",
      type: "string",
      title: "Alternative text",
      description:
        "Use this to describe your image for users with accessibility needs",
    },
  ],
};
