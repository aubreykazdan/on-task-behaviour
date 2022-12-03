import Link from "next/link";

export default function NavLink({ internal, external, children }) {
  return external ? (
    <a className="navLink" rel="noreferrer" href={external} target="_blank">
      {children}
    </a>
  ) : (
    <Link href={internal}>
      <a className="navLink" rel="noreferrer">
        {children}
      </a>
    </Link>
  );
}
