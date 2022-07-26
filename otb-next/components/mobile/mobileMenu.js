import { motion, useCycle } from "framer-motion";

import MenuToggle from "./menuToggle";

export default function MobileMenu({ data }) {
  const [isOpen, toggleOpen] = useCycle(false, true);
  return (
    <>
      <MenuToggle />
    </>
  );
}
