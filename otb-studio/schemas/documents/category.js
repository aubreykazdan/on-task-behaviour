import client from "part:@sanity/base/client";

export default {
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    },
    {
      name: "name",
      title: "Category Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "title",
      title: "Category Text",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: (doc, options) => options.parent.title,
      },
    },
    {
      name: "fullPath",
      title: "Full Path",
      type: "slug",
      options: {
        source: (doc) => doc,
        slugify: async (doc) => {
          const result = await client.fetch(
            `*[_id == $id][0]{
              "slug": slug.current,
              "parentSlug": parent->fullPath.current,
            }`,
            { id: doc._id }
          );
          if (result.parentSlug == null) {
            return doc.name.toLowerCase().split(" ").join("-");
          } else if (result.parentSlug != null) {
            return `${result.parentSlug}/${result.slug}`;
          } else {
            return null;
          }
        },
      },
    },
    {
      name: "parent",
      type: "reference",
      title: "Parent",
      to: [{ type: "category" }],
      weak: true,
      options: {
        filter: "!defined(parent)",
      },
    },
  ],
  // preview: {
  //   select: {
  //     title: "name",
  //     subtitle: "parent.name",
  //   },
  //   prepare(selection) {
  //     const { title, subtitle } = selection;
  //     return {
  //       title: title,
  //       subtitle: `Parent: ${subtitle ? subtitle : "N/A"}`,
  //     };
  //   },
  // },
  orderings: [
    {
      title: "Manual order",
      name: "manualOrder",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
};
