import Link from "next/link";
import site from "../site.config";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: site.servicesLabel },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <Link href="/" className="header__brand">
          {site.name}
        </Link>
        <nav aria-label="Navigation principale">
          <ul className="header__nav">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
