import { CameraIcon } from "@heroicons/react/20/solid";

export default function ContentTwoColumnsImage({}) {
  return (
    <div className="overflow-hidden bg-white">
      <div className="relative mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 bottom-0 left-3/4 hidden w-screen bg-gray-50 lg:block" />
        <div className="mx-auto max-w-prose text-base lg:max-w-none">
          <h2 className="text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            We're Back!
          </h2>
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:col-start-2 lg:row-start-1">
            <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    className="rounded-lg object-cover object-center shadow-lg"
                    src="/assets/cat-toes.png"
                    alt="cat toes"
                    width={1184}
                    height={1376}
                  />
                </div>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="mx-auto max-w-prose text-base lg:max-w-none">
              <p className="text-lg text-gray-500">
                WE'RE BACK! While we work to re-open in Los Angeles in the near
                future, please feel welome to visit us in our newest space at
                1124 College Street in Toronto, Ontario, Canada! NOW OPEN.
              </p>
            </div>
            <div className="prose prose-indigo mx-auto mt-5 text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
              <p>
                Our hours currently range from{" "}
                <span className=" font-bold">PROBABLY AROUND LUNCHTIME</span> to
                but
                <span className=" font-bold">
                  {" "}
                  USUALLY UNTIL THE SUN GOES DOWN
                </span>{" "}
                but{" "}
                <span className="font-bold">
                  DEFINITELY NOT ON MONDAYS THOUGH.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
