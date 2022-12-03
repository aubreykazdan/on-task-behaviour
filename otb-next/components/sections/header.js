import Headroom from "react-headroom";
import Navlink from "../navlink";
import { MobileMenu } from "../mobileMenu";
import { Instagram, TikTok } from "../icon";
import { motion } from "framer-motion";

export default function Header({ categories, socials }) {
  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  const { tiktok, instagram } = socials;

  return (
    <header className="mb-4 uppercase text-base">
      <Headroom>
        <ul className="flex justify-between items-center container mx-auto p-4 bg-white">
          <Navlink internal="/">
            <motion.div variants={variants}>
              <motion.h1
                whileHover={{ x: -5 }}
                whileTap={{ x: 5 }}
                className="text-4xl text-accent uppercase whitespace-nowrap"
              >
                On Task
              </motion.h1>
            </motion.div>
          </Navlink>
          <div className="hidden lg:flex items-center">
            {categories &&
              categories.map((item) => {
                const { id, title, slug } = item;
                return (
                  <motion.li variants={variants} key={id} className="mr-2 p-2">
                    <motion.div whileHover={{ x: -5 }} whileTap={{ x: 5 }}>
                      <Navlink internal={slug}>{title}</Navlink>
                    </motion.div>
                  </motion.li>
                );
              })}
            <motion.li variants={variants}>
              <motion.div
                whileHover={{ x: -5 }}
                whileTap={{ x: 5 }}
                className="mr-4 text-2xl"
              >
                <Instagram external={instagram} />
              </motion.div>
            </motion.li>
            <motion.li variants={variants}>
              <motion.div
                whileHover={{ x: -5 }}
                whileTap={{ x: 5 }}
                className="text-xl "
              >
                <TikTok external={tiktok} />
              </motion.div>
            </motion.li>
          </div>
          <div className="flex lg:hidden">
            <MobileMenu categories={categories} socials={socials} />
          </div>
        </ul>
      </Headroom>
    </header>
  );
}
