import Head from "next/head";

export default function Meta({ settings }) {
  // const { title } = settings;
  // const { asset } = ogImage;
  return (
    <Head>
      <meta charSet="utf-8" />
      <link rel="shortcut icon" href="/public/favicon.ico" />
      <meta name="description" content="Non-Profit" key="ogdesc" />
      {/* <meta property="og:title" content={title} key="ogtitle" /> */}
      {/* <meta property="og:image" content={asset.url} key="ogimage" /> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@" />
      <link rel="icon" href="" />
      {/* <title>{title}</title> */}
    </Head>
  );
}
