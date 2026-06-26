"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export function SuccessStories() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      course: "CA Intermediate Student",
      rating: 5,
      text: "Krithun Academy is the best place for CA coaching. The faculty are extremely helpful, and the study materials are well-structured, comprehensive, and exam-oriented.",
      image: "/images/faculty/cma_arvind_raj.png",
    },
    {
      name: "Priya Nair",
      course: "CMA Foundation Student",
      rating: 5,
      text: "The practical approach to cost accounting problems and individual attention by the faculty helped me clear my CMA Foundation exams on the very first attempt.",
      image: "/images/faculty/ca_swathi_lakshmi.png",
    },
    {
      name: "Karthik R",
      course: "Tally Student",
      rating: 5,
      text: "I learned Tally Prime and GST practical return filing here. The hands-on billing scenarios gave me the confidence to handle accounting jobs independently.",
      image: "/images/faculty/ca_praveen_kumar.png",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 80, damping: 18 },
    },
  };

  return (
    <section id="success-stories" className="py-28 bg-[#F8FAFC] scroll-mt-10 border-b border-slate-100 relative overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D09C34] mb-3">
            WHAT OUR STUDENTS SAY
          </h4>
          <h2 className="font-heading text-3.5xl sm:text-5xl font-extrabold text-[#0A1D3D] leading-tight">
            Trusted by Thousands of Students
          </h2>
          <div className="h-1 w-16 bg-[#D09C34] mx-auto mt-4 rounded-full" />
        </div>

        {/* Testimonials Desktop Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="hidden md:grid grid-cols-3 gap-8"
        >
          {testimonials.map((test) => (
            <motion.div
              key={test.name}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="bg-white border border-slate-100 rounded-2xl p-8 flex flex-col justify-between shadow-md hover:shadow-xl hover:border-[#D09C34]/30 transition-all duration-300 relative group cursor-pointer"
            >
              <div className="space-y-5">
                {/* Top: Stars */}
                <div className="flex items-center gap-4">
                  <div className="flex gap-0.5">
                    {Array.from({ length: test.rating }).map((_, i) => (
                      <Star key={i} size={14} className="fill-[#D09C34] text-[#D09C34]" />
                    ))}
                  </div>
                </div>

                <p className="text-[#1E293B] text-sm leading-relaxed italic font-normal">
                  "{test.text}"
                </p>
              </div>

              {/* Bottom: Name & Course */}
              <div className="border-t border-slate-100 pt-5 mt-8 text-left">
                <h4 className="font-bold text-[#0A1D3D] text-base uppercase tracking-wide">
                  — {test.name}
                </h4>
                <p className="text-[#D09C34] text-[10px] font-bold uppercase mt-1 tracking-wider">
                  {test.course}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Mobile Slider */}
        <div className="md:hidden relative px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ type: "spring" as const, stiffness: 100, damping: 20 }}
              className="bg-white border border-slate-100 rounded-2xl p-8 flex flex-col justify-between shadow-md relative min-h-[240px]"
            >
              <div className="space-y-5">
                {/* Top: Stars */}
                <div className="flex items-center gap-4">
                  <div className="flex gap-0.5">
                    {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                      <Star key={i} size={14} className="fill-[#D09C34] text-[#D09C34]" />
                    ))}
                  </div>
                </div>

                <p className="text-[#1E293B] text-sm leading-relaxed italic font-normal">
                  "{testimonials[activeIndex].text}"
                </p>
              </div>

              {/* Bottom: Name & Course */}
              <div className="border-t border-slate-100 pt-4 mt-6 text-left">
                <h4 className="font-bold text-[#0A1D3D] text-sm uppercase tracking-wide">
                  — {testimonials[activeIndex].name}
                </h4>
                <p className="text-[#D09C34] text-[9px] font-bold uppercase mt-1 tracking-wider">
                  {testimonials[activeIndex].course}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation chevrons for Mobile */}
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={handlePrev}
              className="h-9 w-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#0A1D3D] hover:bg-slate-50 shadow-sm"
              aria-label="Previous review"
            >
              <ChevronLeft size={16} />
            </button>
            
            {/* Dots */}
            <div className="flex gap-1.5">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === idx ? "w-4 bg-[#D09C34]" : "w-2 bg-slate-200"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="h-9 w-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#0A1D3D] hover:bg-slate-50 shadow-sm"
              aria-label="Next review"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
