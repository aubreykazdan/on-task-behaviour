export default {
  name: "homeCopy",
  type: "document",
  title: "Home Copy",
  fields: [
    {
      name: "heroTitle",
      title: "Hero Title",
      type: "string",
    },
    {
      name: "heroContent",
      title: "Hero Content",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
        },
      ],
    },
    {
      title: "Title Two",
      name: "titleTwo",
      type: "string",
    },
    {
      name: "contentTwo",
      title: "Content Two",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "imageTwo",
      title: "Image Two",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
        },
      ],
    },
  ],
};
