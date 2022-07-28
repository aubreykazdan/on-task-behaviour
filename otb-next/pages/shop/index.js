import { getClient } from "../../lib/sanity.server";
import { useRouter } from "next/router";

import Layout from "../../components/layout";
import {
  categoriesQuery,
  settingsQuery,
  shopQuery,
  socialsQuery,
} from "../../lib/queries";
import Img from "../../components/img";
import Content from "../../components/content";

export default function Shop({ data }) {
  const router = useRouter();
  const { shopCopy } = data;
  const { content, title, image, alt } = shopCopy;

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
    </Layout>
  );
}

export async function getServerSideProps({ params, preview = false }) {
  const categories = await getClient(preview).fetch(categoriesQuery);
  const settings = await getClient(preview).fetch(settingsQuery);
  const socials = await getClient(preview).fetch(socialsQuery);
  const shopCopy = await getClient(preview).fetch(shopQuery);
  return {
    props: {
      preview,
      data: {
        shopCopy,
        settings,
        categories,
        socials,
      },
    },
  };
}
