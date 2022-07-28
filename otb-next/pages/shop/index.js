import { getClient } from "../../lib/sanity.server";
import { useRouter } from "next/router";

import Layout from "../../components/layout";
import {
  categoriesQuery,
  settingsQuery,
  shopQuery,
  socialsQuery,
} from "../../lib/queries";

export default function Shop({ data }) {
  const router = useRouter();
  const { shopCopy } = data;

  return router.isFallback ? (
    <p>Loading...</p>
  ) : (
    <Layout data={data}>
      <div className="">
        <p className="text-3xl">Shop</p>
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
