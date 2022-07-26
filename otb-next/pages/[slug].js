import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Layout from "../components/layout";
import {
  eventQuery,
  mainNavQuery,
  siteSettingsQuery,
  socialsQuery,
} from "../lib/queries";
import { urlForImage, usePreviewSubscription } from "../lib/sanity";
import { getClient } from "../lib/sanity.server";
import Header from "../components/sections/header";
import Meta from "../components/meta";

export default function Page({ data = {}, preview }) {
  const router = useRouter();
  const slug = data?.page?.slug;
  const {
    data: { page, settings, mainNav, socials },
  } = usePreviewSubscription(eventQuery, {
    params: { slug },
    initialData: data,
    enabled: preview && slug,
  });

  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />;
  }

  const { siteLogo, websiteTitle } = settings;

  // console.log(page);

  return (
    <Layout preview={preview}>
      {router.isFallback ? (
        <p>Loading…</p>
      ) : (
        <div>
          {/* <Meta page={page} title={websiteTitle} /> */}
          {/* <Header mainNav={mainNav} socials={socials} logo={siteLogo} /> */}
          <h1>This is the slug</h1>
          <article></article>
        </div>
      )}
    </Layout>
  );
}

export async function getServerSideProps({ params, preview = false }) {
  const page = await getClient(preview).fetch(eventQuery, {
    slug: params.slug,
  });
  const settings = await getClient(preview).fetch(siteSettingsQuery);
  const mainNav = await getClient(preview).fetch(mainNavQuery);
  const socials = await getClient(preview).fetch(socialsQuery);
  return {
    props: {
      preview,
      data: {
        page,
        settings,
        mainNav,
        socials,
      },
    },
  };
}
