export default function ContentSplitImage({
  title,
  children,
  imageSrc,
  imageAlt,
}) {
  return (
    <div className="relative">
      <div className="lg:absolute lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover md:object-right lg:absolute lg:h-full"
            src="/assets/pug.jpeg"
            alt=""
          />
        </div>
      </div>
      <div className="relative px-4 sm:px-6 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div className="lg:col-start-2 py-8 lg:p-8">
          <div className="mx-auto max-w-prose text-base lg:ml-auto lg:mr-0 lg:max-w-lg">
            <h2>Our Process</h2>
            <p className="mt-4 text-gray-500">
              <span className=" font-bold text-accent">On Task</span> is a
              nonprofit, community project primarily dedicated to
              supporting those struggling to stay focused on what is valuable to
              them.
            </p>
            <div className="mt-4">
              <p>
                Our primary focus is on creative, entrepreneurial and mental
                health challenges.
              </p>
              <p className="mt-4">
                On Task is a project dedicated to anyone who’s struggled with
                staying focused in the pursuit of their goals and dreams, or
                felt excluded from the traditional methods of "making it."
              </p>
              <p className="mt-4">
                Some of our past and current initiatives include 12 Step
                meetings and other Support Groups, Live Comedy Events, Art
                Exhibitions, Artists Markets, Clothing Swap parties, Arts and
                Craft Workshops, and more.
              </p>
              <p className="mt-4">
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
