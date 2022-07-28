export default {
  name: "contactCopy",
  type: "document",
  title: "Contact Copy",
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
  ],
};
