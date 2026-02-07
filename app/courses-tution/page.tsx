// app/courses/tuition/page.tsx

import type { Metadata } from "next";
import HomeView from "@/components/HomeView";

export const metadata: Metadata = {
  title: "Online Tuition Classes in Kerala | Personal Tuition & Exam Guidance",
  description:
    "Join online tuition classes in Kerala with expert teachers, personal attention, and subject-focused guidance for school and higher secondary students.",
  keywords: [
    "online tuition Kerala",
    "online tuition classes in Kerala",
    "personal tuition online",
    "private tuition online Kerala",
    "one-to-one tuition online",
    "school tuition online Kerala",
    "exam-oriented tuition Kerala",
  ],
  alternates: {
    canonical: "https://www.srmeducare.com/courses-tution",
  },
};

export default function CoursesTuitionPage() {
  return (
    <main>
      <h1 className="sr-only">
        Online Tuition Classes in Kerala with Personal Guidance
      </h1>

      <HomeView title="📘 Online Tuition - Personal Guidance & Expert Teachers" />
    </main>
  );
}
