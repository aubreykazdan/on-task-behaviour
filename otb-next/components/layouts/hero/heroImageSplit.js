import SanityContent from "@/components/sanityContent";
import Image from "next/image";
import { urlForImage } from "/lib/sanity";

export default function HeroImageSplit({ title, content, image }) {
  return (
    <section className="lg:relative">
      <div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left">
        <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
          <h1>{title}</h1>
          <p className="mx-auto max-w-md  md:max-w-3xl mt-4">
            <SanityContent blocks={content} />
          </p>
        </div>
      </div>
      <div className="relative h-80 w-full sm:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2 overflow-hidden">
        <Image
          alt={image.alt}
          layout="responsive"
          width={image.width}
          height={image.height}
          src={urlForImage(image.asset).url()}
          className="object-cover object-center"
        />
      </div>
    </section>
  );
}
