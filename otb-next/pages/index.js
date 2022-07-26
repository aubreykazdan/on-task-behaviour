import { getClient } from "../lib/sanity.server";
import {
  eventsQuery,
  homeQuery,
  mainNavQuery,
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
      <h1>This is a page</h1>
    </div>
  );
}

export async function getServerSideProps({ preview = false }) {
  const page = await getClient(preview).fetch(homeQuery);
  const settings = await getClient(preview).fetch(siteSettingsQuery);
  const mainNav = await getClient(preview).fetch(mainNavQuery);
  const socials = await getClient(preview).fetch(socialsQuery);
  const events = await getClient(preview).fetch(eventsQuery);

  return {
    props: {
      page,
      events,
      settings,
      mainNav,
      socials,
      preview,
    },
  };
}
