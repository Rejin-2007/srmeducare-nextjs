// app/page.tsx (Next.js 13+ / 14 / 15 / 16 App Router)

import HomeView from "@/components/HomeView";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import CurrentCourse from "@/components/CurrentCourse";
import TestimonialsSection from "@/components/TestimonialsSection";
import MainFacultySection from "@/components/MainFacultySection";
import {UpcomingCourses} from "@/components/UpcomingCourses";
import CourseSection from "@/components/CourseSection";
import FloatingContactButtons from "@/components/FloatingContactButtons";
import Footer from "@/components/Footer";

export const metadata = {
  title: "SRM Educare - Best Kerala PSC Online Classes & Coaching in Kerala",
  description:
    "Join SRM Educare for the best Kerala PSC online classes with expert coaching, daily mock tests, personalized study materials, and one-to-one guidance. Top PSC exam preparation for LDC, Degree Level, Prelims & Mains.",
  keywords: [
    "Kerala PSC online classes",
    "Kerala PSC coaching online",
    "Kerala PSC exam coaching",
    "Kerala PSC exam preparation",
    "Kerala PSC individual coaching online",
    "Kerala PSC one-to-one coaching",
    "Best Kerala PSC online classes",
    "Kerala PSC online coaching Kerala",
    "Kerala PSC LDC online coaching",
    "Kerala PSC degree level online coaching",
    "Kerala PSC prelims online coaching",
    "Kerala PSC mains online classes",
    "Kerala PSC test series online",
    "Kerala PSC study material",
    "SRM Educare",
    "PSC coaching",
    "Government job preparation",
  ],
  alternates: {
    canonical: "https://www.srmeducare.com/",
  },
  openGraph: {
    title: "SRM Educare - Best Kerala PSC Online Coaching | Expert PSC Classes",
    description:
      "Kerala PSC online coaching with personal tutors, daily mock tests, syllabus-based study plans, and exam-focused guidance at SRM Educare.",
    url: "https://www.srmeducare.com/",
    siteName: "SRM Educare",
    type: "website",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "SRM Educare Kerala PSC Online Classes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SRM Educare - Kerala PSC Online Classes",
    description: "Best Kerala PSC online coaching with expert guidance",
    images: ["/twitter-image.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function HomePage() {
  return (
    <>
      <main className="min-h-screen">
        <h1 className="sr-only">
          SRM Educare - Kerala PSC Online Classes & Coaching in Kerala
        </h1>

        {/* Hero Section with title prop */}
        <HomeView 
          title="Your Gateway to Kerala Government Jobs Through Expert PSC Coaching"
        />
        
        {/* About Section */}
        <AboutSection />
        
        {/* Current Courses */}
        <CurrentCourse />
        
        {/* Stats Section */}
        <StatsSection />
        
        {/* Upcoming Courses */}
        <UpcomingCourses />
        
        {/* Course Details Section */}
        <CourseSection />
        
        {/* Testimonials */}
        <TestimonialsSection />
        
        {/* Faculty Section */}
        <MainFacultySection />
        
        
      </main>
      
      
    </>
  );
}