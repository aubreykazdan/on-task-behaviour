import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import blockContent from "./arrays/blockContent";
import siteSettings from "./documents/siteSettings";
import event from "./documents/event";
import product from "./documents/product";
import cta from "./objects/cta";
import form from "./objects/form";
import gallery from "./documents/gallery";
import twi from "./objects/twi";
import eventsList from "./documents/events";
import homeCopy from "./documents/homeCopy";
import aboutCopy from "./documents/aboutCopy";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    // your types here
    form,
    blockContent,
    siteSettings,
    event,
    eventsList,
    product,
    cta,
    gallery,
    twi,
    homeCopy,
    aboutCopy,
  ]),
});
