// app/components/TestimonialsSection.tsx
"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  id: number;
  rating: number;
  text: string;
  author: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    rating: 5,
    text: "Usually, when attending an online class—regardless of the course—after a few days of studying, our learning consistency tends to decline. But ever since I joined the SRM class, I've been consistently tracking my learning progress every single day. That's definitely a positive aspect of SRM. The classes never feel overwhelming. The daily tests and the practice of writing out the mistakes as impositions have significantly boosted my learning. It creates a strong urge to read and study for at least an hour every day.",
    author: "Arathy Melarannoor",
  },
  {
    id: 2,
    rating: 5,
    text: "SRM is the best online PSC class I've come across. It offers excellent teachers and well-prepared notes that are easy to understand—all at an affordable fee.",
    author: "Adhithyakumar Karamana",
  },
  {
    id: 3,
    rating: 5,
    text: "The classes are easy to understand. Through this platform, I've been able to learn even those topics I used to avoid studying. I've grasped some useful shortcuts for solving math problems. Each subject is taught in detail, making it easier to grasp. The daily motivational messages from the Admin and HOD inspire me to keep learning. These classes are truly helping me pursue my dream of securing a job. Thank you so much!",
    author: "Gopika Poovathur",
  },
  {
    id: 4,
    rating: 5,
    text: "It's a great class. Every day there's a test, and the lessons are delivered in a way that clearly explains which parts need to be studied. Everything is taught with clarity and understanding.",
    author: "Anjitha Kotayam",
  },
  {
    id: 5,
    rating: 5,
    text: "The SRM course has truly helped me understand the subjects I'm studying and has given me the confidence to ask questions and clear my doubts. The daily updates, especially on current affairs, have made it easier to stay informed and learn consistently. SRM provides everything a student needs—flexibility to attend classes at our convenience, detailed and understandable teaching methods, and supportive faculty who explain concepts clearly. This course has helped me nurture my dream of securing a government job. I'm genuinely grateful for the guidance and support I've received.",
    author: "Jobin Kottukunnam",
  },
  {
    id: 6,
    rating: 5,
    text: "SRM's PSC classes have been incredibly helpful for me. This is the first PSC course I've ever joined, and I'm really impressed. The classes are well-structured and easy to understand. The guide provided is also very supportive. Even though I haven't completed my degree yet, I'm able to manage PSC preparation alongside my studies without any issues. Everything is going smoothly, and I'm truly satisfied with the experience.",
    author: "Akshaya Jagathi",
  },
  {
    id: 7,
    rating: 5,
    text: "I have been attending the SRM online classes and I am very satisfied with the classes which are simple and in a unique way of teaching which I have never experienced before moreover I think no other online platform will provide an easy well structured class like this and I am glad I joined SRM",
    author: "Ananthu Thiruvarp",
  },
  {
    id: 8,
    rating: 5,
    text: "The classes are very easy to understand. All the teachers explain everything with great clarity and precision. They repeat important points multiple times to ensure we grasp the concepts thoroughly. This approach has truly helped me learn better and feel more confident in my preparation.",
    author: "Abhirami Kumarakam",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsAutoPlaying(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextSlide();
    } else if (touchStart - touchEnd < -50) {
      prevSlide();
    }
    // Re-enable auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // Generate structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Student Testimonials',
    description: 'Reviews and testimonials from SRM Educare students',
    numberOfItems: testimonials.length,
    itemListElement: testimonials.map((testimonial, index) => ({
      '@type': 'Review',
      position: index + 1,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: testimonial.rating.toString(),
        bestRating: '5',
      },
      author: {
        '@type': 'Person',
        name: testimonial.author,
      },
      reviewBody: testimonial.text,
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
        className="py-16 px-4 md:px-8 bg-linear-to-br from-gray-50 to-blue-50"
        aria-labelledby="testimonials-heading"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              TESTIMONIALS
            </span>
            <h2
              id="testimonials-heading"
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              What Our Students Say
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Students appreciate the one-on-one attention and flexible online
              classes. Many say it boosted their confidence and exam success.
            </p>
          </motion.div>

          {/* Testimonial Slider Container */}
          <div className="relative max-w-5xl mx-auto">
            {/* Navigation Buttons */}
            <button
              onClick={() => {
                prevSlide();
                setIsAutoPlaying(false);
              }}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center text-gray-700 hover:text-blue-600 hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft className="text-2xl" />
            </button>

            <button
              onClick={() => {
                nextSlide();
                setIsAutoPlaying(false);
              }}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center text-gray-700 hover:text-blue-600 hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next testimonial"
            >
              <FaChevronRight className="text-2xl" />
            </button>

            {/* Testimonial Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mx-4"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                itemScope
                itemType="https://schema.org/Review"
              >
                {/* Rating */}
                <div 
                  className="flex justify-center mb-8" 
                  itemProp="reviewRating" 
                  itemScope 
                  itemType="https://schema.org/Rating"
                >
                  <div className="flex gap-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <FaStar
                        key={i}
                        className="text-yellow-400 text-3xl md:text-4xl"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <meta itemProp="ratingValue" content={testimonials[currentIndex].rating.toString()} />
                  <meta itemProp="bestRating" content="5" />
                </div>

                {/* Testimonial Text */}
                <div className="relative mb-10">
                  <div className="text-6xl text-blue-100 absolute -top-8 -left-4">"</div>
                  <p 
                    className="text-gray-700 text-lg md:text-xl leading-relaxed relative z-10 italic" 
                    itemProp="reviewBody"
                  >
                    {testimonials[currentIndex].text}
                  </p>
                  <div className="text-6xl text-blue-100 absolute -bottom-10 -right-4">"</div>
                </div>

                {/* Author */}
                <div className="text-center">
                  <div className="w-16 h-1 bg-blue-500 mx-auto mb-4"></div>
                  <p className="text-xl font-bold text-gray-900" itemProp="author">
                    {testimonials[currentIndex].author}
                  </p>
                  <p className="text-gray-600 mt-2">SRM Educare Student</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-3 mt-12">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-blue-600 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={index === currentIndex ? 'true' : 'false'}
                />
              ))}
            </div>

            {/* Mobile Navigation */}
            <div className="flex justify-center gap-8 mt-8 md:hidden">
              <button
                onClick={() => {
                  prevSlide();
                  setIsAutoPlaying(false);
                }}
                className="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-700"
                aria-label="Previous testimonial"
              >
                <FaChevronLeft className="text-xl" />
              </button>
              <button
                onClick={() => {
                  nextSlide();
                  setIsAutoPlaying(false);
                }}
                className="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-700"
                aria-label="Next testimonial"
              >
                <FaChevronRight className="text-xl" />
              </button>
            </div>
          </div>

          {/* Stats Section */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-gray-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">100%</div>
              <p className="text-gray-700">Satisfaction Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">5.0</div>
              <p className="text-gray-700">Average Rating</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">500+</div>
              <p className="text-gray-700">Students Taught</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">98%</div>
              <p className="text-gray-700">Recommend to Friends</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}