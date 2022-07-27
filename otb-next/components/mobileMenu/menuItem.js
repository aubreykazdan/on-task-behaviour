import Link from "next/link";
import { motion } from "framer-motion";

export function MenuItem({ item, toggleOpen, children }) {
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
  const { external, internal } = item;

  return (
    <motion.li variants={variants} className="mb-1">
      <motion.div whileHover={{ x: -5 }} whileTap={{ x: 5 }}>
        {external ? (
          <a href={external} rel="noreferer" target="_blank">
            {children}
          </a>
        ) : (
          <Link href={internal}>
            <a onClick={toggleOpen}>{children}</a>
          </Link>
        )}
      </motion.div>
    </motion.li>
  );
}
