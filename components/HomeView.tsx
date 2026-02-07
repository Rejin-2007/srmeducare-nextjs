"use client";

import { FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

interface HomeViewProps {
  title: string;
}

const HomeView = ({ title }: HomeViewProps) => {
  return (
    <section
      className="relative h-screen min-h-150 flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/homeimg.webp')",
      }}
      role="banner"
      aria-label="SRM Educare homepage banner"
    >
      {/* Dark overlay with linear */}
      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/60 to-black/50 backdrop-blur-sm"></div>

      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 md:px-6 max-w-6xl w-full">
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Logo/Icon */}
          <motion.div
            className="mb-6"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              duration: 0.8, 
              ease: "backOut",
              rotate: { duration: 1.2, ease: "circOut" }
            }}
          >
            <div className="relative">
              <FaGraduationCap 
                className="text-6xl md:text-8xl text-emerald-400 drop-shadow-2xl" 
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-emerald-400/20 blur-xl rounded-full"></div>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 drop-shadow-2xl leading-tight"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <span className="bg-linear-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              SRM Educare
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-orange-300 font-semibold mb-3 drop-shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            This is only an Individual Educating Services
          </motion.p>

          {/* Dynamic Title */}
          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-gray-200 font-medium max-w-3xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {title}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <a
              href="/courses"
              className="px-8 py-4 bg-linear-to-r from-emerald-500 to-emerald-600 text-white font-bold rounded-full hover:from-emerald-600 hover:to-emerald-700 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              aria-label="Explore our courses"
            >
              Explore Courses
            </a>
            
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ 
              duration: 2, 
              delay: 1.5,
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
              <motion.div
                className="w-1 h-3 bg-white/80 rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              ></motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-emerald-400/30 rounded-full blur-sm"></div>
      <div className="absolute top-1/3 right-20 w-6 h-6 bg-blue-400/20 rounded-full blur-sm"></div>
      <div className="absolute bottom-1/4 left-20 w-8 h-8 bg-purple-400/10 rounded-full blur-sm"></div>
      <div className="absolute bottom-1/3 right-10 w-5 h-5 bg-orange-400/15 rounded-full blur-sm"></div>
    </section>
  );
};

export default HomeView;