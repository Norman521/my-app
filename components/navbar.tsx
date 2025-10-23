import Link from "next/link";
import "../css/navbar.css";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <Link href="/" className="nav-item">
          <li>Home</li>
        </Link>
        <Link href="/about" className="nav-item">
          <li>About</li>
        </Link>
        <Link href="/contact" className="nav-item">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
}
