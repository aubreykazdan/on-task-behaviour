import { getClient } from "../lib/sanity.server";
import { useRouter } from "next/router";

import Layout from "../components/layout";
import {
  aboutQuery,
  categoriesQuery,
  settingsQuery,
  socialsQuery,
} from "../lib/queries";
import Content from "../components/content";

export default function About({ data }) {
  const router = useRouter();

  const { aboutCopy } = data;
  const { content, title, image, alt } = aboutCopy;

  return (
    <Layout data={data}>
      <div className="">
        <p className="text-3xl">{title}</p>
        <div className="w-2/3">
          <Content blocks={content} />
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ preview = false }) {
  const categories = await getClient(preview).fetch(categoriesQuery);
  const settings = await getClient(preview).fetch(settingsQuery);
  const socials = await getClient(preview).fetch(socialsQuery);
  const aboutCopy = await getClient(preview).fetch(aboutQuery);
  return {
    props: {
      preview,
      data: {
        aboutCopy,
        settings,
        categories,
        socials,
      },
    },
  };
}
