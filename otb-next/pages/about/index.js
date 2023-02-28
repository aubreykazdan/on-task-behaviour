import { getClient } from "../../lib/sanity.server";
import { useRouter } from "next/router";

import Layout from "../../components/layout";
import { settingsQuery } from "../../lib/queries";
import HeaderBrandedImage from "@/components/layouts/header/headerBrandedImage";
import FeatureWithScreenshot from "@/components/layouts/features/featureWithScreenshot";

export default function About({ data }) {
  const router = useRouter();

  return router.isFallback ? (
    <p>Loading...</p>
  ) : (
    <Layout data={data}>
      <HeaderBrandedImage title="About Us" />
      <div className="py-8 sm:py-16">
        <FeatureWithScreenshot
          title="Our Process"
          imageSrc="/assets/pug.jpeg"
          imageAlt="Pug under a blanket"
        >
          <p className="text-gray-500">
            <span className="font-bold text-accent">On Task</span> is a
            nonprofit, community project primarily dedicated to supporting those
            struggling to stay focused on what is valuable to them.
          </p>
          <div className="mt-4">
            <p>
              Our primary focus is on creative, entrepreneurial and mental
              health challenges.
            </p>
            <p className="mt-4">
              On Task is a project dedicated to anyone who’s struggled with
              staying focused in the pursuit of their goals and dreams, or felt
              excluded from the traditional methods of "making it."
            </p>
            <p className="mt-4">
              Some of our past and current initiatives include 12 Step meetings
              and other Support Groups, Live Comedy Events, Art Exhibitions,
              Artists Markets, Clothing Swap parties, Arts and Craft Workshops,
              and more.
            </p>
            <p className="mt-4">
              If you have an idea of something you'd like to see, learn, make,
              be or do; we encourage you to reach out to us on our Contact Page
            </p>
          </div>
        </FeatureWithScreenshot>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ preview = false }) {
  const settings = await getClient(preview).fetch(settingsQuery);
  return {
    props: {
      preview,
      data: {
        settings,
      },
    },
  };
}
