// app/faculty/page.tsx

import type { Metadata } from "next";
import HomeView from "@/components/HomeView";
import MainFacultySection from "@/components/MainFacultySection";
import StatsSection from "@/components/StatsSection";

export const metadata: Metadata = {
  title: "Kerala PSC Faculty | Expert Teachers & Personal Mentors",
  description:
    "Meet our expert Kerala PSC faculty offering online coaching with personal mentoring, exam-focused strategies, and result-oriented guidance.",
  keywords: [
    "Kerala PSC faculty",
    "Kerala PSC teachers",
    "Kerala PSC online coaching faculty",
    "Kerala PSC personal mentors",
    "expert PSC teachers Kerala",
    "best Kerala PSC coaching faculty",
  ],
  alternates: {
    canonical: "https://www.srmeducare.com/faculty",
  },
};

export default function FacultyPage() {
  return (
    <main>
      <h1 className="sr-only">
        Kerala PSC Faculty & Expert Online Coaching Team
      </h1>

      <HomeView title="👩‍🏫 Our Faculty - Meet our expert educators" />
      <StatsSection />
      <MainFacultySection />
    </main>
  );
}
