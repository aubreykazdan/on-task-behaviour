import Container from "@/components/container";
import NextImage from "@/components/nextImage";
import SanityContent from "@/components/sanityContent";

export default function EventSplitWithImage({ event }) {
  const dateOptions = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  const timeOptions = {
    hour: "numeric",
    minute: "numeric",
  };

  const { image, imageAlt, title, content, startDate, endDate } = event;
  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-4 gap-x-8 sm:gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div>
              <div className="lg:pr-8">
                <h2>{title}</h2>
                <time dateTime={startDate} className="mt-2">
                  {new Date(startDate).toLocaleDateString("en-us", dateOptions)}
                </time>
                {!endDate ? (
                  <div className="mt-1">
                    <p>
                      {new Date(startDate).toLocaleTimeString(
                        "en-US",
                        timeOptions
                      )}
                    </p>
                  </div>
                ) : (
                  <div className="flex space-x-2 mt-1">
                    <p>
                      {new Date(startDate).toLocaleTimeString(
                        "en-US",
                        timeOptions
                      )}
                    </p>
                    <span> - </span>
                    <p>
                      {new Date(endDate).toLocaleTimeString(
                        "en-US",
                        timeOptions
                      )}
                    </p>
                  </div>
                )}
                <div className="mt-6">
                  <SanityContent blocks={content} />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:-ml-4 lg:-ml-0 shadow-lg h-fit">
            <NextImage sanityImage={image} imageAlt={imageAlt} />
          </div>
        </div>
      </div>
    </div>
  );
}
