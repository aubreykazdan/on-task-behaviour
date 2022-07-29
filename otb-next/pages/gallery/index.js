import { getClient } from "../../lib/sanity.server";
import { useRouter } from "next/router";

import Layout from "../../components/layout";
import {
  categoriesQuery,
  galleryCopyQuery,
  galleryQuery,
  settingsQuery,
  socialsQuery,
} from "../../lib/queries";
import TextWithIllustration from "../../components/twi";
import InfoContainer from "../../components/infoContainer";
import EventImg from "../../components/eventImg";

export default function Gallery({ data }) {
  const router = useRouter();
  const { galleryItems, galleryCopy } = data;
  const { items } = galleryItems;
  const { content, title, image, alt } = galleryCopy;

  return router.isFallback ? (
    <p>Loading...</p>
  ) : (
    <Layout data={data}>
      <div className="">
        <TextWithIllustration copy={galleryCopy} />
      </div>
      <div className="border-b mb-4"></div>
      <div>
        {items &&
          items.map((item) => {
            const { _key, alt, image } = item;
            return (
              <div key={_key} className="grid grid-cols-1 lg:grid-cols-2 mb-4">
                <InfoContainer item={item} />
                <EventImg image={image} alt={alt} />
              </div>
            );
          })}
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ params, preview = false }) {
  const categories = await getClient(preview).fetch(categoriesQuery);
  const settings = await getClient(preview).fetch(settingsQuery);
  const socials = await getClient(preview).fetch(socialsQuery);
  const galleryItems = await getClient(preview).fetch(galleryQuery);
  const galleryCopy = await getClient(preview).fetch(galleryCopyQuery);
  return {
    props: {
      preview,
      data: {
        galleryCopy,
        galleryItems,
        settings,
        categories,
        socials,
      },
    },
  };
}
