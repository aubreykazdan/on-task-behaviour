import Link from "next/link";

export default function CTAOverlappingImage({}) {
  return (
    <div className="relative bg-white py-16">
      <div
        className="absolute inset-x-0 top-0 hidden h-1/2 bg-gray-50 lg:block"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-12">
          <div className="relative z-10 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:bg-transparent lg:py-16 mb-10 lg:mb-0">
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
              <div className="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                <img
                  className="rounded-3xl object-cover shadow-2xl"
                  src="/assets/heart.png"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="relative bg-accent lg:col-span-10 lg:col-start-3 lg:row-start-1 lg:grid lg:grid-cols-10 lg:items-center lg:rounded-3xl lg:py-16">
            <div className="relative mx-auto max-w-md space-y-6 py-12 px-4 sm:max-w-3xl sm:py-16 sm:px-6 lg:col-span-6 lg:col-start-4 lg:max-w-none lg:p-0">
              <h2
                className="text-3xl font-bold tracking-tight text-white"
                id="join-heading"
              >
                Thank You For Your Support!
              </h2>
              <p className="text-lg text-white">
                We are a non-profit organization dedicated to creating community
                spaces out of empty or under-utilized locations around the
                world.
              </p>
              <p className="text-lg text-white">
                We rely on the support of generous contributors to continue and
                expand our programming.
              </p>
              <p className="text-lg text-white">
                Every donation, no matter the amount, ensures we can support
                those who benefit from these initiatives.
              </p>
              <p className="text-lg text-white">
                If you are unable to contribute financially but would like to
                offer support another way, we welcome you to reach out to us at{" "}
                <a
                  href="mailto:hello@ontaskbehaviour.com"
                  className="underline text-blue-400"
                >
                  hello@ontaskbehaviour.com
                </a>{" "}
                or by visiting our{" "}
                <Link href="/contact">
                  <span className="underline text-blue-400 cursor-pointer">
                    Contact Page
                  </span>
                </Link>
              </p>
              <a
                className="block btn btn-white"
                href="https://square.link/u/jR5tglCy"
                rel="noreferrer"
                target="_blank"
              >
                Donate Here
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
