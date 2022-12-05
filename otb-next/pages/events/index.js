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
import HeaderBrandedImage from "@/components/layouts/header/headerBrandedImage";
import EventSplitWithImage from "@/components/layouts/event/eventSplitWithImage";
import Container from "@/components/container";

export default function Events({ data }) {
  const router = useRouter();
  const { eventsList } = data;
  const { eventItems } = eventsList;

  return router.isFallback ? (
    <p>Loading...</p>
  ) : (
    <Layout data={data}>
      <HeaderBrandedImage title="Events" />
      {eventItems ? (
        eventItems.map((item) => {
          return <EventSplitWithImage key={item._key} event={item} />;
        })
      ) : (
        <>
          <Container>
            <h3>Stay tuned for future events here...</h3>
          </Container>
        </>
      )}
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
