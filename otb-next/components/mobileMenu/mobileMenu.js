import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./menuToggle";
import { Navigation } from "./navigation";

export function MobileMenu({ categories }) {
  const [isOpen, toggleOpen] = useCycle(false, true);
  // console.log(categories);
  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className={`md:hidden flex items-center flex-col justify-center`}
    >
      <Navigation
        isOpen={isOpen}
        toggleOpen={toggleOpen}
        categories={categories}
      />
      <MenuToggle />
    </motion.nav>
  );
}
