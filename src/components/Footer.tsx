import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 py-16 px-8 mt-20 relative">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-center md:text-left">
        {/* Logo & About */}
        <div>
          <img
            src="/assets/uv-logo1.png"
            alt="Unscripted Victories Logo"
            className="h-14 w-auto mb-4"
          />

          <p className="text-sm leading-relaxed">
            Documenting, celebrating, and elevating African sports stories
            through cinematic filmmaking and authentic storytelling.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold text-lg mb-4">
            Quick Links
          </h4>

          <ul className="space-y-3 text-sm">
            <li>
              <button
                onClick={() => (window.location.hash = "#mission")}
                className="hover:text-white transition"
              >
                Mission
              </button>
            </li>

            <li>
              <button
                onClick={() => (window.location.hash = "#projects")}
                className="hover:text-white transition"
              >
                Featured Projects
              </button>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-bold text-lg mb-4">
            Contact & Socials
          </h4>

          <p className="text-sm">📍 Nairobi, Kenya</p>
          <p className="text-sm mt-2">
            📞 +254 725 094 775
          </p>

          <p className="text-sm mt-2 break-all">
            ✉️ unscriptedvictories24@gmail.com
          </p>

          {/* Social Media */}
          <div className="flex justify-center md:justify-start gap-5 mt-6">
            <a
              href="https://www.instagram.com/unscripted_victories/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 transition duration-300"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>

            <a
              href="https://www.facebook.com/share/1DZnXgKiTq/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600 transition duration-300"
              aria-label="Facebook"
            >
              <FaFacebook size={24} />
            </a>

            <a
              href="https://www.tiktok.com/@_unscriptedvictories_?_r=1&_t=ZS-97qKQe0C63Z"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
              aria-label="TikTok"
            >
              <FaTiktok size={22} />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>

            <a
              href="https://wa.me/254725094775"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-500 transition duration-300"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mt-16 pt-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>
            © {new Date().getFullYear()} Unscripted Victories. All rights
            reserved.
          </p>

          <p>
            Crafted with ❤️ in Kenya.
          </p>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/254725094775"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition duration-300 z-50"
      >
        <FaWhatsapp size={28} />
      </a>
    </footer>
  );
};