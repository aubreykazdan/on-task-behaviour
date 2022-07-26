import SvgPreviewComponent from "../../input/svgPreviewComponent";

export default {
  name: "svgUpload",
  type: "object",
  title: "Client Image Upload",
  fields: [
    {
      type: "",
      name: "source",
      title: "Client SVG Logo",
    },
    {
      type: "slug",
      title: "svgSlug",
    },
  ],
  preview: {
    select: {
      svgHtml: "source",
    },
    component: SvgPreviewComponent,
  },
};
