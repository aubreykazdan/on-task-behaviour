import Content from "../content";
import Img from "../img";
import Section from "../section";

export default function TextWithIllustration({ copy }) {
  const { content, title, image, alt } = copy;
  return (
    <Section container>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="mb-8 lg:mb-4 lg:w-full flex justify-center lg:justify-start -z-10">
          <Img image={image} alt={alt} />
        </div>

        <div className="mb-4 p-0 lg:p-4 lg:ml-10">
          <div className="lg:w-3/4 ">
            <h2 className="text-3xl uppercase text-purple mb-4">{title}</h2>
            <Content blocks={content} />
          </div>
        </div>
      </div>
    </Section>
  );
}
