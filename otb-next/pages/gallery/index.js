import { getClient } from "../../lib/sanity.server";
import { useRouter } from "next/router";

import Layout from "../../components/layout";
import HeaderBrandedImage from "@/components/layouts/header/headerBrandedImage";
import Container from "@/components/container";

export default function Gallery({}) {
  const router = useRouter();

  return router.isFallback ? (
    <p>Loading...</p>
  ) : (
    <Layout>
      <HeaderBrandedImage title="Gallery" />
      <div className="py-8 sm:py-16">

      <Container>
        <h2>Check back later for updates...</h2>
      </Container>
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
