import { getClient } from "../lib/sanity.server";

import Layout from "../components/layout";
import HeroImageSplit from "@/components/layouts/hero/heroImageSplit";
import CenteredImageCTA from "@/components/layouts/cta/centeredImageCTA";
import FeatureWithScreenshot from "@/components/layouts/features/featureWithScreenshot";
import { homeCopyQuery } from "@/lib/queries";
import SanityContent from "@/components/sanityContent";

export default function Home({ data }) {
  const { homeCopy } = data;
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
          title={homeCopy.titleTwo}
          image={homeCopy.imageTwo}
        >
          <SanityContent blocks={homeCopy.contentTwo} />
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
