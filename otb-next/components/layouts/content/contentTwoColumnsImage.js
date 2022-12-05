import { CameraIcon } from "@heroicons/react/20/solid";

export default function ContentTwoColumnsImage({
  title,
  imgSrc,
  imgAlt,
  children,
}) {
  return (
    <div className="overflow-hidden bg-white">
      <div className="relative mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 bottom-0 left-3/4 hidden w-screen bg-gray-50 lg:block" />
        <div className="mx-auto max-w-prose text-base lg:max-w-none">
          <h2 className="text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h2>
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:col-start-2 lg:row-start-1">
            <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    className="rounded-lg object-cover object-center shadow-lg"
                    src={imgSrc}
                    alt={imgAlt}
                    width={1184}
                    height={1376}
                  />
                </div>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">{children}</div>
        </div>
      </div>
    </div>
  );
}
