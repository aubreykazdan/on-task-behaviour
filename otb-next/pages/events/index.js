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
import Container from "../../components/container";
import TextWithIllustration from "../../components/twi";

export default function Events({ data }) {
  const router = useRouter();
  const { eventsCopy, events } = data;

  return router.isFallback ? (
    <p>Loading...</p>
  ) : (
    <Layout data={data}>
      <TextWithIllustration copy={eventsCopy} />
      <div className="border">
        <Container event>
          <h2></h2>
        </Container>
      </div>
      {/* <div>
        {items &&
          items.map((item) => {
            const { _key, alt, content, image, title } = item;
            return (
              <div key={_key}>
                <p>{title}</p>
                <Img image={image} alt={alt} />
                <Content blocks={content} />
              </div>
            );
          })}
      </div> */}
    </Layout>
  );
}

export async function getServerSideProps({ params, preview = false }) {
  const categories = await getClient(preview).fetch(categoriesQuery);
  const settings = await getClient(preview).fetch(settingsQuery);
  const socials = await getClient(preview).fetch(socialsQuery);
  const eventsCopy = await getClient(preview).fetch(eventsCopyQuery);
  const events = await getClient(preview).fetch(eventsQuery);
  return {
    props: {
      preview,
      data: {
        events,
        eventsCopy,
        settings,
        categories,
        socials,
      },
    },
  };
}
