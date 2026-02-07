"use client";

import { FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

export default function FloatingContactButtons() {
  return (
    <nav
      className="fixed bottom-6 right-6 flex flex-col gap-4 z-50"
      aria-label="Floating Contact Options"
    >
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918157874911"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
        className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-600 text-white text-2xl shadow-lg hover:bg-blue-700 active:scale-95 transition focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
      >
        <FaWhatsapp />
      </a>

      {/* Google Maps Button */}
      <a
        href="https://maps.app.goo.gl/ZfR9rDFqp58JaxRB8"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View location on Google Maps"
        title="View Location on Google Maps"
        className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-600 text-white text-2xl shadow-lg hover:bg-blue-700 active:scale-95 transition focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
      >
        <FaMapMarkerAlt />
      </a>
    </nav>
  );
}
