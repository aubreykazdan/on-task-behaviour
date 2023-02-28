import { getClient } from "../lib/sanity.server";

import Layout from "../components/layout";
import Container from "@/components/container";
import Link from "next/link";
import HeroImageSplit from "@/components/layouts/hero/heroImageSplit";
import CenteredImageCTA from "@/components/layouts/cta/centeredImageCTA";

export default function Home({ data }) {
  return (
    <Layout>
      <div className="pb-8 sm:pb-16">
        <HeroImageSplit />
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
  return {
    props: {
      preview,
      data: {},
    },
  };
}
