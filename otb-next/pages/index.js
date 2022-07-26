import { getClient } from "../lib/sanity.server";
import { navQuery, settingsQuery, socialsQuery } from "../lib/queries";

import Meta from "../components/meta";

export default function Home({ data }) {
  const { settings } = data;
  return (
    <div>
      <Meta settings={settings} />
      {/* <Header mainNav={mainNav} socials={socials} logo={siteLogo} /> */}
      <h1 className="text-3xl">On Task Behaviour</h1>
    </div>
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
