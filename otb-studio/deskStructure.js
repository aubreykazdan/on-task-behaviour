import S from "@sanity/desk-tool/structure-builder";
import { AiFillTwitterCircle, AiFillSetting } from "react-icons/ai";

export default () =>
  S.list()
    .title("Base")
    .items([
      S.documentListItem()
        .title("General Settings")
        .icon(AiFillSetting)
        .id("siteSettings")
        .schemaType("siteSettings"),

      S.divider(),

      S.listItem()
        .title("Shop Products")
        .child(S.documentTypeList("product").title("Shop Products")),

      S.documentListItem().id("events").schemaType("events").title("Events"),

      S.documentListItem()
        .id("gallery")
        .schemaType("gallery")
        .title("Gallery List"),

      S.divider(),

      // S.documentListItem()
      // .id("aboutCopy")
      // .schemaType("aboutCopy")
      // .title("About"),

      ...S.documentTypeListItems().filter((listItem) => {
        return ![
          "siteSettings",
          "navMenu",
          "cta",
          "socials",
          "page",
          "product",
          "event",
          "events",
          "gallery",
          "twi",
        ].includes(listItem.getId());
      }),
    ]);
