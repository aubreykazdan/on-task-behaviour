import { getClient } from "../lib/sanity.server";
import {
  categoriesQuery,
  homeQuery,
  navQuery,
  settingsQuery,
  socialsQuery,
} from "../lib/queries";

import Layout from "../components/layout";
import TextWithIllustration from "@/components/sections/twi";

export default function Home({ data }) {
  const { homeCopy } = data;
  return (
    <Layout data={data}>
      {/* <TextWithIllustration copy={homeCopy} /> */}
      <main className="lg:relative">
        <div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
            <h1 className="">
              <span className="block xl:inline">Welcome to</span>{" "}
              <span className="block xl:inline">On Task</span>
            </h1>
            <p className="mx-auto max-w-md text-lg sm:text-xl md:max-w-3xl">
              As we launch our second community space in Toronto, we are pleased
              to share our new and improved website so we may better connect and
              share resources with our friends and family around the world.
            </p>
          </div>
        </div>
        <div className="relative h-80 w-full sm:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
          <img
            className="absolute inset-0 h-full w-full object-cover object-right"
            src="/assets/charlotte.png"
            alt=""
          />
        </div>
      </main>
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
