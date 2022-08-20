import { getClient } from "../../lib/sanity.server";
import { useRouter } from "next/router";

import Layout from "../../components/layout";
import {
  categoriesQuery,
  contactQuery,
  settingsQuery,
  socialsQuery,
} from "../../lib/queries";
import Content from "@/components/content";

export default function Contact({ data }) {
  const router = useRouter();

  const { contactCopy } = data;
  const { content, title } = contactCopy;

  return router.isFallback ? (
    <p>Loading...</p>
  ) : (
    <Layout data={data}>
      <div className="">
        <h3 className="text-3xl text-purple mb-4">{title}</h3>
        <Content blocks={content} />
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ params, preview = false }) {
  const categories = await getClient(preview).fetch(categoriesQuery);
  const settings = await getClient(preview).fetch(settingsQuery);
  const socials = await getClient(preview).fetch(socialsQuery);
  const contactCopy = await getClient(preview).fetch(contactQuery);
  return {
    props: {
      preview,
      data: {
        contactCopy,
        settings,
        categories,
        socials,
      },
    },
  };
}
