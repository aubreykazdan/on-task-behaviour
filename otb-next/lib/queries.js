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

export const categoriesQuery = `
*[_type == "category"] {
  "id": _id,
  title,
  "slug": slug.current,
  "fullPath": fullPath.current,
}
`;

export const categoryOneQuery = `
*[_type == "category" && slug.current == $slug][0] {
  "id": _id,
  title,
  "slug": slug.current,
  "fullPath": fullPath.current,
  ...,
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
