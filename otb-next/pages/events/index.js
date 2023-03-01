import { getClient } from "../../lib/sanity.server";
import { useRouter } from "next/router";

import Layout from "../../components/layout";
import HeaderBrandedImage from "@/components/layouts/header/headerBrandedImage";
import EventSplitWithImage from "@/components/layouts/event/eventSplitWithImage";
import Container from "@/components/container";
import { eventsQuery } from "@/lib/queries";

export default function Events({ data }) {
  const router = useRouter();
  const { eventsList } = data;
  const { eventItems } = eventsList;

  return router.isFallback ? (
    <p>Loading...</p>
  ) : (
    <Layout data={data}>
      <HeaderBrandedImage title="Events" />
      <section className="divide-y-2 divide-accent">
        {eventItems ? (
          eventItems.map((item) => {
            return (
              <div key={item._key}>
                <EventSplitWithImage event={item} />
              </div>
            );
          })
        ) : (
          <div className="py-8 sm:py-16">
            <Container>
              <h3>Stay tuned for future events here...</h3>
            </Container>
          </div>
        )}
      </section>
    </Layout>
  );
}

export async function getServerSideProps({ params, preview = false }) {
  const eventsList = await getClient(preview).fetch(eventsQuery);
  return {
    props: {
      preview,
      data: {
        eventsList,
      },
    },
  };
}
