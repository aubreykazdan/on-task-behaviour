import { getClient } from "../../lib/sanity.server";
import { useRouter } from "next/router";

import Layout from "../../components/layout";
import HeaderBrandedImage from "@/components/layouts/header/headerBrandedImage";
import FeatureWithScreenshot from "@/components/layouts/features/featureWithScreenshot";

export default function News({ data }) {
  const router = useRouter();

  return router.isFallback ? (
    <p>Loading...</p>
  ) : (
    <Layout data={data}>
      <HeaderBrandedImage title="News" />

      <div className="py-8 sm:py-16">
        <FeatureWithScreenshot
          title="Our Process"
          imageSrc="/assets/cat-toes.png"
          imageAlt="Cat lying down on a blanket."
        >
          <p>
            <span className="font-bold text-accent-dark">We're Back!</span>{" "}
            While we work to re-open in Los Angeles in the near future, please
            feel welome to visit us in our newest space at 1124 College Street
            in Toronto, Ontario, Canada! NOW OPEN.
          </p>
          <p className="mt-4">Our hours are as follows:</p>
          <div className="content-section">
            <ul className="mt-4">
              <li>Tuesday: 12pm - 7pm</li>
              <li>Wednesday: 12pm - 7pm</li>
              <li>Thursday: 12pm - 8pm</li>
              <li>Friday: 12pm - 8pm</li>
              <li>Saturday: 11am - 8pm</li>
              <li>Sunday: 11am - 8pm</li>
              <li>Monday: Closed</li>
            </ul>
          </div>
        </FeatureWithScreenshot>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ params, preview = false }) {
  return {
    props: {
      preview,
      data: {},
    },
  };
}
