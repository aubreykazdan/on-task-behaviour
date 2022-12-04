/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
    ],
  }
  ```
*/
export default function ContentSplitImage({}) {
  return (
    <div className="relative bg-white mt-4 md:mt-0">
      <div className="lg:absolute lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover md:object-right lg:absolute lg:h-full"
            src="/assets/storefront-2.png"
            alt=""
          />
        </div>
      </div>
      <div className="relative px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div className="lg:col-start-2 lg:pl-8">
          <div className="mx-auto max-w-prose text-base lg:ml-auto lg:mr-0 lg:max-w-lg">
            <h2 className="text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              Our Process
            </h2>
            <p className="text-lg text-gray-500">
              <span className=" font-bold text-accent">On Task</span> is a
              nonprofit, community project primarily dedicated to
              supporting those struggling to stay focused on what is valuable to
              them.
            </p>
            <div className="">
              <p>
                Our primary focus is on creative, entrepreneurial and mental
                health challenges.
              </p>
              <p>
                On Task is a project dedicated to anyone who’s struggled with
                staying focused in the pursuit of their goals and dreams, or
                felt excluded from the traditional methods of "making it."
              </p>
              <p>
                Some of our past and current initiatives include 12 Step
                meetings and other Support Groups, Live Comedy Events, Art
                Exhibitions, Artists Markets, Clothing Swap parties, Arts and
                Craft Workshops, and more.
              </p>
              <p>
                If you have an idea of something you'd like to see, learn, make,
                be or do; we encourage you to reach out to us on our Contact
                Page
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
