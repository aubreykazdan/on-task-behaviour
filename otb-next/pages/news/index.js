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
          title="Our Progress"
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
              <li>Monday: By appointment only</li>
              <li>Tuesday: By appointment only</li>
              <li>
                Wednesday: 12pm - 7pm{" "}
                <span className="italic block text-sm ml-4">
                  * Open later for events
                </span>
              </li>
              <li>
                Thursday: 12pm - 7pm
                <span className="italic block text-sm ml-4">
                  * Open later for events
                </span>
              </li>
              <li>
                Friday: 12pm - 7pm{" "}
                <span className="italic block text-sm ml-4">
                  * Open later for events
                </span>
              </li>
              <li>
                Saturday: 12pm - 7pm{" "}
                <span className="italic block text-sm ml-4">
                  * Open later for events
                </span>
              </li>
              <li>
                Sunday: 12pm - 7pm{" "}
                <span className="italic block text-sm ml-4">
                  * Open later for events
                </span>
              </li>
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
