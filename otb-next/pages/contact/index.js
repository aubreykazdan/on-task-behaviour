import { getClient } from "../../lib/sanity.server";
import { useRouter } from "next/router";

import Layout from "../../components/layout";
import HeaderBrandedImage from "@/components/layouts/header/headerBrandedImage";
import ContactFourColumn from "@/components/layouts/contact/contactFourColumn";

export default function Contact({ data }) {
  const router = useRouter();

  return router.isFallback ? (
    <p>Loading...</p>
  ) : (
    <Layout data={data}>
      <HeaderBrandedImage title="Contact Us" />
      <div className="py-8 sm:py-16">
        <ContactFourColumn />
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
