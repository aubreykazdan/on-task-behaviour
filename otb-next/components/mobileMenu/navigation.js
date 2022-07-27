import { motion } from "framer-motion";
import { RemoveScroll } from "react-remove-scroll";
import { MenuItem } from "./menuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    opacity: 1,
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
    opacity: 0,
  },
};

export function Navigation({ isOpen, toggleOpen, categories }) {
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

  return (
    isOpen && (
      <RemoveScroll>
        <div className="absolute top-0 left-0 w-screen h-screen bg-white z-1">
          <motion.ul variants={variants} className="text-right mt-20 px-4">
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

            {/* <ul className="mt-10 flex flex-col items-end">
              <p className="uppercase text-green mb-5">{t("follow-us")}</p>
              <SiteSocials header />
            </ul> */}
          </motion.ul>
        </div>
      </RemoveScroll>
    )
  );
}
