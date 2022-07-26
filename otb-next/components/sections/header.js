import Headroom from "react-headroom";
import Navlink from "../navlink";

export default function Header({ categories }) {
  return (
    <div className="mb-4 border">
      <Headroom>
        <header className="bg-white py-4">
          <ul className="flex justify-between border">
            <Navlink internal="/">
              <h1 className="text-3xl text-purple uppercase">On Task</h1>
            </Navlink>
            <div className="flex">
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
        </header>
      </Headroom>
    </div>
  );
}
