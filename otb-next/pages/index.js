import { getClient } from "../lib/sanity.server";

import Layout from "../components/layout";
import Container from "@/components/container";
import Link from "next/link";

export default function Home({ data }) {
  return (
    <Layout>
      <section className="lg:relative">
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
      </section>
      {/* Featured section */}
      <section>
        <Container>
          <div className="relative overflow-hidden rounded-lg">
            <div className="absolute inset-0">
              <img
                src="/assets/blue-landscape.png"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="relative bg-gray-900 bg-opacity-75 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
              <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
                <h2 id="social-impact-heading" className=" text-white">
                  <span className="block sm:inline">Check out </span>
                  <span className="block sm:inline">our events</span>
                </h2>
                <p className="text-white">
                  Check out our schedule and see what's in store
                </p>
                <Link href="/events">
                  <div className="btn-light btn-lg">All Events</div>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
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
