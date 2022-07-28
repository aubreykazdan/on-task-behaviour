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
import Content from "../../components/content";
import Img from "../../components/img";

export default function Events({ data }) {
  const router = useRouter();
  const { eventsCopy } = data;
  const { content, title, image, alt } = eventsCopy;

  return router.isFallback ? (
    <p>Loading...</p>
  ) : (
    <Layout data={data}>
      <div className="flex flex-col lg:flex-row lg:justify-center lg:space-x-4">
        <div className="mb-4 lg:min-w-600 max-w-full flex justify-center">
          <Img image={image} alt={alt} />
        </div>
        <div className="mb-4">
          <p className="text-3xl uppercase">{title}</p>
          <Content blocks={content} />
        </div>
      </div>
      <div className="border py-10"></div>
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
