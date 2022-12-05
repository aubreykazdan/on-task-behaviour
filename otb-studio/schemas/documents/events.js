export default {
  name: "events",
  title: "Events",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "eventItems",
      type: "array",
      title: "Event Items",
      of: [{ type: "event" }],
    },
  ],
};
