// components/EmailContact.tsx
"use client";

import { useState } from "react";
import { send } from "emailjs-com";

const EmailContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    comment: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<null | "success" | "error">(null);

  const EMAILJS_CONFIG = {
    SERVICE_ID: "service_3nm6iuc",
    TEMPLATE_ID: "template_2v4z5a4",
    PUBLIC_KEY: "op8tYVCswEB5bRSX2",
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    try {
      const result = await send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: formData.name,
          phone: formData.phone,
          message: formData.comment,
          to_name: "SRM Educare",
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      if (result.status === 200) {
        setMessage("success");
        setFormData({ name: "", phone: "", comment: "" });
      }
    } catch {
      setMessage("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        Contact Us for Kerala PSC Coaching
      </h3>

      <form onSubmit={handleSubmit} className="grid gap-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-600 focus:outline-none"
          required
          disabled={isLoading}
        />

        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-600 focus:outline-none"
          required
          disabled={isLoading}
        />

        <textarea
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          placeholder="Your Message"
          rows={4}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-600 focus:outline-none"
          required
          disabled={isLoading}
        />

        <button
          type="submit"
          disabled={isLoading}
          className="mt-2 inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-50"
        >
          {isLoading ? "Sending..." : "Send Message"}
        </button>
      </form>

      {message === "success" && (
        <p className="mt-4 rounded-lg bg-green-50 p-3 text-center text-green-700 font-medium">
          ✅ Message sent successfully! We’ll contact you soon.
        </p>
      )}

      {message === "error" && (
        <p className="mt-4 rounded-lg bg-red-50 p-3 text-center text-red-700 font-medium">
          ❌ Failed to send message. Please try again.
        </p>
      )}
    </section>
  );
};

export default EmailContact;
