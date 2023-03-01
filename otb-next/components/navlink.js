import Link from "next/link";

export default function NavLink({ internal, external, children, ariaLabel }) {
  return external ? (
    <a
      className="nav-link nav-animated transition-animate"
      rel="noreferrer"
      href={external}
      target="_blank"
      aria-label={ariaLabel}
    >
      {children}
    </a>
  ) : (
    <Link href={internal} legacyBehavior>
      <a
        className="nav-link nav-animated transition-animate"
        aria-label={ariaLabel}
      >
        {children}
      </a>
    </Link>
  );
}
