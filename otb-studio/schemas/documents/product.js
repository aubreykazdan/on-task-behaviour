export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: { source: "title" },
    },
    // {
    //   name: "slug",
    //   title: "Slug",
    //   type: "slug",
    //   options: {
    //     source: (doc, options) => options.title,
    //   },
    // },
  ],
};
