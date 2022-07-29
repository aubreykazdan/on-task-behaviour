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
import Content from "../../components/content";
import Img from "../../components/img";
import TextWithIllustration from "../../components/twi";
import Container from "../../components/container";

export default function Gallery({ data }) {
  const router = useRouter();
  const { galleryItems, galleryCopy } = data;
  const { items } = galleryItems;
  const { content, title, image, alt } = galleryCopy;

  return router.isFallback ? (
    <p>Loading...</p>
  ) : (
    <Layout data={data}>
      <TextWithIllustration copy={galleryCopy} />
      <div className="border">
        <Container event></Container>
      </div>
      <div>
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
