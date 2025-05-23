import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-100 text-green-800 mt-20 pt-10 border-t border-green-200 font-sans">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 pb-10">
        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p>Email: <a href="mailto:support@gardenhub.com" className="hover:text-green-600">support@gardenhub.com</a></p>
          <p>Phone: +880-1234-567890</p>
          <p>Address: Dinajpur, Bangladesh</p>
        </div>

        {/* Terms & Policies */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Legal</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-green-600">Terms of Service</a></li>
            <li><a href="#" className="hover:text-green-600">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-green-600">Refund Policy</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-xl hover:text-green-700 transition"><FaFacebookF /></a>
            <a href="#" className="text-xl hover:text-green-700 transition"><FaTwitter /></a>
            <a href="#" className="text-xl hover:text-green-700 transition"><FaInstagram /></a>
            <a href="#" className="text-xl hover:text-green-700 transition"><FaEnvelope /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-green-600 pb-6">
        © {new Date().getFullYear()} GardenHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
