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

  const {
    image,
    imageAlt,
    title,
    content,
    startDate,
    endDate,
    ticketPrice,
    ticketUrl,
  } = event;
  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-4 gap-x-8 sm:gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div>
              <div className="lg:pr-8">
                <h2>{title}</h2>
                <div className="mt-4">
                  <time dateTime={startDate}>
                    <span className="font-semibold text-accent">Date: </span>
                    {new Date(startDate).toLocaleDateString(
                      "en-us",
                      dateOptions
                    )}
                  </time>

                  {!endDate ? (
                    <div className="flex space-x-2 mt-1">
                      <span className="font-semibold text-accent">Time:</span>
                      <p>
                        {new Date(startDate).toLocaleTimeString(
                          "en-US",
                          timeOptions
                        )}
                      </p>
                    </div>
                  ) : (
                    <div className="flex space-x-2 mt-1">
                      <span className="font-semibold text-accent">Time:</span>
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

                  <div className="mt-1">
                    <p>
                      <span className="font-semibold text-accent">Cost: </span>
                      {ticketPrice}
                    </p>
                  </div>
                </div>

                <div className="mt-4">
                  <SanityContent blocks={content} />
                </div>

                {ticketUrl && (
                  <div className="mt-4">
                    <a target="_blank" rel="noreferrer" href={ticketUrl}>
                      <div className="btn btn-accent">
                        Purchase Tickets
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          class="w-5 h-5 mb-1 ml-2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                          />
                        </svg>
                      </div>
                    </a>
                  </div>
                )}
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
