export const sanityConfig = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "agp8qw4g",
  apiVersion: "v2021-10-21",
  token: process.env.SANITY_API_TOKEN,
  useCdn: true,
};
