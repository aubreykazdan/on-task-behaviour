import { getClient } from "../lib/sanity.server";
import {
  categoriesQuery,
  homeQuery,
  navQuery,
  settingsQuery,
  socialsQuery,
} from "../lib/queries";

import Layout from "../components/layout";
import TextWithIllustration from "../components/twi";

export default function Home({ data }) {
  const { homeCopy } = data;
  return (
    <Layout data={data}>
      <TextWithIllustration copy={homeCopy} />
    </Layout>
  );
}

export async function getServerSideProps({ preview = false }) {
  const settings = await getClient(preview).fetch(settingsQuery);
  const navigation = await getClient(preview).fetch(navQuery);
  const socials = await getClient(preview).fetch(socialsQuery);
  const categories = await getClient(preview).fetch(categoriesQuery);
  const homeCopy = await getClient(preview).fetch(homeQuery);

  return {
    props: {
      preview,
      data: {
        homeCopy,
        categories,
        settings,
        navigation,
        socials,
      },
    },
  };
}
