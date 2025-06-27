import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content border-t border-border font-sans pt-10">
      <div className="max-w-7xl mx-auto mt-4 px-4">
        <Link
        to="/"
        className="text-primary font-heading text-3xl font-bold "
      >
        Garden<span className="text-secondary">Hub</span>
      </Link>
      </div>
      <div className="max-w-7xl mx-auto mt-4 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10">
        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-medium mb-3 font-heading text-primary">
            Contact Us
          </h3>
          <p>
            Email:{" "}
            <a
              href="mailto:support@gardenhub.com"
              className="hover:text-accent transition"
            >
              support@gardenhub.com
            </a>
          </p>
          <p>Phone: +880-1234-567890</p>
          <p>Address: Dinajpur, Bangladesh</p>
        </div>

        {/* ✅ NEW SECTION: Company Info */}
        <div>
          <h3 className="text-lg font-medium mb-3 font-heading text-primary">
            Company
          </h3>
          <ul className="space-y-1">
            <li>
              <a href="/about" className="hover:text-accent transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/support" className="hover:text-accent transition">
                Support
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-accent transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Terms & Policies */}
        <div>
          <h3 className="text-lg font-medium mb-3 font-heading text-primary">
            Legal
          </h3>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:text-accent transition">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-accent transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-accent transition">
                Refund Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-medium mb-3 font-heading text-primary">
            Follow Us
          </h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-xl text-primary hover:text-accent transition"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="text-xl text-primary hover:text-accent transition"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-xl text-primary hover:text-accent transition"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-xl text-primary hover:text-accent transition"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-muted pb-6">
        © {new Date().getFullYear()} GardenHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
