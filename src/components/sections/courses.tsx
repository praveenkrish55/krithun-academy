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
  Briefcase,
} from "lucide-react";
import Link from "next/link";
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
        staggerChildren: 0.08,
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
    {
      title: "Practical Accounting",
      description: "Gain real-world accounting experience.",
      icon: Briefcase,
    },
  ];

  return (
    <section id="courses" className="py-28 bg-[#F8FAFC] relative overflow-hidden scroll-mt-10 border-y border-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(rgba(10,29,61,0.02)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D09C34] mb-3">
            OUR COURSES
          </h4>
          <h2 className="font-heading text-3.5xl sm:text-5xl font-extrabold text-[#0A1D3D] leading-tight">
            Programs Designed for Your Success
          </h2>
          <div className="h-1 w-16 bg-[#D09C34] mx-auto mt-4 rounded-full" />
        </div>

        {/* Staggered Grid Wrapper */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {courses.map((course) => {
            const slug = course.title.toLowerCase().replace(/\s+/g, "-");
            return (
              <Link href={`/courses/${slug}`} key={course.title} className="block">
                <motion.div
                  variants={cardVariants}
                  whileHover={{ y: -8 }}
                  className="bg-white border border-slate-100 rounded-2xl p-6 relative overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer h-full"
                >
                  {/* Expandable gold accent top line on hover */}
                  <div className="absolute top-0 left-0 w-full h-[4px] bg-[#D09C34] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                  <div className="space-y-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0A1D3D]/5 text-[#D09C34] group-hover:bg-[#0A1D3D] group-hover:text-white transition-all duration-300 shadow-sm border border-slate-50">
                      <course.icon size={20} className="group-hover:rotate-3 transition-transform duration-300" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-[#0A1D3D] tracking-wide group-hover:text-[#D09C34] transition-colors duration-200 uppercase">
                        {course.title}
                      </h3>
                      <p className="text-[#334155] text-xs sm:text-sm leading-relaxed mt-2.5 font-normal">
                        {course.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-[#D09C34] font-bold text-[11px] tracking-wider uppercase flex items-center gap-2 mt-6 self-start transition-all hover:gap-3 duration-300 group-hover:text-[#0A1D3D]">
                    <span>Learn More</span>
                    <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </motion.div>

        {/* Central Action Button */}
        <div className="mt-16 text-center">
          <Link href="/courses">
            <Button
              className="bg-[#0A1D3D] hover:bg-[#D09C34] text-white px-8 h-13 text-xs font-bold uppercase tracking-wider rounded shadow-md hover:shadow-lg inline-flex items-center gap-2 hover:translate-y-[-2px] duration-300 cursor-pointer font-bold"
            >
              <span>View All Courses</span>
              <ArrowRight size={14} />
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}
