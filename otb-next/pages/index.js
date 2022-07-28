import { getClient } from "../lib/sanity.server";
import {
  categoriesQuery,
  navQuery,
  settingsQuery,
  socialsQuery,
} from "../lib/queries";

import Meta from "../components/meta";
import Layout from "../components/layout";

export default function Home({ data }) {
  const { settings, categories, socials } = data;
  return (
    <Layout data={data}>
      <p className="">The quick brown fox jumped over the lazy dog</p>
    </Layout>
  );
}

export async function getServerSideProps({ preview = false }) {
  const settings = await getClient(preview).fetch(settingsQuery);
  const navigation = await getClient(preview).fetch(navQuery);
  const socials = await getClient(preview).fetch(socialsQuery);
  const categories = await getClient(preview).fetch(categoriesQuery);

  return {
    props: {
      preview,
      data: {
        categories,
        settings,
        navigation,
        socials,
      },
    },
  };
}
