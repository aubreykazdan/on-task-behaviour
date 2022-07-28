import { getClient } from "../../lib/sanity.server";
import { useRouter } from "next/router";

import Layout from "../../components/layout";
import {
  categoriesQuery,
  galleryQuery,
  settingsQuery,
  socialsQuery,
} from "../../lib/queries";
import Photo from "../../components/photo";
import Content from "../../components/content";
import Img from "../../components/img";

export default function Gallery({ data }) {
  const router = useRouter();
  console.log(data);
  const { galleryItems } = data;
  const { items } = galleryItems;

  return router.isFallback ? (
    <p>Loading...</p>
  ) : (
    <Layout data={data}>
      <div className="">
        <p className="text-3xl">{galleryItems.title}</p>
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
  return {
    props: {
      preview,
      data: {
        galleryItems,
        settings,
        categories,
        socials,
      },
    },
  };
}
