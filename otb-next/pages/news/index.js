import { getClient } from "../../lib/sanity.server";
import { useRouter } from "next/router";

import Layout from "../../components/layout";
import {
  categoriesQuery,
  newsCopyQuery,
  settingsQuery,
  socialsQuery,
} from "../../lib/queries";
import HeaderBrandedImage from "@/components/layouts/header/headerBrandedImage";
import ContentTwoColumnsImage from "@/components/layouts/content/contentTwoColumnsImage";

export default function News({ data }) {
  const router = useRouter();

  return router.isFallback ? (
    <p>Loading...</p>
  ) : (
    <Layout data={data}>
      <HeaderBrandedImage title="News" />
      <ContentTwoColumnsImage />
    </Layout>
  );
}

export async function getServerSideProps({ params, preview = false }) {
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
