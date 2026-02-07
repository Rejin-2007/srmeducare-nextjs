"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaChalkboardTeacher, FaBook, FaUsers } from "react-icons/fa";

interface AnimatedCounterProps {
  number: number | string;
  duration?: number;
}

const AnimatedCounter = ({ number, duration = 2000 }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const target = typeof number === 'string' ? parseInt(number, 10) : number;
    const step = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, number, duration]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-extrabold text-gray-900">
      {count.toLocaleString()}+
    </div>
  );
};

interface StatItem {
  number: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const StatsSection = () => {
  const stats: StatItem[] = [
    { number: "40", label: "Expert Teachers", icon: FaChalkboardTeacher },
    { number: "37", label: "Active Courses", icon: FaBook },
    { number: "2120", label: "Happy Students", icon: FaUsers },
  ];

  return (
    <section className="py-20 px-4 md:px-6 bg-linear-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Some Important Facts
          </h2>
          <div className="w-24 h-1.5 bg-linear-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            SRM EDUCARE delivers expert guidance, structured learning, and
            measurable success for every aspirant.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 md:p-10 text-center overflow-hidden"
              >
                {/* Background decorative element */}
                <div className="absolute inset-0 bg-linear-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icon container */}
                <div className="relative z-10 w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-purple-600 text-white text-3xl shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <Icon />
                </div>

                {/* Animated number */}
                <div className="relative z-10 mb-2">
                  <AnimatedCounter number={stat.number} />
                </div>
                
                {/* Label */}
                <p className="relative z-10 mt-4 text-gray-700 font-semibold text-lg tracking-wide uppercase">
                  {stat.label}
                </p>
                
                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            );
          })}
        </div>

        {/* Additional info */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Why Choose SRM EDUCARE?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6">
                <div className="text-5xl font-bold text-blue-600 mb-4">24/7</div>
                <p className="text-gray-700">Doubt Support</p>
              </div>
              <div className="p-6">
                <div className="text-5xl font-bold text-purple-600 mb-4">100%</div>
                <p className="text-gray-700">Success Oriented</p>
              </div>
              <div className="p-6">
                <div className="text-5xl font-bold text-blue-500 mb-4">₹0</div>
                <p className="text-gray-700">Hidden Charges</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;