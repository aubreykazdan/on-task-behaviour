import { getClient } from "../lib/sanity.server";
import { useRouter } from "next/router";

import Layout from "../components/layout";
import { categoriesQuery, settingsQuery, socialsQuery } from "../lib/queries";
import Header from "../components/sections/header";
import Link from "next/link";

export default function Contact({ data }) {
  const router = useRouter();

  const { settings, categories } = data;
  return (
    <Layout>
      <Header categories={categories} />

      <div>This is the contact page</div>
    </Layout>
  );
}

export async function getServerSideProps({ params, preview = false }) {
  const categories = await getClient(preview).fetch(categoriesQuery);
  const settings = await getClient(preview).fetch(settingsQuery);
  const socials = await getClient(preview).fetch(socialsQuery);
  return {
    props: {
      preview,
      data: {
        settings,
        categories,
        socials,
      },
    },
  };
}
