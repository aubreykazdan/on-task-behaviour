import { getClient } from "../../lib/sanity.server";
import { useRouter } from "next/router";

import Layout from "../../components/layout";
import {
  categoriesQuery,
  donateQuery,
  settingsQuery,
  socialsQuery,
} from "../../lib/queries";
import TextWithIllustration from "../../components/twi";

export default function Donate({ data }) {
  const router = useRouter();
  const { donateCopy } = data;

  return router.isFallback ? (
    <p>Loading...</p>
  ) : (
    <Layout data={data}>
      <TextWithIllustration copy={donateCopy} />
    </Layout>
  );
}

export async function getServerSideProps({ params, preview = false }) {
  const categories = await getClient(preview).fetch(categoriesQuery);
  const settings = await getClient(preview).fetch(settingsQuery);
  const socials = await getClient(preview).fetch(socialsQuery);
  const donateCopy = await getClient(preview).fetch(donateQuery);
  return {
    props: {
      preview,
      data: {
        donateCopy,
        settings,
        categories,
        socials,
      },
    },
  };
}
