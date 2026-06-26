"use client";

import { motion } from "framer-motion";
import {
  Users,
  BookOpen,
  CheckSquare,
  FileText,
  Compass,
  Layers,
  Target,
  Briefcase,
  ArrowRight,
} from "lucide-react";

export function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 80, damping: 18 },
    },
  };

  const advantages = [
    {
      title: "Experienced Faculty",
      desc: "Learn from qualified professionals and experts.",
      icon: Users,
    },
    {
      title: "Comprehensive Study Materials",
      desc: "Well-structured notes and resources for every topic.",
      icon: BookOpen,
    },
    {
      title: "Regular Mock Tests",
      desc: "Practice, evaluate and improve your performance.",
      icon: CheckSquare,
    },
    {
      title: "Practical Accounting Training",
      desc: "Gain real-world exposure with hands-on training.",
      icon: FileText,
    },
    {
      title: "Career Guidance",
      desc: "Personalized guidance for your career path.",
      icon: Compass,
    },
    {
      title: "Small Batch Sizes",
      desc: "Better interaction and individual attention.",
      icon: Layers,
    },
    {
      title: "Individual Attention",
      desc: "We focus on every student's growth.",
      icon: Target,
    },
    {
      title: "Placement Assistance",
      desc: "Support for internships and job opportunities.",
      icon: Briefcase,
    },
  ];

  return (
    <section className="py-28 bg-[#FFFFFF] relative overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Title and details (4 columns) */}
          <div className="lg:col-span-4 text-left space-y-6 lg:sticky lg:top-28">
            <div className="space-y-3">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D09C34]">
                WHY KRITHUN ACADEMY
              </h4>
              <h2 className="font-heading text-3.5xl sm:text-5xl font-extrabold text-[#0A1D3D] leading-tight">
                More Than Coaching, We Build Futures
              </h2>
              <div className="h-1 w-16 bg-[#D09C34] mt-4 rounded-full" />
            </div>
            
            <p className="text-[#334155] text-sm sm:text-base leading-relaxed font-normal">
              We focus on conceptual clarity, practical exposure and continuous performance improvement to help you achieve your professional goals.
            </p>

            <div className="pt-2">
              <button
                onClick={() => {
                  const el = document.getElementById("contact");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#D09C34] hover:text-[#0A1D3D] transition-colors duration-300 group cursor-pointer"
              >
                <span>Know More</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Right Column: Grid of 8 cards (8 columns) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {advantages.map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-white border border-slate-100 rounded-2xl p-6 shadow-md hover:shadow-xl hover:border-[#D09C34]/30 transition-all duration-300 flex items-start gap-4 group cursor-pointer text-left"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0A1D3D]/5 text-[#D09C34] group-hover:bg-[#0A1D3D] group-hover:text-white transition-all duration-300 shadow-sm border border-slate-50 shrink-0">
                  <item.icon size={18} />
                </div>
                <div className="space-y-1">
                  <h3 className="font-heading text-base font-bold text-[#0A1D3D] group-hover:text-[#D09C34] transition-colors duration-200 uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-[#475569] text-xs leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
