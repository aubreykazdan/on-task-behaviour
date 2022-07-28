import Image from "next/image";
import { urlForImage } from "/lib/sanity";

export default function Img({ image, alt }) {
  const { asset, height, width, crop, hotspot } = image;
  return (
    <div className="max-w-600 max-h-600 h-full w-full">
      <Image
        alt={alt}
        layout="responsive"
        height={600}
        width={600}
        src={urlForImage(asset).width(600).height(600).url()}
      />
    </div>
  );
}
