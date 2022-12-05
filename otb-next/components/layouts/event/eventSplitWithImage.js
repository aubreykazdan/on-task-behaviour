import Container from "@/components/container";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";

export default function EventSplitWithImage({ title }) {
  return (
    <Container>
      <div className="relative bg-accent-lightest">
        <div className="h-56 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
          <img
            className="h-full w-full object-cover object-center"
            src="/assets/face-grid.png"
            alt=""
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="md:ml-auto md:w-1/2 md:pl-10">
            <h2 className="">Award winning support</h2>
            <p className="mt-3 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              egestas tempus tellus etiam sed. Quam a scelerisque amet
              ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
              quisque ut interdum tincidunt duis.
            </p>
            <div className="mt-8">
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
