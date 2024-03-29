import { urlForImage } from "@/lib/sanity";
import Image from "next/image";

export default function FeatureWithScreenshot({
  flipped,
  title,
  children,
  image,
}) {
  return !flipped ? (
    <div className="">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-4 gap-x-8 sm:gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div>
              <div className="lg:pr-8">
                <h2>{title}</h2>
                <div className="mt-6">{children}</div>
              </div>
            </div>
          </div>
          <div className="w-full md:-ml-4 lg:-ml-0">
            <Image
              alt={image.alt}
              layout="responsive"
              width={image.width}
              height={image.height}
              src={urlForImage(image.asset).url()}
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-4 gap-x-8 sm:gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="">
            <div className="lg:pl-8">
              <h2>{title}</h2>
              <div className="mt-6">{children}</div>
            </div>
          </div>
        </div>

        <div className="w-full md:-ml-4 lg:-ml-0 lg:order-first">
          <Image
            alt={image.alt}
            layout="responsive"
            width={image.width}
            height={image.height}
            src={urlForImage(image.asset).url()}
            className="object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}
