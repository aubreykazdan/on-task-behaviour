import { getClient } from "../lib/sanity.server";
import {
  eventsQuery,
  homeQuery,
  mainNavQuery,
  navQuery,
  settingsQuery,
  siteSettingsQuery,
  socialsQuery,
} from "../lib/queries";

export default function Home({ page, settings, mainNav, socials, events }) {
  // const { pageBuilder } = page;
  // const { siteLogo, websiteTitle } = settings;
  return (
    <div>
      {/* <Meta page={page} title={websiteTitle} />
      <Header mainNav={mainNav} socials={socials} logo={siteLogo} /> */}
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
