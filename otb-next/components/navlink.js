import Link from "next/link";

export default function Navlink({ internal, external, children }) {
  return external ? (
    <a rel="noreferrer" href={external} target="_blank">
      {children}
    </a>
  ) : (
    <Link href={internal}>
      <a rel="noreferrer">{children}</a>
    </Link>
  );
}
