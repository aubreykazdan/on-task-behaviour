import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import blockContent from "./arrays/blockContent";
import siteSettings from "./documents/siteSettings";
import event from "./documents/event";
import navMenu from "./documents/navMenu";
import product from "./documents/product";
import cta from "./objects/cta";
import category from "./documents/category";
import socials from "./documents/socials";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    // your types here
    blockContent,
    siteSettings,
    event,
    navMenu,
    product,
    cta,
    category,
    socials,
  ]),
});
