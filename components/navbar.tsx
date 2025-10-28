// components/navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "../css/navbar.css";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="main-nav">
      <ul>
        {links.map((l) => {
          const isActive =
            l.href === "/" ? pathname === "/" : pathname?.startsWith(l.href);
          return (
            <li key={l.href} className={isActive ? "active" : undefined}>
              <Link href={l.href} className="nav-link">
                {l.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
