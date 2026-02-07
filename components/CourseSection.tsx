// components/CourseSection.tsx
"use client";

import Link from "next/link";
import CurrentCourse from "@/components/CurrentCourse";

const CourseSection = () => {
  return (
    <section className="py-16 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Courses */}
        <CurrentCourse />

        {/* CTA */}
        <div className="flex justify-center mt-12">
          <Link
            href="/courses"
            className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 px-10 rounded-full transition-all duration-300 shadow-md hover:shadow-xl"
          >
            Explore All Courses
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
