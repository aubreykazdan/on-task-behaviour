import { getClient } from "../../lib/sanity.server";
import { useRouter } from "next/router";
import { urlForImage } from "/lib/sanity";

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
import Section from "@/components/section";
import HeaderBrandedImage from "@/components/layouts/header/headerBrandedImage";
import Content from "@/components/content";
import Image from "next/image";
import Container from "@/components/container";
import EventSplitWithImage from "@/components/layouts/event/eventSplitWithImage";

export default function Events({ data }) {
  const router = useRouter();
  const { eventsList } = data;
  const { eventItems } = eventsList;
  console.log(eventItems);

  return router.isFallback ? (
    <p>Loading...</p>
  ) : (
    <Layout data={data}>
      <HeaderBrandedImage title="Events" />
      <EventSplitWithImage />
      {/* {eventItems &&
        eventItems.map((item) => {
          const { _key, image, alt, title, content } = item;
          const { asset, height, width, crop, hotspot } = image;
          return (
            <Container key={_key}>
              <div></div>
            </Container>
          );
        })} */}
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

{
  /* <Section container key={_key}>
<div className="grid grid-cols-1 lg:grid-cols-2 mb-4">
  <div className="lg:py-4 space-y-4 mb-4">
    <h3 className="text-3xl">{title}</h3>
    <Content blocks={content} />
  </div>
  <div className="block relative min-h-300 lg:min-h-500 mb-4">
    <Image
      alt={alt}
      layout="fill"
      objectFit="cover"
      src={urlForImage(asset).url()}
    />
  </div>
</div>
</Section> */
}
