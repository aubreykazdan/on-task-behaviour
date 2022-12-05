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

      S.documentListItem()
        .id("aboutCopy")
        .schemaType("aboutCopy")
        .title("About"),

      S.documentListItem()
        .id("contactCopy")
        .schemaType("contactCopy")
        .title("Contact"),

      S.documentListItem()
        .id("donateCopy")
        .schemaType("donateCopy")
        .title("Donate"),

      S.documentListItem()
        .id("eventsCopy")
        .schemaType("eventsCopy")
        .title("Events"),

      S.documentListItem()
        .id("galleryCopy")
        .schemaType("galleryCopy")
        .title("Gallery"),

      S.documentListItem().id("homeCopy").schemaType("homeCopy").title("Home"),

      S.documentListItem().id("newsCopy").schemaType("newsCopy").title("News"),

      S.documentListItem().id("shopCopy").schemaType("shopCopy").title("Shop"),

      ...S.documentTypeListItems().filter((listItem) => {
        return ![
          "aboutCopy",
          "homeCopy",
          "contactCopy",
          "shopCopy",
          "donateCopy",
          "newsCopy",
          "galleryCopy",
          "eventsCopy",
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
