"use client";

import Link from "next/link";
import { FaYoutube, FaInstagram } from "react-icons/fa";
import EmailContact from "@/components/EmailContact";

const Footer = () => {
  return (
    <footer className="bg-[#19183B] text-[#E7E2Ef] border-t-2 border-[#7B2425] p-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left: Logo */}
        <div className="flex-1 flex flex-col justify-start">
          <h2 className="text-2xl font-bold mb-4">SRM Educare</h2>
        </div>

        {/* Middle: Contact */}
        <div className="flex-1 flex flex-col justify-start gap-2">
          <p>Email: srm171121@gmail.com</p>
          <p>Phone 1: 8157874911</p>
          <p>Phone 2: 9037474911</p>

          <Link
            href="/terms-and-conditions"
            className="underline hover:text-[#7B2425] transition-colors duration-200"
          >
            Terms and Conditions
          </Link>

          <div className="flex gap-4 mt-2">
            <a
              href="https://youtube.com/@srmeducare20?si=-dYzSxJDwpMTeF9i"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="SRM Educare YouTube"
            >
              <FaYoutube size={24} />
            </a>

            <a
              href="https://www.instagram.com/srm_educare?igsh=MW0xdTY3dHRrZzhycg=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="SRM Educare Instagram"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="flex-1">
          <EmailContact />
        </div>
      </div>

      <div className="text-center mt-6 text-sm text-[#E7E2Ef]/80">
        &copy; {new Date().getFullYear()} SRM Educare. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
