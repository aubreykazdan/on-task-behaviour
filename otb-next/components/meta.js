import Head from "next/head";

export default function Meta({ settings }) {
  const { title, ogImage } = settings;
  const { asset } = ogImage;
  return (
    <Head>
      <meta charSet="utf-8" />
      <link rel="icon" href="public/favicon.ico" type="image/x-icon" />
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      <meta name="description" content="Non-Profit" key="ogdesc" />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta property="og:image" content={asset.url} key="ogimage" />
      <title>{title}</title>
    </Head>
  );
}
