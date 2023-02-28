export default function HeroImageSplit({}) {
  return (
    <section className="lg:relative">
      <div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left">
        <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
          <h1 className="">
            Welcome to
            <span className="block xl:inline"> On Task</span>
          </h1>
          <p className="mx-auto max-w-md  md:max-w-3xl mt-4">
            As we launch our second community space in Toronto, we are pleased
            to share our new and improved website so we may better connect and
            share resources with our friends and family around the world.
          </p>
        </div>
      </div>
      <div className="relative h-80 w-full sm:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
        <img
          className="absolute inset-0 h-full w-full object-cover object-right lg:rounded-bl-xl"
          src="/assets/charlotte.png"
          alt="Chihuhua smiling"
        />
      </div>
    </section>
  );
}
