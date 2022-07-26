import Link from "next/link";
import Headroom from "react-headroom";

export default function Header({ categories }) {
  return (
    <div className="mb-4">
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
      <Link href="/">
        <a rel="noreferrer">
          <h1 className="text-3xl text-purple uppercase">On Task</h1>
        </a>
      </Link>
    </div>
  );
}
