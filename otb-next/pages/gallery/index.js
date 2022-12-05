import { getClient } from "../../lib/sanity.server";
import { useRouter } from "next/router";

import Layout from "../../components/layout";
import { galleryQuery } from "../../lib/queries";
import HeaderBrandedImage from "@/components/layouts/header/headerBrandedImage";
import Container from "@/components/container";

export default function Gallery({ data }) {
  const router = useRouter();
  // const { galleryItems } = data;
  // const { items } = galleryItems;

  return router.isFallback ? (
    <p>Loading...</p>
  ) : (
    <Layout data={data}>
      <HeaderBrandedImage title="Gallery" />
      <Container>
        <h2>Check back later for updates...</h2>
      </Container>
    </Layout>
  );
}

export async function getServerSideProps({ params, preview = false }) {
  const galleryItems = await getClient(preview).fetch(galleryQuery);
  return {
    props: {
      preview,
      data: {
        galleryItems,
      },
    },
  };
}
