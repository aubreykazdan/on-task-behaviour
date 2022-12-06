import { getClient } from "../../lib/sanity.server";
import { useRouter } from "next/router";

import Layout from "../../components/layout";
import HeaderBrandedImage from "@/components/layouts/header/headerBrandedImage";
import ContentTwoColumnsImage from "@/components/layouts/content/contentTwoColumnsImage";

export default function News({ data }) {
  const router = useRouter();

  return router.isFallback ? (
    <p>Loading...</p>
  ) : (
    <Layout data={data}>
      <HeaderBrandedImage title="News" />
      <ContentTwoColumnsImage
        title="We're Back"
        imgSrc="/assets/cat-toes.png"
        imgAlt="cat toes"
      >
        <div className="mx-auto max-w-prose text-base lg:max-w-none">
          <p className="text-lg text-gray-500">
            WE'RE BACK! While we work to re-open in Los Angeles in the near
            future, please feel welome to visit us in our newest space at 1124
            College Street in Toronto, Ontario, Canada! NOW OPEN.
          </p>
        </div>
        <div className="prose prose-indigo mx-auto mt-5 text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
          <p>
            Our hours currently range from{" "}
            <span className=" font-bold">PROBABLY AROUND LUNCHTIME</span> to but
            <span className=" font-bold">
              {" "}
              USUALLY UNTIL THE SUN GOES DOWN
            </span>{" "}
            but{" "}
            <span className="font-bold">DEFINITELY NOT ON MONDAYS THOUGH.</span>
          </p>
        </div>
      </ContentTwoColumnsImage>
    </Layout>
  );
}

export async function getServerSideProps({ params, preview = false }) {
  return {
    props: {
      preview,
      data: {},
    },
  };
}
