import Image from "next/image";
import { urlForImage } from "/lib/sanity";

export default function EventImg({ image, alt }) {
  const { asset, height, width, crop, hotspot } = image;
  return (
    <div className="block relative min-h-300 lg:min-h-500 mb-4">
      <Image
        alt={alt}
        layout="fill"
        objectFit="cover"
        src={urlForImage(asset).url()}
      />
    </div>
  );
}
