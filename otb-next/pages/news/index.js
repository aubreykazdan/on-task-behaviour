import { getClient } from "../../lib/sanity.server";
import { useRouter } from "next/router";

import Layout from "../../components/layout";
import {
  categoriesQuery,
  newsCopyQuery,
  settingsQuery,
  socialsQuery,
} from "../../lib/queries";
import TextWithIllustration from "@/components/sections/twi";

export default function News({ data }) {
  const router = useRouter();

  const { newsCopy } = data;

  return router.isFallback ? (
    <p>Loading...</p>
  ) : (
    <Layout data={data}>
      <TextWithIllustration copy={newsCopy} />
    </Layout>
  );
}

export async function getServerSideProps({ params, preview = false }) {
  const categories = await getClient(preview).fetch(categoriesQuery);
  const settings = await getClient(preview).fetch(settingsQuery);
  const socials = await getClient(preview).fetch(socialsQuery);
  const newsCopy = await getClient(preview).fetch(newsCopyQuery);
  return {
    props: {
      preview,
      data: {
        newsCopy,
        settings,
        categories,
        socials,
      },
    },
  };
}
