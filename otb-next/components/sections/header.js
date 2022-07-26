import Headroom from "react-headroom";

export default function Header({ categories }) {
  return (
    <Headroom>
      <header className="bg-white py-4">
        <ul className="flex justify-end">
          {categories &&
            categories.map((item) => {
              const { id, title, slug, fullPath } = item;
              return (
                <li key={id} className="mr-2 p-2">
                  <a rel="noreferrer" href={slug}>
                    {title}
                  </a>
                </li>
              );
            })}
        </ul>
      </header>
    </Headroom>
  );
}
