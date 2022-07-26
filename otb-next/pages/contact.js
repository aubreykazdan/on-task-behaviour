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
      <div>
        <span>Send love letters to:</span>
        <p>Canada: 1124 College St, Toronto ON M6H 1B6</p>
        <p>US: PO Box 1153 Ogdensburg NY 13669</p>
      </div>
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
