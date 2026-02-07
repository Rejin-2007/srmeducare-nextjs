// app/courses/page.tsx

import type { Metadata } from "next";
import HomeView from "@/components/HomeView";
import CurrentCourse from "@/components/CurrentCourse";
import { UpcomingCourses } from "@/components/UpcomingCourses";

export const metadata: Metadata = {
  title: "Kerala PSC Courses Online | PSC Coaching & Tuition Programs",
  description:
    "Explore Kerala PSC online courses including LDC, Degree Level, Prelims & Mains coaching with expert mentors, mock tests, and structured study plans.",
  keywords: [
    "Kerala PSC courses online",
    "Kerala PSC coaching courses",
    "Kerala PSC online classes",
    "Kerala PSC LDC online coaching",
    "Kerala PSC degree level online coaching",
    "Kerala PSC prelims online coaching",
    "Kerala PSC mains online classes",
    "Kerala PSC tuition online",
  ],
  alternates: {
    canonical: "https://www.srmeducare.com/courses",
  },
};

export default function CoursesPage() {
  return (
    <main>
      <h1 className="sr-only">Kerala PSC Online Courses & Coaching</h1>

      <HomeView title="📘 Our Courses - Explore PSC & Tuition Programs" />
      <CurrentCourse />
      <UpcomingCourses />
    </main>
  );
}
