import { getClient } from "../../lib/sanity.server";
import { useRouter } from "next/router";

import Layout from "../../components/layout";
import { aboutCopyQuery, settingsQuery } from "../../lib/queries";
import HeaderBrandedImage from "@/components/layouts/header/headerBrandedImage";
import FeatureWithScreenshot from "@/components/layouts/features/featureWithScreenshot";
import SanityContent from "@/components/sanityContent";

export default function About({ data }) {
  const router = useRouter();
  const { aboutCopy } = data;

  return router.isFallback ? (
    <p>Loading...</p>
  ) : (
    <Layout data={data}>
      <HeaderBrandedImage title="About Us" />
      <div className="py-8 sm:py-16">
        <FeatureWithScreenshot
          title="Our Process"
          image={aboutCopy.image}
          flipped
        >
          <SanityContent blocks={aboutCopy.content} />
        </FeatureWithScreenshot>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ preview = false }) {
  const settings = await getClient(preview).fetch(settingsQuery);
  const aboutCopy = await getClient(preview).fetch(aboutCopyQuery);
  return {
    props: {
      preview,
      data: {
        settings,
        aboutCopy,
      },
    },
  };
}
