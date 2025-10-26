import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="site-footer">
      {/* Top section */}
      <div className="container footer-top">
        {/* Brand / blurb */}
        <div className="footer-brand">
          <h3 className="footer-title">Test Site</h3>
          <p className="footer-blurb">
            Follow our journey as we build our way across the city.
          </p>
        </div>

        {/* Navigation */}
        <nav aria-label="Footer" className="footer-nav">
          <div className="footer-group">
            <h4 className="footer-heading">Pages</h4>
            <ul>
              <li>
                <Link href="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="footer-link">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="footer-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-group">
            <h4 className="footer-heading">Legal</h4>
            <ul>
              <li>
                <Link href="#" className="footer-link">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="footer-link">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Social */}
        <div className="footer-social">
          <h4 className="footer-heading">Follow</h4>
          <div className="footer-icons">
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              className="footer-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="footer-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://tiktok.com"
              aria-label="TikTok"
              className="footer-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTiktok} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p className="footer-copy">
            © {new Date().getFullYear()} Test Site. All rights reserved.
          </p>
          <p className="footer-madeby">Built with ❤️ in Next.js</p>
        </div>
      </div>
    </footer>
  );
}
