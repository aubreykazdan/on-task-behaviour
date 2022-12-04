import { getClient } from "../../lib/sanity.server";
import { useRouter } from "next/router";

import Layout from "../../components/layout";
import {
  aboutQuery,
  categoriesQuery,
  settingsQuery,
  socialsQuery,
} from "../../lib/queries";
import HeaderBrandedImage from "@/components/layouts/header/headerBrandedImage";
import ContentSplitImage from "@/components/layouts/content/contentSplitImage";

export default function About({ data }) {
  const router = useRouter();

  return router.isFallback ? (
    <p>Loading...</p>
  ) : (
    <Layout data={data}>
      <HeaderBrandedImage title="About Us" />
      <ContentSplitImage />
    </Layout>
  );
}

export async function getServerSideProps({ preview = false }) {
  const categories = await getClient(preview).fetch(categoriesQuery);
  const settings = await getClient(preview).fetch(settingsQuery);
  const socials = await getClient(preview).fetch(socialsQuery);
  return {
    props: {
      preview,
      data: {
        settings,
        categories,
        socials,
      },
    },
  };
}
