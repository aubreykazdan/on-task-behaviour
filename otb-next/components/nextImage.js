import Image from "next/image";
import { urlForImage } from "/lib/sanity";

export default function NextImage({ sanityImage, imageSrc, imageAlt }) {
  return sanityImage && !imageSrc ? (
    <Image
      alt={imageAlt}
      layout="responsive"
      width={sanityImage.width}
      height={sanityImage.height}
      src={urlForImage(sanityImage.asset).url()}
      className="object-cover object-center"
    />
  ) : (
    <Image
      alt={imageAlt}
      layout="responsive"
      width={500}
      height={500}
      src={imageSrc}
      className="object-cover object-center"
    />
  );
}
