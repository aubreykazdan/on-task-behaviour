import { getClient } from "../lib/sanity.server";
import {
  categoriesQuery,
  homeQuery,
  navQuery,
  settingsQuery,
  socialsQuery,
} from "../lib/queries";

import Layout from "../components/layout";
import Img from "../components/img";
import Content from "../components/content";

export default function Home({ data }) {
  const { homeCopy } = data;
  const { content, title, image, alt } = homeCopy;
  return (
    <Layout data={data}>
      <div className="flex flex-col lg:flex-row lg:space-x-4">
        <div className="mb-4 h-full w-full md:min-w-600">
          <Img image={image} alt={alt} />
        </div>
        <div className="mb-4">
          <p className="text-3xl">{title}</p>
          <div className="">
            <Content blocks={content} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ preview = false }) {
  const settings = await getClient(preview).fetch(settingsQuery);
  const navigation = await getClient(preview).fetch(navQuery);
  const socials = await getClient(preview).fetch(socialsQuery);
  const categories = await getClient(preview).fetch(categoriesQuery);
  const homeCopy = await getClient(preview).fetch(homeQuery);

  return {
    props: {
      preview,
      data: {
        homeCopy,
        categories,
        settings,
        navigation,
        socials,
      },
    },
  };
}
