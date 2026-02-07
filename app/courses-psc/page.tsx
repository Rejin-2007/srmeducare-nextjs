// app/courses/psc/page.tsx

import type { Metadata } from "next";
import HomeView from "@/components/HomeView";
import CurrentCourse from "@/components/CurrentCourse";

export const metadata: Metadata = {
  title: "Kerala PSC Online Coaching | Best PSC Exam Preparation in Kerala",
  description:
    "Best Kerala PSC online coaching with individual mentoring, mock tests, study materials, and exam-focused guidance for LDC, Degree Level, Prelims & Mains.",
  keywords: [
    "Kerala PSC online coaching",
    "Kerala PSC exam coaching",
    "Kerala PSC exam preparation",
    "Best Kerala PSC online classes",
    "Kerala PSC individual coaching online",
    "Kerala PSC one-to-one coaching",
    "Kerala PSC personal tutor online",
    "Kerala PSC LDC online coaching",
    "Kerala PSC degree level online coaching",
    "Kerala PSC prelims online coaching",
    "Kerala PSC mains online classes",
    "Kerala PSC online coaching Kerala",
  ],
  alternates: {
    canonical: "https://www.srmeducare.com/courses-psc",
  },
};

export default function CoursesPscPage() {
  return (
    <main>
      <h1 className="sr-only">
        Kerala PSC Online Coaching & Exam Preparation
      </h1>

      <HomeView title="🎯 PSC Coaching - Personal mentors & focused guidance" />
      <CurrentCourse />
    </main>
  );
}
