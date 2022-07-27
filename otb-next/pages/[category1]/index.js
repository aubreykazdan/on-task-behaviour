import ErrorPage from "next/error";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../components/layout";
import {
  categoriesQuery,
  categoryOneQuery,
  settingsQuery,
  socialsQuery,
} from "../../lib/queries";

import { usePreviewSubscription } from "/lib/sanity";
import { getClient } from "/lib/sanity.server";

export default function CategoryOne({ data, preview }) {
  const router = useRouter();
  const slug = data?.category?.slug;
  const {
    data: { settings, category },
  } = usePreviewSubscription(categoryOneQuery, {
    params: { slug },
    initialData: data,
    enabled: preview && slug,
  });
  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />;
  }
  const { categories } = data;
  const { title } = category;

  return router.isFallback ? (
    <p>Loading...</p>
  ) : (
    <Layout>
      <div>{title}</div>
    </Layout>
  );
}

export async function getServerSideProps({ params, preview = false }) {
  const category = await getClient(preview).fetch(categoryOneQuery, {
    slug: params.category1,
  });
  const categories = await getClient(preview).fetch(categoriesQuery);
  const settings = await getClient(preview).fetch(settingsQuery);
  const socials = await getClient(preview).fetch(socialsQuery);
  return {
    props: {
      preview,
      data: {
        settings,
        category,
        categories,
        socials,
      },
    },
  };
}
