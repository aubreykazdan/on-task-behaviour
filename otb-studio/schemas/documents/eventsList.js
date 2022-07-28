export default {
  name: "eventsList",
  title: "Events List",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "events",
      title: "Events",
      type: "array",
      of: [{ type: "event" }],
    },
  ],
};
