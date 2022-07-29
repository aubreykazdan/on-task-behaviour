import Content from "./content";
import Img from "./img";

export default function TextWithIllustration({ copy }) {
  const { content, title, image, alt } = copy;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:space-x-8">
      <div className="mb-8 lg:mb-4 lg:w-full flex justify-center lg:justify-start">
        <Img image={image} alt={alt} />
      </div>

      <div className="mb-4 p-0 lg:p-4 lg:w-2/3">
        <h2 className="text-3xl uppercase text-purple mb-4">{title}</h2>
        <Content blocks={content} />
      </div>
    </div>
  );
}
