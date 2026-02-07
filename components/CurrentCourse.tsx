// components/CurrentCourse.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { FaBook, FaChalkboardTeacher } from "react-icons/fa";

const CurrentCourse = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
          Our Courses 🎓
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* PSC Coaching */}
          <Link
            href="/courses-psc"
            className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
          >
            <Image
              src="/psc.jpg"
              alt="Kerala PSC Online Coaching"
              width={800}
              height={500}
              className="w-full h-65 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              priority
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent"></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6">
              <FaChalkboardTeacher size={40} className="mb-4 text-blue-400" />
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                Kerala PSC Online Coaching
              </h3>
              <p className="text-sm md:text-base text-gray-200 max-w-sm">
                LDC • Degree Level • Prelims • Mains with personal mentors
              </p>

              <span className="mt-5 inline-block px-6 py-2.5 rounded-full bg-blue-600 text-white font-semibold text-sm group-hover:bg-blue-700 transition">
                View Course Details →
              </span>
            </div>
          </Link>

          {/* Tuition */}
          <Link
            href="/courses-tution"
            className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
          >
            <Image
              src="/tution.jpg"
              alt="Online Tuition Classes in Kerala"
              width={800}
              height={500}
              className="w-full h-65 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent"></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6">
              <FaBook size={38} className="mb-4 text-amber-400" />
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                Online Tuition (Class 1–12)
              </h3>
              <p className="text-sm md:text-base text-gray-200 max-w-sm">
                SCERT • NCERT • ICSE with one-to-one expert teachers
              </p>

              <span className="mt-5 inline-block px-6 py-2.5 rounded-full bg-amber-500 text-black font-semibold text-sm group-hover:bg-amber-400 transition">
                Explore Tuition →
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CurrentCourse;
