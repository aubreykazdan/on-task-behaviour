import { getClient } from "../../lib/sanity.server";
import { useRouter } from "next/router";

import Layout from "../../components/layout";
import { settingsQuery } from "../../lib/queries";
import HeaderBrandedImage from "@/components/layouts/header/headerBrandedImage";
import ContentTwoColumnsImage from "@/components/layouts/content/contentTwoColumnsImage";
import Link from "next/link";

export default function Shop({ data, products }) {
  const router = useRouter();

  return router.isFallback ? (
    <p>Loading...</p>
  ) : (
    <Layout data={data}>
      <HeaderBrandedImage title="Shop" />
      <ContentTwoColumnsImage
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
      </ContentTwoColumnsImage>
    </Layout>
  );
}

export async function getServerSideProps({ params, preview = false }) {
  const settings = await getClient(preview).fetch(settingsQuery);
  return {
    props: {
      preview,
      data: {
        settings,
      },
    },
  };
}
