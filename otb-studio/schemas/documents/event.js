export default {
  title: "Event",
  name: "event",
  type: "document",
  fields: [
    {
      title: "Date",
      name: "startDate",
      type: "datetime",
      options: {
        dateFormat: "YYYY-MM-DD",
        timeFormat: "HH:mm",
        timeStep: 15,
        calendarTodayLabel: "Today",
      },
    },
    // {
    //   title: "End Date",
    //   name: "endDate",
    //   type: "datetime",
    //   options: {
    //     dateFormat: "YYYY-MM-DD",
    //     timeFormat: "HH:mm",
    //     timeStep: 15,
    //     calendarTodayLabel: "Today",
    //   },
    // },
    {
      title: "Event Name *",
      name: "title",
      description: "The main title for the event listing.",
      type: "string",
    },
    {
      title: "Description",
      name: "description",
      type: "string",
    },
    {
      title: "Cost",
      name: "cost",
      type: "number",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      description: "Upload the largest scale image for the event",
      options: {
        hotspot: true,
      },
    },
    {
      name: "alt",
      title: "Image Alt",
      type: "string",
      description: "Description of image for accessibility",
    },
    {
      title: "Event Ticket URL",
      name: "ticketURL",
      type: "url",
    },
  ],
  orderings: [
    {
      title: "Event Date, New",
      name: "dateDesc",
      by: [{ field: "startDate", direction: "desc" }],
    },
    {
      title: "Event Date, Old",
      name: "dateAsc",
      by: [{ field: "startDate", direction: "asc" }],
    },
    {
      title: "Title",
      name: "title",
      by: [{ field: "title", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "startDate",
      media: "ismage",
    },
  },
};
