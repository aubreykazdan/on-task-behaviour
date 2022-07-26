export default {
  name: "post",
  type: "document",
  title: "Post",
  initialValue: {
    title: "Blog Post",
  },
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      hidden: true,
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
      // validation: (Rule) => Rule.required(),
    },
    {
      name: "heading",
      type: "string",
      title: "Heading",
    },
    {
      name: "excerpt",
      type: "string",
      title: "Excerpt",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
  ],

  preview: {
    select: {
      title: "heading",
      subtitle: "_updatedAt",
      media: "image",
    },
  },
};
