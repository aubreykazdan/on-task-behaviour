import { getClient } from "../../lib/sanity.server";
import { useRouter } from "next/router";
import Link from "next/link";

import Layout from "../../components/layout";
import HeaderBrandedImage from "@/components/layouts/header/headerBrandedImage";
import FeatureWithScreenshot from "@/components/layouts/features/featureWithScreenshot";
import { shopCopyQuery } from "@/lib/queries";
import SanityContent from "@/components/sanityContent";

export default function Shop({ data, products }) {
  const router = useRouter();
  const { shopCopy } = data;

  return router.isFallback ? (
    <p>Loading...</p>
  ) : (
    <Layout data={data}>
      <HeaderBrandedImage title="Shop" />

      <div className="py-8 sm:py-16">
        <FeatureWithScreenshot
          title={shopCopy.title}
          image={shopCopy.image}
          flipped
        >
          <SanityContent blocks={shopCopy.content} />
        </FeatureWithScreenshot>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ params, preview = false }) {
  const shopCopy = await getClient(preview).fetch(shopCopyQuery);
  return {
    props: {
      preview,
      data: { shopCopy },
    },
  };
}
