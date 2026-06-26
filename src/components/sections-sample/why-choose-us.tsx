"use client";

import { motion } from "framer-motion";
import {
  Users,
  BookOpen,
  CheckSquare,
  FileText,
  Compass,
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
      transition: { type: "spring" as const, stiffness: 60, damping: 15, ease: "easeOut" as const },
    },
  };

  const advantages = [
    {
      title: "Expert Faculty",
      desc: "Learn from experienced professionals with proven track records.",
      icon: Users,
    },
    {
      title: "Comprehensive Study Materials",
      desc: "Well-structured notes and resources for effective learning.",
      icon: BookOpen,
    },
    {
      title: "Mock Tests & Assessments",
      desc: "Regular mock tests to track progress and improve performance.",
      icon: CheckSquare,
    },
    {
      title: "Practical Learning",
      desc: "Real-world practical exposure and hands-on training.",
      icon: FileText,
    },
    {
      title: "Career Guidance",
      desc: "Personalized guidance to help you achieve your career goals.",
      icon: Compass,
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-5 text-left">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D09C34] mb-2">
              WHY CHOOSE US
            </h4>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#0A1D3D] leading-tight">
              The Krithun Academy Advantage
            </h2>
            <div className="h-0.5 w-12 bg-[#D09C34] mt-4" />
          </div>
          <div className="lg:col-span-7">
            <p className="text-slate-400 text-sm leading-relaxed font-light lg:max-w-xl">
              We are committed to your success with the best guidance, resources and support at every step.
            </p>
          </div>
        </div>

        {/* Staggered Advantages */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {advantages.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="bg-white border border-slate-100 rounded-xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-md hover:border-[#D09C34]/20 hover:translate-y-[-2px] transition-all duration-300 flex flex-col justify-start"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0A1D3D]/5 text-[#D09C34] mb-5">
                <item.icon size={18} />
              </div>
              <h3 className="font-heading text-sm font-bold text-[#0A1D3D] mb-2 uppercase tracking-wide">
                {item.title}
              </h3>
              <p className="text-slate-400 text-[11px] leading-relaxed font-light">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
