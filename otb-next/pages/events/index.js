import { getClient } from "../../lib/sanity.server";
import { useRouter } from "next/router";

import Layout from "../../components/layout";
import {
  categoriesQuery,
  eventsCopyQuery,
  eventsQuery,
  settingsQuery,
  socialsQuery,
} from "../../lib/queries";
import EventImg from "@/components/eventImg";
import InfoContainer from "@/components/infoContainer";
import TextWithIllustration from "@/components/sections/twi";
import Section from "@/components/section";

export default function Events({ data }) {
  const router = useRouter();
  const { eventsCopy, eventsList } = data;
  const { events } = eventsList;

  return router.isFallback ? (
    <p>Loading...</p>
  ) : (
    <Layout data={data}>
      <TextWithIllustration copy={eventsCopy} />
      <div className="border-b mb-4"></div>
      {events &&
        events.map((item) => {
          const { _key, image, alt } = item;
          return (
            <Section container key={_key}>
              <div className="grid grid-cols-1 lg:grid-cols-2 mb-4">
                <InfoContainer item={item} />
                <EventImg image={image} alt={alt} />
              </div>
            </Section>
          );
        })}
    </Layout>
  );
}

export async function getServerSideProps({ params, preview = false }) {
  const categories = await getClient(preview).fetch(categoriesQuery);
  const settings = await getClient(preview).fetch(settingsQuery);
  const socials = await getClient(preview).fetch(socialsQuery);
  const eventsCopy = await getClient(preview).fetch(eventsCopyQuery);
  const eventsList = await getClient(preview).fetch(eventsQuery);
  return {
    props: {
      preview,
      data: {
        eventsList,
        eventsCopy,
        settings,
        categories,
        socials,
      },
    },
  };
}
