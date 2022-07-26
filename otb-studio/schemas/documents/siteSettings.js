export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  __experimental_actions: ["create", "update", "delete", "publish"],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      title: "URL",
      name: "url",
      type: "url",
      description: "The main site url. Used to create canonical url",
      placeholder: "https://",
    },
    {
      name: "copyright",
      title: "Copyright",
      type: "string",
    },
    {
      name: "ogImage",
      title: "OG Image",
      type: "image",
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "url",
    },
  },
};
