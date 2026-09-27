import Link from "next/link";
import {
  FaInstagram,
  FaBehance,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";
import { SiShutterstock } from "react-icons/si";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-800 mt-20">
      <div className="max-w-[1200px] mx-auto px-6 py-8 flex justify-between items-center w-full">
        <p className="text-white text-xs sm:text-sm font-bebas tracking-[1px] whitespace-nowrap">
          © 2026 MAHMOUD DAHER
        </p>

        <div className="flex items-center gap-2 sm:gap-4">
          <Link
            href="https://www.instagram.com"
            target="_blank"
            className="text-red-700 hover:text-red-900 transition-colors"
          >
            <FaInstagram size={16} className="sm:w-5 sm:h-5" />
          </Link>
          <Link
            href="mailto:m.bash.daher@gmail.com"
            className="text-neutral-300 hover:text-white transition-colors"
          >
            <MdEmail size={18} className="sm:w-5 sm:h-5" />
          </Link>
          <Link
            href="https://www.behance.net"
            target="_blank"
            className="text-blue-500 hover:text-blue-600 transition-colors"
          >
            <FaBehance size={16} className="sm:w-5 sm:h-5" />
          </Link>
          <Link
            href="https://www.linkedin.com"
            target="_blank"
            className="text-blue-400 hover:text-blue-500 transition-colors"
          >
            <FaLinkedinIn size={16} className="sm:w-5 sm:h-5" />
          </Link>
          <Link
            href="https://www.facebook.com"
            target="_blank"
            className="text-blue-600 hover:text-blue-700 transition-colors"
          >
            <FaFacebookF size={16} className="sm:w-5 sm:h-5" />
          </Link>
          <Link
            href="https://www.shutterstock.com"
            target="_blank"
            className="text-orange-500 hover:text-orange-600 transition-colors"
          >
            <SiShutterstock size={16} className="sm:w-5 sm:h-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
