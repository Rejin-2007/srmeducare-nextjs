// components/upcoming-courses.tsx
'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const COURSES = [
  {
    id: '1',
    name: 'English Grammar',
    img: '/english.webp',
    description: 'Master English grammar with comprehensive lessons',
    startDate: '2024-06-01',
    category: 'Language',
  },
  {
    id: '2',
    name: 'Hindi Grammar',
    img: '/hindi.webp',
    description: 'Learn Hindi grammar from basics to advanced',
    startDate: '2024-06-15',
    category: 'Language',
  },
  {
    id: '3',
    name: 'Other Courses',
    img: '/othercourses.webp',
    description: 'Explore various upcoming course offerings',
    startDate: '2024-07-01',
    category: 'General',
  },
] as const;

// Navigation button component
const NavigationButton = ({ 
  direction, 
  onClick, 
  disabled 
}: { 
  direction: 'prev' | 'next'; 
  onClick: () => void; 
  disabled: boolean;
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className="hidden md:flex absolute top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 hover:bg-white text-[#19183B] rounded-full shadow-lg items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-110"
    aria-label={`${direction === 'prev' ? 'Previous' : 'Next'} course`}
  >
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      {direction === 'prev' ? (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      )}
    </svg>
  </button>
);

// Calendar icon component
const CalendarIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

export function UpcomingCourses() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [autoScrollInterval, setAutoScrollInterval] = useState<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === COURSES.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? COURSES.length - 1 : prev - 1));
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    setAutoScrollInterval(interval);
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [nextSlide]);

  // Pause auto-scroll on hover/touch
  const handleMouseEnter = () => {
    if (autoScrollInterval) {
      clearInterval(autoScrollInterval);
      setAutoScrollInterval(null);
    }
  };

  const handleMouseLeave = () => {
    if (!autoScrollInterval) {
      const interval = setInterval(nextSlide, 5000);
      setAutoScrollInterval(interval);
    }
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextSlide();
    }
    if (touchStart - touchEnd < -50) {
      prevSlide();
    }
  };

  // Generate structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Upcoming Courses',
    numberOfItems: COURSES.length,
    itemListElement: COURSES.map((course, index) => ({
      '@type': 'Course',
      position: index + 1,
      name: course.name,
      description: course.description,
      startDate: course.startDate,
      courseCategory: course.category,
    })),
  };

  return (
    <>
      {/* Structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section
        className="container mx-auto px-4 py-12"
        aria-labelledby="upcoming-courses-heading"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="mb-10">
          <h1
            id="upcoming-courses-heading"
            className="text-3xl md:text-4xl font-bold text-[#19183B] text-center mb-3"
          >
            Upcoming Courses
          </h1>
          <div className="w-24 h-1 bg-[#7B2425] mx-auto mb-6" />
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
            Explore our comprehensive range of upcoming courses designed to enhance your skills
          </p>
        </div>

        <div className="relative">
          {/* Navigation buttons */}
          <NavigationButton direction="prev" onClick={prevSlide} disabled={currentIndex === 0} />
          <NavigationButton direction="next" onClick={nextSlide} disabled={currentIndex === COURSES.length - 1} />

          {/* Mobile dot indicators */}
          <div className="flex justify-center gap-2 mb-8 md:hidden">
            {COURSES.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-[#7B2425] w-6' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Course slider container */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {COURSES.map((course) => (
                <div
                  key={course.id}
                  className="shrink-0 w-full md:w-[calc(33.333%-1rem)]"
                  style={{ minWidth: '100%', maxWidth: '100%' }}
                >
                  <motion.div
                    className="group relative cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white"
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative aspect-4/3">
                      <Image
                        src={course.img}
                        alt={`${course.name} course preview`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        priority={course.id === '1'}
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
                      
                      {course.category && (
                        <span className="absolute top-4 left-4 px-3 py-1 bg-[#7B2425] text-white text-sm font-semibold rounded-full">
                          {course.category}
                        </span>
                      )}
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="transform group-hover:-translate-y-2 transition-transform duration-300">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {course.name}
                        </h3>
                        
                        {course.description && (
                          <p className="text-gray-200 mb-3 line-clamp-2">
                            {course.description}
                          </p>
                        )}
                        
                        {course.startDate && (
                          <div className="flex items-center gap-2 text-gray-300 text-sm">
                            <CalendarIcon />
                            <span>Starts {new Date(course.startDate).toLocaleDateString('en-US', { 
                              month: 'long', 
                              day: 'numeric', 
                              year: 'numeric' 
                            })}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* CTA overlay on hover */}
                    <div className="absolute inset-0 bg-[#19183B]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center p-6">
                        <span className="inline-block px-6 py-3 bg-[#7B2425] text-white font-semibold rounded-lg hover:bg-[#5a1a1b] transition-colors">
                          Learn More
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Desktop indicators */}
          <div className="hidden md:flex justify-center gap-3 mt-8">
            {COURSES.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-8 h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-[#7B2425]' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}