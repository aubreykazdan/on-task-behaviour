import Image from "next/image";
import { urlForImage } from "/lib/sanity";

export default function NextImage({ image, alt }) {
  const { asset, height, width, crop, hotspot } = image;
  return (
    <Image
      alt={alt}
      layout="responsive"
      width={width}
      height={height}
      src={urlForImage(asset).url()}
      className="object-cover object-center"
    />
  );
}
