"use client";

import { motion } from "framer-motion";
import { Users, CheckCircle, GraduationCap, Calendar } from "lucide-react";

export function Statistics() {
  const stats = [
    {
      value: "1500+",
      label: "Students Trained",
      icon: Users,
    },
    {
      value: "95%",
      label: "Success Rate",
      icon: CheckCircle,
    },
    {
      value: "10+",
      label: "Expert Faculty",
      icon: GraduationCap,
    },
    {
      value: "6+",
      label: "Years of Excellence",
      icon: Calendar,
    },
  ];

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
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 60, damping: 15, ease: "easeOut" as const },
    },
  };

  return (
    <section className="bg-[#0A1D3D] text-white py-10 relative overflow-hidden border-t border-white/5 shadow-inner">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-white/10"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className={`flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left pt-6 lg:pt-0 ${
                idx === 0 ? "pt-0" : ""
              }`}
            >
              {/* Circular Gold Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-[#D09C34] shrink-0 border border-white/10 shadow-sm">
                <stat.icon size={20} />
              </div>
              <div className="space-y-0.5">
                <div className="text-3xl font-extrabold tracking-tight text-white font-heading">
                  {stat.value}
                </div>
                <div className="text-slate-300 text-xs tracking-wider uppercase font-semibold">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
