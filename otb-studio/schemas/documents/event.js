export default {
  title: "Event",
  name: "event",
  type: "document",
  fields: [
    {
      title: "Start Time + Date",
      name: "startDate",
      type: "datetime",
      options: {
        dateFormat: "YYYY-MM-DD",
        timeFormat: "HH:mm",
        timeStep: 15,
        calendarTodayLabel: "Today",
      },
    },
    {
      title: "End Time + Date",
      name: "endDate",
      type: "datetime",
      description:
        "OPTIONAL: If there is no end time, only the start time will show on the site.",
      options: {
        dateFormat: "YYYY-MM-DD",
        timeFormat: "HH:mm",
        timeStep: 15,
        calendarTodayLabel: "Today",
      },
    },
    {
      title: "Event Name *",
      name: "title",
      description: "The main title for the event listing.",
      type: "string",
    },
    {
      title: "Description",
      name: "content",
      type: "array",
      of: [{ type: "block" }],
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
      name: "imageAlt",
      title: "Image Alternative Text",
      type: "string",
      description: "Description of image for accessibility",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Ticket Price",
      name: "ticketPrice",
      description:
        "Ex/ $5, Pay What You Can, Donations Ranging from $10-$20, FREE",
      type: "string",
    },
    {
      name: "ticketUrl",
      title: "Ticket Purchase Link",
      type: "url",
      description:
        "OPTIONAL: Include link for ticket purchasing. IMPORTANT NOTE: Please preface link with http:// or https://",
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
