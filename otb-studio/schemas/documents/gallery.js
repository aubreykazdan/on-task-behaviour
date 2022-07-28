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
      name: "items",
      type: "array",
      title: "Items",
      of: [{ type: "twi" }],
    },
  ],
};
