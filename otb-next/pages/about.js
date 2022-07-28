import { getClient } from "../lib/sanity.server";
import { useRouter } from "next/router";

import Layout from "../components/layout";
import { categoriesQuery, settingsQuery, socialsQuery } from "../lib/queries";

export default function About({ data }) {
  const router = useRouter();

  const { settings, categories, socials } = data;
  return (
    <Layout data={data}>
      <div className="">
        <p className="text-3xl">About</p>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ preview = false }) {
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
