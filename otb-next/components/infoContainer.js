import Content from "./content";

export default function InfoContainer({ item }) {
  const { alt, image, title, content, startDate } = item;
  return (
    <div className="py-8 px-4 space-y-4">
      <h3 className="text-3xl">{title}</h3>
      <Content blocks={content} />
    </div>
  );
}
