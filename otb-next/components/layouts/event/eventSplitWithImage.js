import Container from "@/components/container";
import NextImage from "@/components/nextImage";
import SanityContent from "@/components/sanityContent";

export default function EventSplitWithImage({ event }) {
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  const { image, alt, title, content, startDate } = event;
  return (
    <Container>
      <div className="relative bg-accent-lightest border">
        {image && (
          <div className="h-56 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2 overflow-hidden">
            <NextImage image={image} alt={alt} />
          </div>
        )}
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="md:ml-auto md:w-1/2 md:pl-10">
            <h2 className="">{title}</h2>
            <p className="">
              {new Date(startDate).toLocaleDateString("en-us", options)}
            </p>

            <SanityContent blocks={content} />
            <div className="">
              <div className="inline-flex rounded-md shadow">
                <time dateTime="2008-02-14 20:00"></time>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
