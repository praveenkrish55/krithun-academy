"use client";

import { motion } from "framer-motion";
import {
  Calculator,
  Award,
  TrendingUp,
  Layers,
  FileSpreadsheet,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface CoursesProps {
  onLearnMore: (course: string) => void;
}

export function Courses({ onLearnMore }: CoursesProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 60, damping: 16, ease: "easeOut" as const },
    },
  };

  const courses = [
    {
      title: "CA Foundation",
      description: "Build a strong foundation for your CA journey.",
      icon: Calculator,
    },
    {
      title: "CA Intermediate",
      description: "Advance your knowledge and achieve more.",
      icon: Award,
    },
    {
      title: "CMA Foundation",
      description: "Kickstart your career in Cost Management.",
      icon: TrendingUp,
    },
    {
      title: "CMA Intermediate",
      description: "Take the next step towards professional excellence.",
      icon: Layers,
    },
    {
      title: "Tally Prime",
      description: "Master Tally Prime for accounting and automation.",
      icon: FileSpreadsheet,
    },
    {
      title: "GST Filing",
      description: "Learn GST law and practical filing skills.",
      icon: BookOpen,
    },
  ];

  return (
    <section id="courses" className="py-24 bg-white scroll-mt-10">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D09C34] mb-2">
            OUR COURSES
          </h4>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#0A1D3D] leading-tight">
            Programs Designed for Your Success
          </h2>
          <div className="h-0.5 w-12 bg-[#D09C34] mx-auto mt-4" />
        </div>

        {/* Staggered Grid Wrapper */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {courses.map((course) => (
            <motion.div
              key={course.title}
              variants={cardVariants}
              className="bg-white border border-slate-100 rounded-xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.01)] hover:shadow-[0_12px_40px_rgba(10,29,61,0.04)] hover:border-[#D09C34]/30 hover:translate-y-[-4px] transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#0A1D3D]/5 text-[#0A1D3D] group-hover:bg-[#0A1D3D] group-hover:text-white transition-all duration-300">
                  <course.icon size={20} />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-[#0A1D3D] tracking-wide uppercase group-hover:text-[#D09C34] transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mt-2 font-light">
                    {course.description}
                  </p>
                </div>
              </div>
              <button
                onClick={() => onLearnMore(course.title)}
                className="text-[#D09C34] font-bold text-[10px] tracking-wider uppercase flex items-center gap-1.5 mt-6 self-start transition-all hover:gap-2.5 duration-300"
              >
                <span>Learn More</span>
                <ArrowRight size={12} />
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Central Action Button */}
        <div className="mt-12 text-center">
          <Button
            onClick={() => onLearnMore("All Courses")}
            className="bg-[#D09C34] hover:bg-[#bfa032] text-white px-8 h-12 text-xs font-semibold uppercase tracking-wider rounded transition-all shadow-md inline-flex items-center gap-2 hover:translate-y-[-2px] duration-300"
          >
            <span>View All Courses</span>
            <ArrowRight size={14} />
          </Button>
        </div>

      </div>
    </section>
  );
}
