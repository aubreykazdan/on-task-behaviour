import { getClient } from "../../lib/sanity.server";
import { useRouter } from "next/router";

import Layout from "../../components/layout";
import {
  aboutQuery,
  categoriesQuery,
  settingsQuery,
  socialsQuery,
} from "../../lib/queries";
import Content from "../../components/content";
import Img from "../../components/img";
import TextWithIllustration from "../../components/twi";

export default function About({ data }) {
  const router = useRouter();

  const { aboutCopy } = data;

  return router.isFallback ? (
    <p>Loading...</p>
  ) : (
    <Layout data={data}>
      <TextWithIllustration copy={aboutCopy} />
    </Layout>
  );
}

export async function getServerSideProps({ preview = false }) {
  const categories = await getClient(preview).fetch(categoriesQuery);
  const settings = await getClient(preview).fetch(settingsQuery);
  const socials = await getClient(preview).fetch(socialsQuery);
  const aboutCopy = await getClient(preview).fetch(aboutQuery);
  return {
    props: {
      preview,
      data: {
        aboutCopy,
        settings,
        categories,
        socials,
      },
    },
  };
}
