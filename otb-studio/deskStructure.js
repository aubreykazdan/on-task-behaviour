import S from "@sanity/desk-tool/structure-builder";
import {
  AiFillTwitterCircle,
  AiFillSetting,
  AiFillCopy,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { MdLink } from "react-icons/md";
import client from "part:@sanity/base/client";
import EditIcon from "part:@sanity/base/edit-icon";

const getCategoryMenuItems = (id) => {
  const customEditButton = S.menuItem()
    .icon(EditIcon)
    .title(`Edit Category`)
    .showAsAction({ whenCollapsed: true })
    .intent({
      type: `edit`,
      params: { id, type: `category` },
    });

  const defaultItems = S.documentTypeList(`category`).getMenuItems();
  return [...defaultItems, customEditButton];
};

const subCategoryList = async (categoryId) => {
  const category = await client.getDocument(categoryId);

  return S.documentTypeList(`category`)
    .title(category.name)
    .filter("parent._ref == $categoryId && _type == $type")
    .params({ categoryId, type: "category" })
    .menuItems(getCategoryMenuItems(categoryId))
    .canHandleIntent(() => false)
    .initialValueTemplates([
      S.initialValueTemplateItem(`subCategory`, {
        parentCategoryId: categoryId,
      }),
    ])
    .child(subCategoryList);
};

export default () =>
  S.list()
    .title("Base")
    .items([
      S.documentListItem()
        .title("General Settings")
        .icon(AiFillSetting)
        .id("siteSettings")
        .schemaType("siteSettings"),

      S.documentListItem()
        .id("socials")
        .schemaType("socials")
        .title("Socials")
        .icon(AiFillTwitterCircle),

      S.divider(),

      S.listItem()
        .title(`Categories`)
        .child(
          S.documentTypeList(`category`)
            .title(`Categories`)
            .filter('_type == "category" && !defined(parent)')
            .canHandleIntent(() => false)
            .child(subCategoryList)
        ),

      S.divider(),

      S.listItem()
        .title("Shop Products")
        .child(S.documentTypeList("product").title("Shop Products")),

      S.documentListItem()
        .id("eventsList")
        .schemaType("eventsList")
        .title("Events List"),

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
          "category",
          "siteSettings",
          "navMenu",
          "cta",
          "socials",
          "page",
          "product",
          "category",
          "event",
          "eventsList",
          "gallery",
          "twi",
        ].includes(listItem.getId());
      }),
    ]);
