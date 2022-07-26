// form.js

export default {
  name: "form",
  type: "object",
  title: "Form",
  initialValue: { title: "Form Section" },
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      hidden: true,
    },
    {
      name: "heading",
      type: "string",
      title: "Heading",
    },
    {
      name: "label",
      type: "string",
      title: "Label",
      description: "Select label type",
      options: {
        list: [ "Email Address", "Name"],
      },
    },
    {
      name: "form",
      type: "string",
      title: "Form",
      description: "Select form type",
      options: {
        list: ["newsletter", "register", "contact"],
      },
    },
  ],
  preview: {
    select: {
      title: "heading",
      subtitle: "title",
    },
  },
};
