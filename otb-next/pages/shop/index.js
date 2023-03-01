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

      {/* <ContentTwoColumnsImage
        title="Ready for the New Year"
        imgSrc="/assets/storefront.png"
        imgAlt="cat toes"
      >
        <div className="mx-auto max-w-prose text-base lg:max-w-none">
          <p className="text-lg text-gray-500">
            Currently all of our retail merchandise, which typically ranges from
            in house handmade goods, to unique clothing designs on consignment,
            is available in person only at 1124 College St in Toronto.
          </p>
        </div>
        <div className="prose prose-indigo mx-auto mt-5 text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
          <p>
            Keep watching this space for updates as we prepare to launch our
            online shop. If you would like to inquire about selling something
            here or in person, please visit our{" "}
            <Link href="/contact" className="underline">
              Contact page.
            </Link>
          </p>
        </div>
      </ContentTwoColumnsImage> */}
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
