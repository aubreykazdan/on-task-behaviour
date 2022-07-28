import Headroom from "react-headroom";
import Navlink from "../navlink";
import { MobileMenu } from "../mobileMenu";
import { Instagram, TikTok } from "../icon";

export default function Header({ categories, socials }) {
  const { tiktok, instagram } = socials;

  return (
    <header className="mb-4 uppercase">
      <Headroom>
        <ul className="flex justify-between items-center container mx-auto p-4 bg-white">
          <Navlink internal="/">
            <h1 className="text-4xl text-purple uppercase">On Task</h1>
          </Navlink>
          <div className="hidden md:flex items-center">
            {categories &&
              categories.map((item) => {
                const { id, title, slug } = item;
                return (
                  <li key={id} className="mr-2 p-2">
                    <Navlink internal={slug}>{title}</Navlink>
                  </li>
                );
              })}
            <li className="mr-2 p-2">
              <Navlink internal="donate">Donate</Navlink>
            </li>
            <div className="mr-4 text-2xl">
              <Instagram external={instagram} />
            </div>
            <div className="text-xl ">
              <TikTok external={tiktok} />
            </div>
          </div>
          <div className="md:hidden">
            <MobileMenu categories={categories} socials={socials} />
          </div>
        </ul>
      </Headroom>
    </header>
  );
}
