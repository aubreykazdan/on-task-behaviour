import Link from "next/link";

export default function NavLink({ internal, external, children }) {
  return external ? (
    <a
      className="nav-link nav-animated transition-animate"
      rel="noreferrer"
      href={external}
      target="_blank"
    >
      {children}
    </a>
  ) : (
    <Link href={internal}>
      <p className="nav-link nav-animated transition-animate">{children}</p>
    </Link>
  );
}
