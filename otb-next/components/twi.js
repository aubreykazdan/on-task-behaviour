import Content from "./content";
import Img from "./img";

export default function TextWithIllustration({ copy }) {
  const { content, title, image, alt } = copy;
  return (
    <div className="flex flex-col lg:flex-row lg:justify-center lg:space-x-4">
      <div className="mb-4 lg:min-w-600 max-w-full flex justify-center">
        <Img image={image} alt={alt} />
      </div>
      <div className="mb-4">
        <p className="text-3xl uppercase">{title}</p>
        <Content blocks={content} />
      </div>
    </div>
  );
}
