import { getClient } from "../../lib/sanity.server";
import { useRouter } from "next/router";

import Layout from "../../components/layout";
import HeaderBrandedImage from "@/components/layouts/header/headerBrandedImage";
import ContactCard from "@/components/layouts/contact/contactCard";

export default function Contact({ data }) {
  const router = useRouter();

  return router.isFallback ? (
    <p>Loading...</p>
  ) : (
    <Layout data={data}>
      <HeaderBrandedImage title="Contact Us" />
      <div className="py-8 sm:py-16">
        <ContactCard />
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
