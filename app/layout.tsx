// app/layout.tsx

import type { Metadata } from "next";
import "@/app/globals.css";
import Footer from "@/components/Footer";
import FloatingContactButtons from "@/components/FloatingContactButtons";

export const metadata: Metadata = {
  title: {
    default: "Kerala PSC Online Classes | Best Kerala PSC Coaching Online",
    template: "%s | Kerala PSC Online Coaching",
  },
  description:
    "Best Kerala PSC online classes with expert coaching, one-to-one guidance, mock tests, study materials, and exam-focused preparation for LDC, Degree Level, Prelims & Mains.",
  keywords: [
    "Kerala PSC online classes",
    "Kerala PSC coaching online",
    "Kerala PSC exam coaching",
    "Kerala PSC exam preparation",
    "Best Kerala PSC online classes",
    "Kerala PSC individual coaching online",
    "Kerala PSC one-to-one coaching",
    "Kerala PSC online coaching Kerala",
    "Kerala PSC LDC online coaching",
    "Kerala PSC degree level online coaching",
    "Kerala PSC prelims online coaching",
    "Kerala PSC mains online classes",
    "Kerala PSC test series online",
    "Kerala PSC study material",
  ],
  alternates: {
    canonical: "https://www.srmeducare.com",
  },
  openGraph: {
    title: "Best Kerala PSC Online Coaching in Kerala",
    description:
      "Join Kerala PSC online coaching with personal mentors, mock tests, syllabus-based study plans, and result-oriented guidance.",
    url: "https://www.srmeducare.com",
    siteName: "SRM Educare",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
        <FloatingContactButtons />
      </body>
    </html>
  );
}
