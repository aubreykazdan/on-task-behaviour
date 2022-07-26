import Head from "next/head";

export default function Meta({ settings }) {
  const { title, ogImage, copyright, url } = settings;
  const { asset } = ogImage;
  return (
    <Head>
      <meta charSet="utf-8" />
      <link rel="icon" href="/public/favicon.ico" />
      <meta name="description" content="Non-Profit" key="ogdesc" />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta property="og:image" content={asset.url} key="ogimage" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@" />
      <title>{title}</title>
    </Head>
  );
}
