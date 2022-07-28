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
        .title("Products")
        .child(S.documentTypeList("product").title("Products")),

      S.listItem()
        .title("Events")
        .child(S.documentTypeList("event").title("Events")),

      S.documentListItem().id("gallery").schemaType("gallery").title("Gallery"),

      S.divider(),

      S.documentListItem().id("homeCopy").schemaType("homeCopy").title("Home"),

      S.documentListItem()
        .id("aboutCopy")
        .schemaType("aboutCopy")
        .title("About"),

      S.documentListItem()
        .id("contactCopy")
        .schemaType("contactCopy")
        .title("Contact"),

      ...S.documentTypeListItems().filter((listItem) => {
        return ![
          "aboutCopy",
          "homeCopy",
          "contactCopy",
          "category",
          "siteSettings",
          "navMenu",
          "cta",
          "socials",
          "page",
          "product",
          "category",
          "event",
          "gallery",
          "twi",
        ].includes(listItem.getId());
      }),
    ]);
