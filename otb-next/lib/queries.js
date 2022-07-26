export const settingsQuery = `
*[_type == "siteSettings"][0]{
  ...,
  ogImage {
  asset->
  }
}
`;

export const socialsQuery = `
*[_type == "socials"][0]{
  twitter,
  facebook,
  youtube
}
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
