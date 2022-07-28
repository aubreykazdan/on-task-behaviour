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
import Img from "../components/img";

export default function About({ data }) {
  const router = useRouter();

  const { aboutCopy } = data;
  const { content, title, image, alt } = aboutCopy;
  console.log(image);

  return (
    <Layout data={data}>
      <div className="">
        <div className="flex flex-col lg:flex-row lg:space-x-4">
          <div className="mb-4 h-full w-full">
            <Img image={image} alt={alt} />
          </div>
          <div className="mb-4">
            <p className="text-3xl">{title}</p>
            <div className="">
              <Content blocks={content} />
            </div>
          </div>
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
