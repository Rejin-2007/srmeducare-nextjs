// app/review/page.tsx

import type { Metadata } from "next";
import HomeView from "@/components/HomeView";
import TestimonialsSection from "@/components/TestimonialsSection";
import StatsSection from "@/components/StatsSection";

export const metadata: Metadata = {
  title: "Kerala PSC Student Reviews | Success Stories & Testimonials",
  description:
    "Read genuine student reviews and success stories from Kerala PSC online coaching. Trusted by aspirants for exam preparation, mentoring, and results.",
  keywords: [
    "Kerala PSC student reviews",
    "Kerala PSC testimonials",
    "Kerala PSC success stories",
    "Kerala PSC online coaching reviews",
    "best Kerala PSC coaching reviews",
  ],
  alternates: {
    canonical: "https://www.srmeducare.com/review",
  },
};

export default function ReviewPage() {
  return (
    <main>
      <h1 className="sr-only">
        Kerala PSC Online Coaching Reviews & Student Feedback
      </h1>

      <HomeView title="⭐ Student Reviews - Hear from our learners" />
      <TestimonialsSection />
      <StatsSection />
    </main>
  );
}
