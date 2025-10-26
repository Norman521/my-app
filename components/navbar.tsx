// components/navbar.tsx
import Link from "next/link";
import "../css/navbar.css";

export default function Navbar() {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <Link href="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="nav-link">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className="nav-link">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
