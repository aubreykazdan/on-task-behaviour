export default {
  title: "Event",
  name: "event",
  type: "document",
  fields: [
    {
      title: "Start Date",
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
      title: "End Date",
      name: "endDate",
      type: "datetime",
      options: {
        dateFormat: "YYYY-MM-DD",
        timeFormat: "HH:mm",
        timeStep: 15,
        calendarTodayLabel: "Today",
      },
    },
    {
      title: "Event Name *",
      name: "eventName",
      description: "The main title for the event listing.",
      type: "string",
    },
    {
      name: "eventImage",
      title: "Event Image",
      type: "image",
      description: "Upload the largest scale image for the event",
      options: {
        hotspot: true,
      },
    },
    {
      name: "imageAlt",
      title: "Image Alt",
      type: "string",
      description: "Description of image for accessibility",
    },
    {
      title: "Event Ticket URL",
      name: "ticketURL",
      type: "url",
    },
    {
      title: "Ticket Status",
      name: "ticketStatus",
      type: "string",
      options: {
        list: ["Buy Tickets", "Sold Out", "Presale Sold Out"],
        layout: "radio",
      },
    },
    {
      title: "Event Facebook URL",
      name: "eventFacebookURL",
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
      title: "eventName",
      subtitle: "startDate",
      media: "eventImage",
    },
  },
};
