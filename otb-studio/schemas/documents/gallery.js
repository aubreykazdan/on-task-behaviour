export default {
  name: "gallery",
  title: "Gallery",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "galleryItems",
      type: "array",
      title: "Gallery Items",
      of: [{ type: "twi" }],
    },
  ],
};
