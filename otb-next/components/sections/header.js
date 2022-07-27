import Headroom from "react-headroom";
import Navlink from "../navlink";
import { MobileMenu } from "../mobileMenu";

export default function Header({ categories }) {
  return (
    <header className="mb-4">
      <Headroom>
        <ul className="flex justify-between items-center container mx-auto p-4">
          <Navlink internal="/">
            <h1 className="text-4xl text-purple uppercase">On Task</h1>
          </Navlink>
          <div className="hidden md:flex items-center">
            {categories &&
              categories.map((item) => {
                const { id, title, slug } = item;
                return (
                  <li key={id} className="mr-2 p-2">
                    <a rel="noreferrer" href={slug}>
                      {title}
                    </a>
                  </li>
                );
              })}
          </div>
          <div className="md:hidden">
            <MobileMenu categories={categories} />
          </div>
        </ul>
      </Headroom>
    </header>
  );
}
