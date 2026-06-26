"use client";

import { motion } from "framer-motion";

export function Process() {
  const steps = [
    { title: "Choose Course", desc: "Browse our certifications and practical programs to select your path." },
    { title: "Register", desc: "Enroll easily online or offline to secure your study seat in the new batch." },
    { title: "Attend Classes", desc: "Engage in live concepts, practical accounting portals, and mock exams." },
    { title: "Become Successful", desc: "Ace your examinations and receive placement support into firms." },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 80, damping: 18 },
    },
  };

  return (
    <section className="py-28 bg-[#F8FAFC] relative overflow-hidden border-t border-slate-100">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-24">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D09C34] mb-3">
            METHODOLOGY
          </h4>
          <h2 className="font-heading text-3.5xl sm:text-5xl font-extrabold text-[#0A1D3D] leading-tight">
            Simple 4-Step Process
          </h2>
          <div className="h-1 w-16 bg-[#D09C34] mx-auto mt-4 rounded-full" />
          <p className="text-[#334155] text-base sm:text-lg leading-relaxed mt-6 font-normal">
            Your structured path to clearing professional examinations and launching a career.
          </p>
        </div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8"
        >
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="relative bg-white border border-slate-100 rounded-2xl p-8 pt-10 shadow-md hover:shadow-xl hover:border-[#D09C34]/30 transition-all duration-300 flex flex-col group cursor-pointer"
            >
              {/* Floating index badge */}
              <div className="absolute -top-5 left-8 h-10 w-10 rounded-xl bg-[#0A1D3D] text-[#D09C34] flex items-center justify-center font-heading text-lg font-bold border border-[#D09C34]/30 shadow-md group-hover:bg-[#D09C34] group-hover:text-[#0A1D3D] transition-colors duration-300">
                0{idx + 1}
              </div>

              <h3 className="font-heading text-xl font-bold text-[#0A1D3D] mb-3 group-hover:text-[#D09C34] transition-colors duration-200 uppercase tracking-wide">
                {step.title}
              </h3>
              <p className="text-[#475569] text-sm leading-relaxed font-normal">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
