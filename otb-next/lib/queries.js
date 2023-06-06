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

export const homeCopyQuery = `
*[_type == "homeCopy"][0]{
  ...,
  heroImage{
    alt,
    asset,
    crop,
    hotspot,
    "aspectRatio": asset->metadata.dimensions.aspectRatio,
    "height": asset->metadata.dimensions.height,
    "width": asset->metadata.dimensions.width,
  },
  imageTwo{
    alt,
    asset,
    crop,
    hotspot,
    "aspectRatio": asset->metadata.dimensions.aspectRatio,
    "height": asset->metadata.dimensions.height,
    "width": asset->metadata.dimensions.width,
  }
}
`;
