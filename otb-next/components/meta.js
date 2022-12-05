import Head from "next/head";

export default function Meta({}) {
  return (
    <Head>
      <meta charSet="utf-8" />
      <link rel="icon" href="public/favicon.ico" type="image/x-icon" />
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      <meta name="description" content="Non-Profit" key="ogdesc" />
      <meta property="og:title" content="On Task" key="ogtitle" />
      <meta
        property="og:image"
        content="/assets/blue-landscape.png"
        key="ogimage"
      />
      <title>On Task</title>
    </Head>
  );
}
