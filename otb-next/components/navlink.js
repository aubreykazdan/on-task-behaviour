import Link from "next/link";

export default function NavLink({ internal, external, children }) {
  return external ? (
    <a className="navLink" rel="noreferrer" href={external} target="_blank">
      {children}
    </a>
  ) : (
    <Link href={internal}>
      <p className="navLink mb-0">{children}</p>
    </Link>
  );
}
