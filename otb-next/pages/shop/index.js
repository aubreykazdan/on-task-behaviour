import { getClient } from "../../lib/sanity.server";
import { useRouter } from "next/router";
import Link from "next/link";

import Layout from "../../components/layout";
import HeaderBrandedImage from "@/components/layouts/header/headerBrandedImage";
import FeatureWithScreenshot from "@/components/layouts/features/featureWithScreenshot";

export default function Shop({ data, products }) {
  const router = useRouter();

  return router.isFallback ? (
    <p>Loading...</p>
  ) : (
    <Layout data={data}>
      <HeaderBrandedImage title="Shop" />

      <div className="py-8 sm:py-16">
        <FeatureWithScreenshot
          title="Ready for the New Year"
          imageSrc="/assets/storefront.png"
          imageAlt="Storefront of On Task"
        >
          <p className="text-gray-500">
            Currently all of our retail merchandise, which typically ranges from
            in house handmade goods, to unique clothing designs on consignment,
            is available in person only at 1124 College St in Toronto.
          </p>
          <p className="mt-4">
            Keep watching this space for updates as we prepare to launch our
            online shop. If you would like to inquire about selling something
            here or in person, please visit our
            <span className="nav-animated accent-link">
              <Link href="/contact"> Contact page.</Link>
            </span>
          </p>
        </FeatureWithScreenshot>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ params, preview = false }) {
  return {
    props: {
      preview,
      data: {},
    },
  };
}
