export const settingsQuery = `
*[_type == "siteSettings"][0]{
  ...,
  ogImage {
  asset->
  }
}
`;

export const socialsQuery = `
*[_type == "socials"][0]
`;

export const navQuery = `
*[_type == "navMenu"][0]{
  items[]{
    _key,
    link,
    title,
    "path": path->slug.current
  }
}
`;

export const aboutQuery = `
*[_type == "aboutCopy"][0]{
  ...,
  image{
    "asset": asset->url,
    crop,
    hotspot,
    "aspectRatio": asset->metadata.dimensions.aspectRatio,
    "height": asset->metadata.dimensions.height,
    "width": asset->metadata.dimensions.width,
  },
}
`;

export const homeQuery = `
*[_type == "homeCopy"][0]{
  ...,
  image{
    "asset": asset->url,
    crop,
    hotspot,
    "aspectRatio": asset->metadata.dimensions.aspectRatio,
    "height": asset->metadata.dimensions.height,
    "width": asset->metadata.dimensions.width,
  },
}
`;

export const contactQuery = `
*[_type == "contactCopy"][0]
`;

export const galleryQuery = `
*[_type == "gallery"][0]{
  title,
  "items":galleryItems[]{
    ...,
    image{
    "asset": asset->url,
    crop,
    hotspot,
    "aspectRatio": asset->metadata.dimensions.aspectRatio,
    "height": asset->metadata.dimensions.height,
    "width": asset->metadata.dimensions.width,
  },
 }
}
`;

export const galleryCopyQuery = `
*[_type == "galleryCopy"][0]{
  ...,
  image{
    "asset": asset->url,
    crop,
    hotspot,
    "aspectRatio": asset->metadata.dimensions.aspectRatio,
    "height": asset->metadata.dimensions.height,
    "width": asset->metadata.dimensions.width,
  },
}
`;

export const shopQuery = `
*[_type == "shopCopy"][0]{
  ...,
  image{
    "asset": asset->url,
    crop,
    hotspot,
    "aspectRatio": asset->metadata.dimensions.aspectRatio,
    "height": asset->metadata.dimensions.height,
    "width": asset->metadata.dimensions.width,
  },
}
`;

export const donateQuery = `
*[_type == "donateCopy"][0]{
  ...,
  image{
    "asset": asset->url,
    crop,
    hotspot,
    "aspectRatio": asset->metadata.dimensions.aspectRatio,
    "height": asset->metadata.dimensions.height,
    "width": asset->metadata.dimensions.width,
  },
}
`;

export const eventsCopyQuery = `
*[_type == "eventsCopy"][0]{
  ...,
  image{
    "asset": asset->url,
    crop,
    hotspot,
    "aspectRatio": asset->metadata.dimensions.aspectRatio,
    "height": asset->metadata.dimensions.height,
    "width": asset->metadata.dimensions.width,
  },
}
`;

export const newsCopyQuery = `
*[_type == "newsCopy"][0]{
  ...,
  image{
    "asset": asset->url,
    crop,
    hotspot,
    "aspectRatio": asset->metadata.dimensions.aspectRatio,
    "height": asset->metadata.dimensions.height,
    "width": asset->metadata.dimensions.width,
  },
}
`;

export const eventsQuery = `
*[_type == "events"][0]{
  ...,
  eventItems[] | order(startDate asc){
    ...,
    image{
    asset,
    crop,
    hotspot,
    "aspectRatio": asset->metadata.dimensions.aspectRatio,
    "height": asset->metadata.dimensions.height,
    "width": asset->metadata.dimensions.width,
  },
  }
}
`;
