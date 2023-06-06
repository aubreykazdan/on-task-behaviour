import { getClient } from "../lib/sanity.server";

import Layout from "../components/layout";
import HeroImageSplit from "@/components/layouts/hero/heroImageSplit";
import CenteredImageCTA from "@/components/layouts/cta/centeredImageCTA";
import FeatureWithScreenshot from "@/components/layouts/features/featureWithScreenshot";
import { homeCopyQuery } from "@/lib/queries";

export default function Home({ data }) {
  const { homeCopy } = data;
  console.log(homeCopy);
  return (
    <Layout>
      <div className="pb-8 sm:pb-16">
        <HeroImageSplit
          title={homeCopy.heroTitle}
          content={homeCopy.heroContent}
          image={homeCopy.heroImage}
        />
      </div>

      <div className="pb-8 sm:pb-16">
        <FeatureWithScreenshot
          flipped
          title="We're Back!"
          imageSrc="/assets/cat-toes.png"
          imageAlt="Cat lying down on a blanket."
        >
          <p>
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

      <div className="pb-8 sm:pb-16">
        <CenteredImageCTA
          title="Check out our events"
          description="Check out our schedule and see what's in store."
          buttonText="All Events"
          buttonPath="/events"
          ariaLabel="Go to events page."
        />
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ preview = false }) {
  const homeCopy = await getClient(preview).fetch(homeCopyQuery);
  return {
    props: {
      preview,
      data: { homeCopy },
    },
  };
}
