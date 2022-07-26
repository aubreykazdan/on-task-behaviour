import Headroom from "react-headroom";
import Navlink from "../navlink";

export default function Header({ categories }) {
  return (
    <header className="mb-4 border">
      <Headroom>
        <ul className="flex justify-between">
          <Navlink internal="/">
            <h1 className="text-4xl text-purple uppercase">On Task</h1>
          </Navlink>
          <div className="hidden md:flex items-center">
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
          </div>
        </ul>
      </Headroom>
    </header>
  );
}
