import { getClient } from "../lib/sanity.server";
import { navQuery, settingsQuery, socialsQuery } from "../lib/queries";

import Meta from "../components/meta";
import Layout from "../components/layout";

export default function Home({ data }) {
  const { settings } = data;
  console.log(settings);
  return (
    <Layout settings={settings}>
      <Meta settings={settings} />
      <h1 className="text-3xl">On Task Behaviour</h1>
    </Layout>
  );
}

export async function getServerSideProps({ preview = false }) {
  const settings = await getClient(preview).fetch(settingsQuery);
  const navigation = await getClient(preview).fetch(navQuery);
  const socials = await getClient(preview).fetch(socialsQuery);

  return {
    props: {
      preview,
      data: {
        settings,
        navigation,
        socials,
      },
    },
  };
}
