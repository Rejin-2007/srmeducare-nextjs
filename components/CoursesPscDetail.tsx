// components/CoursesPscDetail.tsx
"use client";

import { useState } from "react";

const CoursesPscDetail = () => {
  const [showOffers, setShowOffers] = useState(false);

  const courses = [
    {
      title: "PSC Starter Plan",
      monthlyFee: 500,
      registrationFee: 1000,
      duration: "1 Year",
      service: "360 × 1 Class + Daily Test",
      highlight: false,
    },
    {
      title: "PSC Regular Plan",
      monthlyFee: 1000,
      registrationFee: 2000,
      duration: "1 Year",
      service: "360 × 2 Classes",
      highlight: false,
    },
    {
      title: "PSC Intensive – 6 Months",
      totalFee: 6000,
      duration: "6 Months",
      service: "180 × 2 Classes + Daily Test + 3 Books",
      highlight: false,
    },
    {
      title: "PSC Premium (Best Value)",
      totalFee: 10000,
      duration: "1 Year",
      service: "360 × 2 Classes + Daily Test + 5 Books",
      highlight: true,
    },
  ];

  return (
    <section className="py-16 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
          Kerala PSC Online Coaching Plans
        </h2>

        {/* Course Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <article
              key={index}
              className={`relative rounded-2xl p-6 border shadow-sm hover:shadow-xl transition bg-white ${
                course.highlight
                  ? "border-blue-600 ring-2 ring-blue-100"
                  : "border-gray-200"
              }`}
            >
              {course.highlight && (
                <span className="absolute -top-3 left-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  MOST POPULAR
                </span>
              )}

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {course.title}
              </h3>

              <ul className="space-y-2 text-gray-700 text-sm mb-6">
                {course.monthlyFee && (
                  <li>
                    <span className="font-medium">Monthly Fee:</span> ₹
                    {course.monthlyFee}
                  </li>
                )}
                {course.registrationFee && (
                  <li>
                    <span className="font-medium">Registration Fee:</span> ₹
                    {course.registrationFee}
                  </li>
                )}
                {course.totalFee && (
                  <li>
                    <span className="font-medium">Total Fee:</span> ₹
                    {course.totalFee}
                  </li>
                )}
                <li>
                  <span className="font-medium">Duration:</span>{" "}
                  {course.duration}
                </li>
                <li>
                  <span className="font-medium">Includes:</span>{" "}
                  {course.service}
                </li>
              </ul>

              <button
                onClick={() => setShowOffers(true)}
                className={`w-full mt-auto py-2.5 rounded-lg font-semibold transition ${
                  course.highlight
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-900 text-white hover:bg-gray-800"
                }`}
              >
                View Offers
              </button>
            </article>
          ))}
        </div>
      </div>

      {/* Offers Modal */}
      {showOffers && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
          <div className="bg-white max-w-3xl w-full rounded-2xl p-6 relative max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setShowOffers(false)}
              className="absolute top-3 right-4 text-gray-500 hover:text-gray-900 text-xl font-bold"
              aria-label="Close"
            >
              ×
            </button>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Special Kerala PSC Offers
            </h3>

            <div className="space-y-6 text-gray-700">
              <div>
                <h4 className="text-lg font-semibold mb-2">
                  ₹10,000 Premium Course
                </h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Personal mentor for every subject</li>
                  <li>Flexible class timing (one-to-one)</li>
                  <li>
                    Complete PSC syllabus up to December 2026 covered early
                  </li>
                  <li>
                    5 FREE books including PSC question papers (2021–2024) with
                    OMR & detailed answers
                  </li>
                  <li>Pay ₹10,000 in 4 easy monthly installments</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-2">
                  ₹6,000 Intensive Course
                </h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Pay in 2 installments of ₹3,000</li>
                  <li>Ideal for fast-track PSC preparation</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={() => setShowOffers(false)}
                className="px-6 py-2.5 rounded-lg bg-gray-900 text-white font-semibold hover:bg-gray-800 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CoursesPscDetail;
