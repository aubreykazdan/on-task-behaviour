import Container from "@/components/container";
import Link from "next/link";

export default function CenteredImageCTA({
  title,
  description,
  buttonText,
  buttonPath,
  ariaLabel,
}) {
  return (
    <Container>
      <div className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-xl">
          <div className="absolute inset-0">
            <img
              src="/assets/blue-landscape.png"
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="relative bg-gray-900 bg-opacity-75 py-32 px-6 sm:py-32 sm:px-12 lg:px-16 text-white">
            <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
              <h2 id="social-impact-heading" className="">
                {title}
              </h2>
              <p className="mt-2">{description}</p>
              <div className="mt-4">
                <Link aria-lavel={ariaLabel} href={buttonPath}>
                  <div className="btn-light btn-lg">{buttonText}</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
