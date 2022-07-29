import { motion } from "framer-motion";
import { RemoveScroll } from "react-remove-scroll";
import { Instagram, TikTok } from "../icon";
import { MenuItem } from "./menuItem";

export function Navigation({ isOpen, toggleOpen, categories, socials }) {
  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.1 },
      opacity: 1,
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
      opacity: 0,
    },
  };

  const { tiktok, instagram } = socials;

  return (
    isOpen && (
      <RemoveScroll>
        <div className="absolute top-0 left-0 w-screen h-screen bg-white z-1">
          <motion.ul variants={variants} className="text-right mt-20 mr-4">
            <p className="uppercase text-2xl mb-4">On Task</p>
            {categories &&
              categories.map((item) => {
                const { slug, id, title } = item;
                return (
                  <MenuItem key={id} slug={slug} toggleOpen={toggleOpen}>
                    {title}
                  </MenuItem>
                );
              })}
            <ul className="flex justify-end">
              <motion.li variants={variants}>
                <motion.div
                  whileHover={{ x: -5 }}
                  whileTap={{ x: 5 }}
                  className="mr-4 text-3xl"
                >
                  <Instagram external={instagram} />
                </motion.div>
              </motion.li>
              <motion.li variants={variants}>
                <motion.div
                  whileHover={{ x: -5 }}
                  whileTap={{ x: 5 }}
                  className="text-2xl flex items-center "
                >
                  <TikTok external={tiktok} />
                </motion.div>
              </motion.li>
            </ul>
          </motion.ul>
        </div>
      </RemoveScroll>
    )
  );
}
