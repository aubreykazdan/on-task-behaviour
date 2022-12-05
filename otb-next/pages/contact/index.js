import { getClient } from "../../lib/sanity.server";
import { useRouter } from "next/router";

import Layout from "../../components/layout";
import {
  categoriesQuery,
  contactQuery,
  settingsQuery,
  socialsQuery,
} from "../../lib/queries";
import Content from "@/components/sanityContent";
import HeaderBrandedImage from "@/components/layouts/header/headerBrandedImage";
import ContactFourColumn from "@/components/layouts/contact/contactFourColumn";

export default function Contact({ data }) {
  const router = useRouter();

  return router.isFallback ? (
    <p>Loading...</p>
  ) : (
    <Layout data={data}>
      <HeaderBrandedImage title="Contact Us" />
      <ContactFourColumn />
    </Layout>
  );
}

export async function getServerSideProps({ params, preview = false }) {
  const contactCopy = await getClient(preview).fetch(contactQuery);
  return {
    props: {
      preview,
      data: {
        contactCopy,
      },
    },
  };
}
